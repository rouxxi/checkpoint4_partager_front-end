import { makeStyles } from '@material-ui/styles';

const styleBasket = makeStyles({
    container: {
        margin: '1rem',
        maxWidth: '700px',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '1rem',
        width: '100%',
    },
    button: {
        transition: 'all 0.8s ease-in-out',
        transform: 'translateX(0)',
        borderRadius: '10px',
        backgroundColor: 'green',
        padding: '10px',
        width: '150px',
        fontSize: '20px',
        fontWeight: 'bolder',
        outline: 'none',
    },
    buttonOff: {
        transition: 'all 0.8s ease-in-out',
        transform: 'translateX(-9999px)',
        borderRadius: '10px',
        backgroundColor: 'green',
        padding: '10px',
        width: '150px',
        fontSize: '20px',
        fontWeight: 'bolder',
        outline: 'none',
    },
    delete: {
        maxWidth: '30px',
        padding: 0,
        margin: 0
    },
});

export default styleBasket;