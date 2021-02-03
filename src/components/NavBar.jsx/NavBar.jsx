import React from 'react';
import styleNavBar from './styleNavBar';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
	},
}))(Badge);

function NavBar() {
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
						<IconButton aria-label='cart'>
							<StyledBadge badgeContent={1} color='secondary'>
								<ShoppingCartIcon className={classes.kart} />
							</StyledBadge>
						</IconButton>
					</li>
				</Link>
			</ul>
		</div>
	);
}

export default NavBar;
