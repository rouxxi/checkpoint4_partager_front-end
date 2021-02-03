import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Basket from '../views/Basket/Basket';
import Buying from '../views/Buying/Buying';
import Connection from '../views/Connection/Connection';
import Home from '../views/Home/Home';
import Orders from '../views/Orders/Orders';
import Selling from '../views/Selling/Selling';
import Subscribe from '../views/Subscribe/Subscribe';

function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/subscribe'>
					<Subscribe />
				</Route>
				<Route exact path='/connection'>
					<Connection />
				</Route>
				<Route exact path='/order'>
					<Orders />
				</Route>
				<Route exact path='/basket'>
					<Basket />
				</Route>
				<Route exact path='/buying'>
					<Buying />
				</Route>
				<Route exact path='/selling'>
					<Selling />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Router;
