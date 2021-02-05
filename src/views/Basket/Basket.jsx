import React from 'react';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import styleBasket from './styleBasket';
import { BasketContext } from '../../contexts/BasketContext/BasketContext';
import { UserContext } from '../../contexts/userContext/userContext';

function Basket() {
	const { basket, setBasket } = React.useContext(BasketContext);
	const { userInfo } = React.useContext(UserContext);
	const [enoughtMoney, setEnoughtMoney] = React.useState(false);
	const [bought, setBought] = React.useState(false);
	const classes = styleBasket();

	const handleSubmit = () => {
		const { idUser } = userInfo;
		if (userInfo.money < basket.totalPrice) {
			setEnoughtMoney(true);
		} else {
			basket.items.forEach((element) => {
				axios
					.put(`${process.env.REACT_APP_URL_BACK}items/bought/`, {
						idItems: element.id,
						idUser: userInfo.idUser,
					})
					.then((res) => setBought(true))
					.catch((error) => console.error(error))
					.then(() =>
						setBasket({
							status: false,
							items: [''],
							totalPrice: 0,
						})
					);
			});

			axios
				.put(`${process.env.REACT_APP_URL_BACK}users/${idUser}/bought/`, {
					totalPrice: userInfo.money - (basket.totalPrice * 1.2).toFixed(2),
				})
				.then((res) => console.log(res));
		}
	};

	return (
		<div className={classes.main}>
			<TableContainer component={Paper} className={classes.container}>
				<Table className={classes.table} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Nom</TableCell>
							<TableCell align='left'>Vendeur</TableCell>
							<TableCell align='left'>Prix</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{basket.items.map((row, index) => {
							if (index > 0) {
								return (
									<TableRow key={row.label}>
										<TableCell component='th' scope='row'>
											{row.name}
										</TableCell>
										<TableCell align='left'>{row.creator}</TableCell>
										<TableCell align='left'>{row.price}</TableCell>
									</TableRow>
								);
							}
						})}
						<TableRow>
							<TableCell rowSpan={3} />
							<TableCell colSpan={1}>Subtotal</TableCell>
							<TableCell align='left'>{basket.totalPrice}€</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Tax (20%)</TableCell>
							<TableCell align='left'>
								{(basket.totalPrice * 0.2).toFixed(2)}€
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell colSpan={1}>Total</TableCell>
							<TableCell align='left'>
								{(basket.totalPrice * 1.2).toFixed(2)}€
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<button className={classes.button} onClick={handleSubmit}>
				Acheter
			</button>
			{enoughtMoney && (
				<h6>
					Vous n'avez pas assez d'argent, pour acheter la totalité du panier!
				</h6>
			)}
			{bought && (
				<h6>
					Vous n'avez pas assez d'argent, pour acheter la totalité du panier!
				</h6>
			)}
		</div>
	);
}

export default Basket;
