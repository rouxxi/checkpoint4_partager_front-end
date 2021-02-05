import React, { createContext } from 'react';

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

export default BasketContextProvider;
