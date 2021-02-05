import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import styleFilters from './styleFilters';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FiltersPropTypes from '../../../PropTypes/FiltersPropTypes';

function Filters(props) {
	const { filterName, onChangeSearch, onChangeOrder, order } = props;
	const classes = styleFilters();
	return (
		<div className={classes.filters}>
			<InputBase
				className={classes.search}
				value={filterName}
				onChange={onChangeSearch}
				placeholder='Recherche par Nom'
				inputProps={{ 'aria-label': 'search' }}
			/>

			<FormControl className={classes.formControl}>
				<InputLabel id='demo-simple-select-helper-label'>
					Trier par prix
				</InputLabel>
				<Select
					labelId='demo-simple-select-helper-label'
					id='demo-simple-select-helper'
					value={order}
					onChange={onChangeOrder}
				>
					<MenuItem value=''>Aucun</MenuItem>
					<MenuItem value='descending'>Décroissant</MenuItem>
					<MenuItem value='increasing'>Croissant</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}

Filters.propTypes = FiltersPropTypes;

export default Filters;
