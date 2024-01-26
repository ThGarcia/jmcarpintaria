import React, { useState } from 'react';
import './Menu.css';

import logo from '../../images/logo.png';

const Menu = () => {

    const[menuOpen, setMenuOpen] = useState(false);

    const showMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='menu'>
            <img src={logo} className='menu-logo' alt='Logo JM Carpintaria'/>
            <div className='menu-desktop'>
                <a href='/'><p className='menu-buttons'>About</p></a>
                <a href='/'><p className='menu-buttons'>Works</p></a>
                <a href='/'><p className='menu-buttons'>Info</p></a>
                <a href='/'><p className='menu-buttons'>Contact</p></a>
            </div>
            <div className='menu-mobile'>
                <button onClick={showMenu} className='menu-buttons'><i className="ri-menu-line"></i></button>
                {menuOpen &&
                    <div className='menu-options'>
                        <a href='/'>About</a>
                        <a href='/'>Works</a>
                        <a href='/'>Info</a>
                        <a href='/'>Contact</a>
                    </div>
                }
            </div>
        </div>
    );
};

export default Menu;
