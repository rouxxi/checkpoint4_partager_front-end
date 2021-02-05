import React, { createContext } from 'react';
import ChildrenPropTypes from '../../PropTypes/ChildrenPropTypes';

export const BasketContext = createContext(null);

function BasketContextProvider({ children }) {
	const [basket, setBasket] = React.useState({
		status: false,
		items: [''],
		totalPrice: 0,
	});

	return (
		<BasketContext.Provider value={{ basket, setBasket }}>
			{children}
		</BasketContext.Provider>
	);
}

BasketContextProvider.protoTypes = ChildrenPropTypes;

export default BasketContextProvider;
