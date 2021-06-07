import React, {Component, Fragment} from 'react';
import './Header.css';

class Header extends Component{
    constructor(props){
        super(props)

        console.log(">>>>>in constructor")
        this.state={
            title:'My React App',
            keyword:'User Input Here'
        }
    }

    handleChange=(event)=>{
        // console.log(event.target.value)
        this.setState({keyword: event.target.value ? event.target.value : 'User Input Here'})
        this.props.userText(event.target.value)
    }

    render(){
        console.log(">>>>>in render")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color: 'white'}}>{this.state.keyword}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        )
    } 
}

export default Header;