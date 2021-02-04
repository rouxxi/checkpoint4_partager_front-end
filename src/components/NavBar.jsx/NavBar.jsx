import React from 'react';
import styleNavBar from './styleNavBar';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { BasketContext } from '../../contexts/BasketContext/BasketContext';
import { UserContext } from '../../contexts/userContext/userContext';

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
	},
}))(Badge);

function NavBar() {
	const { userInfo } = React.useContext(UserContext);

	const { basket, setBasket } = React.useContext(BasketContext);

	const classes = styleNavBar();

	return (
		<div className={classes.main}>
			<ul className={classes.Ul}>
				<Link to='/buying'>
					<li>Achat</li>{' '}
				</Link>
				<Link to='/selling'>
					<li>Vente</li>
				</Link>
				<Link to='/orders'>
					<li>Historique</li>
				</Link>
				<Link to='/profil'>
					<li>Profil</li>
				</Link>
				<Link to='/basket'>
					<li>
						<IconButton aria-label='cart' className={classes.buttonBasket}>
							{basket.status ? (
								<StyledBadge
									badgeContent={() => {
										return JSON.stringify(localStorage.getItem('basket'))
											.length;
									}}
									color='secondary'
								>
									<ShoppingCartIcon className={classes.kart} />
								</StyledBadge>
							) : (
								<StyledBadge color='secondary'>
									<ShoppingCartIcon className={classes.kart} />
								</StyledBadge>
							)}
						</IconButton>
					</li>
					<li>{`${userInfo.money} €`}</li>
				</Link>
			</ul>
		</div>
	);
}

export default NavBar;
