import React from 'react';
import { Link } from 'react-router-dom';

import './header.style.scss';

import { ReactComponent as Logo } from '../../assets/images/logo/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/' >
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                shop
            </Link>
            <Link className='option' to='/contact'>
                contact
            </Link>
            {   currentUser
                ?
                <div className='option' onClick={() => auth.signOut()}>sign out</div>
                :
                <Link className='option' to='/signin'>
                    sign in
                </Link>
            }
        </div>
    </div>
)

export default Header;