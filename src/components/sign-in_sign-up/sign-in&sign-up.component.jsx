import React from 'react';

import './sign-in&sign-up.style.scss';

import SignIn from './sign-in.component';
import SignUp from './sign-up.component';

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;