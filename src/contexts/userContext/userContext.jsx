import React, { createContext } from 'react';
import ChildrenPropTypes from '../../PropTypes/ChildrenPropTypes';
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

UserContextProvider.protoTypes = ChildrenPropTypes;

export default UserContextProvider;
