import React, {Component} from 'react';
import UserDisplay from './UserDisplay';

const url = "https://developerjwt.herokuapp.com/api/auth/users";

class UserList extends Component {
    constructor(props) {
        super(props);

        this.state={
            users:''
        }
    }

    render(){
        return(
            <div>
                <UserDisplay userdata={this.state.users}/>
            </div>
        )
    }

    //call api 
    componentDidMount(){
        fetch(url, {method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({users:data})
        })
    }
}

export default UserList;