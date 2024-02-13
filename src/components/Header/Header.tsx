import React from 'react'
import logo from '../../assets/images/logo.png'
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={logo} alt=""/>
        </header>
    );
};

export default Header;