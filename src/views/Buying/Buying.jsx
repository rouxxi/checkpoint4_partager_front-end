import React from 'react';
import Thumbnail from '../../components/common/thumbnail/Thumbnail';

function Buying() {
	return (
		<div>
			buy
			<Thumbnail
				price={12}
				name='ecureuil'
				description='llala'
				image='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Nutkin.jpg/1024px-Nutkin.jpg'
			/>
		</div>
	);
}

export default Buying;
