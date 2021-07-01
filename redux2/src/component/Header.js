import React from 'react';
import BaseButton from './BaseButton';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <BaseButton/>>
            <div>
             
                <Link to="/">News Redux</Link>
            </div>
        </header>
    )
}

export default Header;