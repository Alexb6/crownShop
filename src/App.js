import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';

import HomePage from './components/home/homepage.component';
import ShopPage from './components/shop/shop.component';
import SignInAndSignUpPage from './components/sign-in_sign-up/sign-in&sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';


class App extends React.Component {

	unsubscribeFromAuth = null

	componentDidMount() {
		const {setCurrentUser} = this.props;
		
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

			if (userAuth) {
				const useRef = await createUserProfileDocument(userAuth);
				useRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					})
				});
			} else {
				setCurrentUser(userAuth);
			}

		});
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
					<Route exact path='/shop' component={ShopPage} />
					<Route exact path='/signin' component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
