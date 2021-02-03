import React, { useEffect } from 'react';
import axios from 'axios';
import Thumbnail from '../../components/common/thumbnail/Thumbnail';
import styleBuying from './styleBuying';
import Filters from '../../components/common/Filters/Filters';

function Buying() {
	const [items, setItems] = React.useState([]);
	const [filterName, setFilterName] = React.useState('');

	const classes = styleBuying();

	function handleFilters(e) {
		setFilterName(e.target.value);
	}
	useEffect(() => {
		axios.get(`${process.env.REACT_APP_URL_BACK}items/`).then((res) => {
			console.log(res);
			setItems(res.data);
		});
	}, []);
	return (
		<div className={classes.main}>
			<Filters value={filterName} onChange={handleFilters} />
			<div className={classes.thumbnails}>
				{items &&
					items
						.filter((element) => {
							if (filterName) {
								return element.label
									.toLowerCase()
									.includes(filterName.toLowerCase());
							} else {
								return true;
							}
						})
						.map((item) => {
							return (
								<Thumbnail
									key={`${item.iditem} ${item.label}`}
									id={item.iditem}
									creator={item.creator}
									price={item.price}
									name={item.label}
									description={item.description}
									image={item.picture}
								/>
							);
						})}
			</div>
		</div>
	);
}

export default Buying;
