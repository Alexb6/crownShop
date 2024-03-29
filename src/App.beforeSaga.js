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

import { auth, createUserProfileDocument, /* addCollectionAndDocuments */ } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';


class App extends React.Component {

	unsubscribeFromAuth = null

	componentDidMount() {
		const { setCurrentUser, /* collectionArray */ } = this.props;

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
				// addCollectionAndDocuments('collections', collectionArray.map(({ title, items }) => ({ title, items })));
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
	currentUser: selectCurrentUser,
	// collectionArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
