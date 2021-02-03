import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import stylethumbnail from './stylethumbnail';

function Thumbnail(props) {
	const { image, price, name, description } = props;
	const classes = stylethumbnail();
	return (
		<Card className={classes.main}>
			<CardActionArea>
				<CardMedia
					component='img'
					alt='Contemplative Reptile'
					height='140'
					image={image}
					title='Contemplative Reptile'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{name}
					</Typography>
					<Typography gutterBottom variant='h5' component='h4'>
						{`${price} €`}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.action}>
				<Button size='small' color='primary'>
					Ajouter au caddy
				</Button>
			</CardActions>
		</Card>
	);
}

export default Thumbnail;
