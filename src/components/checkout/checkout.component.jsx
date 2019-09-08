import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout.style.scss';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../checkout-item/checkout-item.component';
import StripeCheckoutButton from '../stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
        <div className='total'>
            <span>Total: {total}€ </span>
        </div>
        <div className="test-warning">
            * Use the followig test credit card for for payment * <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV 123
        </div>
        <StripeCheckoutButton price={total} /> 
    </div>
);

const mapsStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapsStateToProps)(CheckoutPage);