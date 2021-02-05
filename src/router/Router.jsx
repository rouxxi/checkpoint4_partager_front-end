import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx/NavBar';
import Basket from '../views/Basket/Basket';
import Buying from '../views/Buying/Buying';
import Connection from '../views/Connection/Connection';
import Orders from '../views/Orders/Orders';
import Selling from '../views/Selling/Selling';
import Subscribe from '../views/Subscribe/Subscribe';
import Profil from '../views/Profil/Profil';
import UserContextProvider from '../contexts/userContext/userContext';
import BasketContextProvider from '../contexts/BasketContext/BasketContext';

function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<UserContextProvider>
					<Route exact path='/'>
						<Connection />
					</Route>
					<Route exact path='/subscribe'>
						<Subscribe />
					</Route>
					<BasketContextProvider>
						<Route exact path='/orders'>
							<NavBar />
							<Orders />
						</Route>
						<Route exact path='/basket'>
							<NavBar />
							<Basket />
						</Route>
						<Route exact path='/buying'>
							<NavBar />
							<Buying />
						</Route>
						<Route exact path='/selling'>
							<NavBar />
							<Selling />
						</Route>
						<Route exact path='/profil'>
							<NavBar />
							<Profil />
						</Route>
					</BasketContextProvider>
				</UserContextProvider>
			</Switch>
		</BrowserRouter>
	);
}

export default Router;
