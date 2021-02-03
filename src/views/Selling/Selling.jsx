import React from 'react';
import TextField from '@material-ui/core/TextField';
import styleSelling from './styleSelling';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';

function Selling() {
	const [label, setLabel] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [linkImage, setLinkImage] = React.useState('');
	const [price, setPrice] = React.useState('');
	const [user, setUser] = React.useState(1);
	const [error, setError] = React.useState('');
	const classes = styleSelling();

	function handleChangeLabel(e) {
		setLabel(e.target.value);
	}
	function handleChangePrice(e) {
		setPrice(e.target.value);
	}
	function handleChangeDescription(e) {
		setDescription(e.target.value);
	}
	function handleChangeLinkImage(e) {
		setLinkImage(e.target.value);
	}
	function handleSubmit() {
		axios
			.post(`${process.env.REACT_APP_URL_BACK}items/`, {
				label: label,
				price: price,
				description: description,
				linkImage: linkImage,
				user: user,
			})
			.then((res) => {
				console.log(res);
				console.log(process.env.REACT_APP_URL_BACK);
				setError(res);
			});
	}

	return (
		<div className={classes.main}>
			<h1>Publies ta propre annonce !</h1>
			<form className={classes.form} noValidate autoComplete='off'>
				<TextField
					value={label}
					onChange={handleChangeLabel}
					className={classes.field}
					label="Intilulé de l'annonce"
				/>
				<Input
					value={price}
					onChange={handleChangePrice}
					className={classes.field}
					placeholder='Prix'
					endAdornment={<InputAdornment position='end'>€</InputAdornment>}
				/>

				<TextareaAutosize
					value={description}
					onChange={handleChangeDescription}
					className={classes.field}
					aria-label='minimum height'
					rowsMin={3}
					placeholder='Description'
				/>
				<TextField
					onChange={handleChangeLinkImage}
					value={linkImage}
					className={classes.field}
					label="Lien de l'image"
				/>
				{/* <input type='file' /> */}

				<Button
					onClick={handleSubmit}
					variant='contained'
					color='primary'
					className={classes.button}
					endIcon={<SendIcon />}
				>
					Enregister
				</Button>
			</form>
		</div>
	);
}

export default Selling;
