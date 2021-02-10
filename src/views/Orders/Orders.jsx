import React, { useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../../contexts/userContext/userContext';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import styleOrders from './styleOrders';

function Orders() {
	const { userInfo } = React.useContext(UserContext);
	const { idUser } = userInfo;
	const [orders, setOrders] = React.useState([]);
	const classes = styleOrders();

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_URL_BACK}items/${idUser}/bought/`, {
				headers: {
					Origin: 'https://partager.netlify.app/',
				},
			})
			.then((res) => setOrders(res.data));
	}, [idUser]);

	return (
		<div className={classes.main}>
			<h2>Articles achetés</h2>
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
						{orders &&
							orders.map((row, index) => {
								return (
									<TableRow key={row.label}>
										<TableCell component='th' scope='row'>
											{row.label}
										</TableCell>
										<TableCell align='left'>{row.creator}</TableCell>
										<TableCell align='left'>{row.price}</TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default Orders;
