import React from 'react';
import styleHeader from './styleHeader';

function Header() {
	const classes = styleHeader();
	return (
		<div className={classes.headerFont}>
			<h1>Partager.com</h1>
		</div>
	);
}

export default Header;
