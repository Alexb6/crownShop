import React from 'react';
import './App.css';
import HomePage from './components/home/homepage.component';
import { Route, Switch } from 'react-router-dom';

const HatsPage = (props) => {
	console.log(props);
	
	return (
		<div>
			<h1>Hats Page</h1>
		</div>
	);
}

// function App() {
// 	return (
// 		<div>
// 			<HomePage />
// 		</div>
// 	);
// }

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/hats' component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
