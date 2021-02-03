import React from 'react';
import styleHeader from './styleHeader';

function Header() {
	const classes = styleHeader();
	return <div className={classes.headerFont}>Partager.com</div>;
}

export default Header;
