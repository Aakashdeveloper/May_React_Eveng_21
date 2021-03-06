import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo";

class Profile extends Component{
    constructor(props){
        super(props);

        this.state = {
            user:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk');
        this.props.history.push('/')
    }

    conditionalRender = () => {
        if(this.state.user.role){
            if(this.state.user.role === "admin"){
                return(
                    <Link to="/list" className="btn btn-success">
                        User List
                    </Link>
                )
            }
        }
    }

    render(){
        if(sessionStorage.getItem('ltk') == null){
            this.props.history.push('/')
        }
        sessionStorage.setItem('rtk',this.state.user.role)
        return(
            <div className="container">
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3>User Profile</h3>
                    </div>
                    <div className="panel-body">
                        <h1>Hi {this.state.user.name}</h1>
                        <h1>Your Email id:  {this.state.user.email}</h1>
                        <h1>Your Phone Number: {this.state.user.phone}</h1>
                        <h1>Your Role is: {this.state.user.role}</h1>
                    </div>
                    {this.conditionalRender()} &nbsp;
                    <button className="btn btn-danger" onClick={this.handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
            
        )
        
    }

    // get user info 
    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers: {
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                user:data
            })
        })
    }
}

export default Profile;