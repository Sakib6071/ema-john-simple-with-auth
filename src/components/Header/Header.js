
import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    const [user]=useAuthState(auth)
    
   const [signOut] = useSignOut(auth)
  const handleSignOut =()=>{
    signOut()
  }
    return (
        <div>
            <nav className='navHeader'>
                <img src={logo} alt="logo" />
                <div>
                    <Link to="/shop">Shop</Link>
                    <Link to="/order">Order</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    {
                        user? <button onClick={handleSignOut} className=' text-white'>Sign Out</button>: <Link to="/Login">Login</Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;