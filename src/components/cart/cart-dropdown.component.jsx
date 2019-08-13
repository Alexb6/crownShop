import React from 'react';
import CustomButton from '../custom-buttons/custom-button.component';

import './cart-dropdown.style.scss';

export const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>go to checkout</CustomButton>
    </div>
);

