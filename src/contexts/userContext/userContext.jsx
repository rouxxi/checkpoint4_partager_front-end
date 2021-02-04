import React, { createContext } from 'react';

export const UserContext = createContext({});

function UserContextProvider({ children }) {
	const [userInfo, setUserInfo] = React.useState({
		idUser: '',
		firstName: '',
		lastName: '',
		nickName: '',
		email: '',
		money: 0,
	});

	return (
		<UserContext.Provider value={{ userInfo, setUserInfo }}>
			{children}
		</UserContext.Provider>
	);
}

export default UserContextProvider;
