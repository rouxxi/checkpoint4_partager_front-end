import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import styleConnection from './styleConnection';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import userLogin from '../../service/userLogin';
import { UserContext } from '../../contexts/userContext/userContext';

function Connection() {
	const { userInfo, setUserInfo } = React.useContext(UserContext);
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [verifField, setVerifField] = React.useState(false);
	const classes = styleConnection();
	const history = useHistory();

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email.length < 1 || password.length < 1) {
			setVerifField(true);
		} else {
			userLogin(
				{
					email: email,
					password: password,
				},
				history,
				setUserInfo,
				userInfo
			);
		}
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
				<Link to='/subscribe'>
					{' '}
					<h6>Si vous n'etes pas encore inscris, il n'est pas trop tard !</h6>
				</Link>
				{verifField && <h6>Veuillez remplir tout les champs svp.</h6>}
			</form>
		</div>
	);
}

export default Connection;
