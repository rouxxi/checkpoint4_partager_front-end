import { makeStyles } from '@material-ui/core';
import { markeStyles } from '@material-ui/styles';

const styleBuying = makeStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    thumbnails: {
        margin: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});

export default styleBuying;