import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100; // Because Stripe count in cents
    const publishableKey = 'pk_test_FUmya0AtR4zMfEOMhXeXp65Q00SuN9UkO5';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label= 'Pay Now'
            name= 'Crown Clothing'
            billingAddress
            shippingAddress
            image= 'https://svgshare.com/i/CUz.svg'
            description= {`Your total is ${price}€`}
            currency="EUR"
            amount= {priceForStripe}
            panelLabel= 'Pay Now'
            token= {onToken}
            stripeKey= {publishableKey}
        />
    );
};

export default StripeCheckoutButton;