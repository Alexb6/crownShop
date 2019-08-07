import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './components/home/homepage.component';
import ShopPage from './components/shop/shop.component';
import Header from './components/header/header.component';



function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
