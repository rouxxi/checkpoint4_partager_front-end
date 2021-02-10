import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

function PrivateConnection(component, path) {
	const [authorization, setAuthorization] = React.useState('');

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_URL_BACK}users/`, {
				headers: {
					Origin: 'https://partager.netlify.app/',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			})
			.then((res) => {
				setAuthorization('');
			})
			.catch((err) => setAuthorization(err));
	}, []);
	return (
		<div>
			{!authorization && <Route exact path={path} component={component} />}
			{authorization && 'connectez vous !'}
		</div>
	);
}

export default PrivateConnection;
