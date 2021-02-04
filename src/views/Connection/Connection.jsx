import React from 'react';
import TextField from '@material-ui/core/TextField';
import styleConnection from './styleConnection';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import userLogin from '../../service/userLogin';

function Connection() {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const classes = styleConnection();

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		userLogin({
			email: email,
			password: password,
		});
	};
	return (
		<div className={classes.main}>
			<h2>Connexion</h2>
			<form className={classes.form} noValidate autoComplete='off'>
				<TextField
					value={email}
					onChange={handleEmail}
					className={classes.field}
					label='Email'
				/>
				<TextField
					type='password'
					value={password}
					onChange={handlePassword}
					className={classes.field}
					label='Mot de passe'
				/>

				<Button
					variant='contained'
					color='primary'
					className={classes.button}
					onClick={handleSubmit}
					endIcon={<ExitToAppIcon />}
				>
					Connexion
				</Button>
			</form>
		</div>
	);
}

export default Connection;
