import React, { useEffect } from 'react';
import axios from 'axios';
import Thumbnail from '../../components/common/thumbnail/Thumbnail';
import styleBuying from './styleBuying';
import Filters from '../../components/common/Filters/Filters';
import { BasketContext } from '../../contexts/BasketContext/BasketContext';

function Buying() {
	const { basket, setBasket } = React.useContext(BasketContext);
	const [items, setItems] = React.useState([]);
	const [filterName, setFilterName] = React.useState('');
	const [order, setOrder] = React.useState('');
	const classes = styleBuying();

	function handleFilters(e) {
		setFilterName(e.target.value);
	}

	function handleChangeOrder(e) {
		setOrder(e.target.value);
	}

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_URL_BACK}items/`, {
				header: {
					Origin: 'https://partager.netlify.app/',
				},
			})
			.then((res) => {
				setItems(res.data);
			});
	}, []);

	return (
		<div className={classes.main}>
			<Filters
				value={filterName}
				onChangeOrder={handleChangeOrder}
				onChangeSearch={handleFilters}
			/>
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
						.sort((a, b) => {
							if (order === 'increasing') {
								return a.price - b.price;
							} else if (order === 'descending') {
								return b.price - a.price;
							} else {
								return;
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
									onClick={() => {
										setBasket({
											status: true,
											items: [
												...basket.items,
												{
													id: item.iditem,
													creator: item.creator,
													price: item.price,
													description: item.description,
													name: item.label,
												},
											],
											totalPrice: basket.totalPrice + item.price,
										});
									}}
								/>
							);
						})}
			</div>
		</div>
	);
}

export default Buying;
