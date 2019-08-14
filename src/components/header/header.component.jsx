import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; // connect is a HOC that let us to modify the component to access to things related to redux

import './header.style.scss';

import { ReactComponent as Logo } from '../../assets/images/logo/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
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
            {currentUser
                ?
                <div className='option' onClick={() => auth.signOut()}>sign out</div>
                :
                <Link className='option' to='/signin'>
                    sign in
                </Link>
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

// from root-reducer, passing directly the state of the currentUser into the Header
// instead of previously getting it down from the App <Header currentUser={this.state.currentUser} />
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);