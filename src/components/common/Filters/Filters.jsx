import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import styleFilters from './styleFilters';

function Filters(props) {
	const { filterName, onChange } = props;
	const classes = styleFilters();
	return (
		<div className={classes.filters}>
			<InputBase
				className={classes.search}
				value={filterName}
				onChange={onChange}
				placeholder='Recherche par Nom'
				inputProps={{ 'aria-label': 'search' }}
			/>
		</div>
	);
}

export default Filters;
