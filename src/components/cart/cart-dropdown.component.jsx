import React from 'react';
import { connect } from 'react-redux';
import './cart-dropdown.style.scss';

import CustomButton from '../custom-buttons/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (
                <CartItem key={cartItems.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>go to checkout</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);