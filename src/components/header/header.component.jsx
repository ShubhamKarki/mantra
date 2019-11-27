import React from 'react';
import {Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import './header.styles.scss';


const Header = () => {
    return (
        <div className='header'>
        	<div className='logo-container'>
            <Link to='/'>
        	<img src={logo} alt='logo' height= '50' width='auto'/>
            </Link>

        	</div>

        	<div className='options'> 
            <Link  className='option' to='/activity'>
                Activity
                </Link>

        		{/*<Link  className='option' to='/profile'>
        		Profile
        		</Link>

        		

                <Link  className='option' to='/signin'>
                Sign Up
                </Link>

        		<Link  className='option' to='/signin'>
        		Sign Out
        		</Link>

        		<Link  className='option' to='/history'>
        		history
        		</Link>*/}

            </div>
        </div>
    )
};

export default Header;
