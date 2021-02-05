import React from 'react';
import TextField from '@material-ui/core/TextField';
import styleSubscribe from './styleSubscribe';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import userSubscribe from '../../service/userSubscribe';
import { useHistory } from 'react-router-dom';

function Subscribe() {
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [nickName, setNickName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [verifyPassword, setVerifyPassword] = React.useState('');
	const [verifField, setVerifField] = React.useState(false);
	const classes = styleSubscribe();
	const history = useHistory();

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};
	const handleFirstName = (e) => {
		setFirstName(e.target.value);
	};
	const handleLastName = (e) => {
		setLastName(e.target.value);
	};
	const handleNickName = (e) => {
		setNickName(e.target.value);
	};
	const handleVerifyPassword = (e) => {
		setVerifyPassword(e.target.value);
	};

	const handleSubmit = () => {
		if (
			firstName.length < 1 ||
			lastName.length < 1 ||
			nickName.length < 1 ||
			email.length < 1 ||
			password.length < 1 ||
			verifyPassword.length < 1
		) {
			setVerifField(true);
		} else {
			setVerifField(false);
			userSubscribe(
				{
					firstName: firstName,
					lastName: lastName,
					nickName: nickName,
					email: email,
					password: password,
				},
				history
			);
		}
	};

	return (
		<div className={classes.main}>
			<h2>Inscription</h2>
			<form className={classes.form} noValidate autoComplete='off'>
				<TextField
					value={firstName}
					onChange={handleFirstName}
					className={classes.field}
					label='Prénom'
				/>

				<TextField
					value={lastName}
					onChange={handleLastName}
					className={classes.field}
					label='Nom'
				/>
				<TextField
					value={nickName}
					onChange={handleNickName}
					className={classes.field}
					label='Pseudo'
				/>
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
				<TextField
					type='password'
					value={verifyPassword}
					onChange={handleVerifyPassword}
					className={classes.field}
					label='Confirmation mot de passe'
				/>
				<Button
					variant='contained'
					color='primary'
					className={classes.button}
					onClick={handleSubmit}
					endIcon={<SaveIcon />}
				>
					Enregister
				</Button>
				<Button
					variant='contained'
					color='primary'
					className={classes.button}
					onClick={() => history.push('/')}
					endIcon={<SaveIcon />}
				>
					Retour
				</Button>
				{verifField && <h6>Veuillez remplir tout les champs svp.</h6>}
			</form>
		</div>
	);
}

export default Subscribe;
