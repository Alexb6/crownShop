import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import HomePage from './components/home/homepage.component';
import ShopPage from './components/shop/shop.component';
import SignInAndSignUpPage from './components/sign-in_sign-up/sign-in&sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			
			if (userAuth) {
				const useRef = await createUserProfileDocument(userAuth);
				useRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					}, () => {
						console.log(this.state);
					})
				});
			} else {
				this.setState({ currentUser: userAuth });
			}

		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route exact path='/signin' component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
