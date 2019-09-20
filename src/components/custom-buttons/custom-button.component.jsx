import React from 'react';

import { CustomButtonContainer } from './custom-button.style';

// import './custom-button.style.scss';

// const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps}) => (
//     <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps} >
//         {children}
//     </button>
// );

/* Replace with Styled Component */
const CustomButton = ({ children, ...props}) => (
    <CustomButtonContainer  {...props} >
        {children}
    </CustomButtonContainer>
);

export default CustomButton;