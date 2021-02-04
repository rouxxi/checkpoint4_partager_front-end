import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { UserContext } from '../../contexts/userContext/userContext';
import styleProfil from './styleProfil';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Profil() {
	const { userInfo, setUserInfo } = React.useContext(UserContext);
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [nickName, setNickName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [edit, setEdit] = React.useState(true);
	const history = useHistory();
	const classes = styleProfil();

	const handleEmail = (e) => {
		setEmail(e.target.value);
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

	const handleDisable = () => {
		setEdit(!edit);
	};
	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('id');
		history.push('/');
	};
	const handleSubmit = () => {
		const { idUser } = userInfo;

		setUserInfo({
			...userInfo,
			firstName: firstName.length > 1 ? firstName : userInfo.firstName,
			lastName: lastName.length > 1 ? lastName : userInfo.lasttName,
			nickName: nickName.length > 1 ? nickName : userInfo.nickName,
			email: email.length > 1 ? email : userInfo.email,
		});

		axios
			.put(`${process.env.REACT_APP_URL_BACK}users/${idUser}/profil/`, userInfo)
			.then((res) => {
				console.log(res);
				console.log(userInfo);
				setUserInfo({
					...res.data.user,
					firstName: res.data.user.firstName,
					lastName: res.data.user.lastName,
					nickName: res.data.user.nickName,
					email: res.data.user.email,
				});
				setEdit(!edit);
			});
	};
	return (
		<div className={classes.main}>
			<h2>{`Profile de ${userInfo.nickName}`}</h2>
			<form className={classes.form} noValidate autoComplete='off'>
				<TextField
					value={firstName}
					onChange={handleFirstName}
					className={classes.field}
					label={userInfo.firstName}
					disabled={edit}
				/>

				<TextField
					value={lastName}
					onChange={handleLastName}
					className={classes.field}
					label={userInfo.lastName}
					disabled={edit}
				/>
				<TextField
					value={nickName}
					onChange={handleNickName}
					className={classes.field}
					label={userInfo.nickName}
					disabled={edit}
				/>
				<TextField
					value={email}
					onChange={handleEmail}
					className={classes.field}
					label={userInfo.email}
					disabled={edit}
				/>

				{edit ? (
					<Button
						variant='contained'
						color='primary'
						onClick={handleDisable}
						className={classes.button}
					>
						Modifier
					</Button>
				) : (
					<Button
						variant='contained'
						color='primary'
						className={classes.button}
						onClick={handleSubmit}
						endIcon={<SaveIcon />}
					>
						enregistrer
					</Button>
				)}
			</form>
			<Button
				variant='contained'
				color='secondary'
				className={classes.button}
				onClick={handleLogout}
			>
				Deconnecxion
			</Button>
		</div>
	);
}

export default Profil;
