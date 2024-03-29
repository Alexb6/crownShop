import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.scss';

import HomePage from './components/home/homepage.component';
import ShopPage from './components/shop/shop.component';
import SignInAndSignUpPage from './components/sign-in_sign-up/sign-in&sign-up.component';
import Header from './components/header/header.component';
import CheckoutPage from './components/checkout/checkout.component';


import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.action';

class App extends React.Component {

	unsubscribeFromAuth = null

	componentDidMount() {
		const {checkUserSession} = this.props;
		checkUserSession();
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route
						exact path='/signin'
						render={() =>
							this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
						} />
				</Switch>
			</div>
		);
	}
}

// to have access to this.props.currentUser
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
