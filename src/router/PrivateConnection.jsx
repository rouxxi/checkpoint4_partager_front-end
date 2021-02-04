import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

function PrivateConnection(component, path) {
	const [authorization, setAuthorization] = React.useState('');

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_URL_BACK}users/`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			})
			.then((res) => {
				setAuthorization('');
				console.log(res);
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