import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='navHeader'>
                <img src={logo} alt="logo" />
                <div>
                    <a href="">Home</a>
                    <a href="">Order</a>
                    <a href="">Inventory</a>
                    <a href="">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;