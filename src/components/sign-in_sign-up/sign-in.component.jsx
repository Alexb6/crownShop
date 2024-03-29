import React, { Component } from 'react';
import { connect } from 'react-redux';

import './sign-in.style.scss';

import FormInput from './form-input.component';
import CustomButton from '../custom-buttons/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart } = this.props;
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type="email" value={this.state.email} label='Email' required
                        handleChange={this.handleChange}
                    />
                    <FormInput name='password' type='password' value={this.state.password} label='Password' required
                        handleChange={this.handleChange}
                    />
                    <div className='buttons'>
                        <CustomButton type='submit' value='Submit Form'>sign in</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn >sign in with gmail</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);