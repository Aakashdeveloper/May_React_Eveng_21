import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <React.Fragment>
            <center>
                <h2>React Routing</h2>
            </center>
            <div>
                <Link to="/">Home</Link>
                <Link to="/post">Post</Link>
                <Link to="/profile">Profile</Link>
            </div>
            <hr/>
        </React.Fragment>
    )
}

export default Header;