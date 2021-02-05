import { makeStyles } from '@material-ui/styles';

const styleOrders = makeStyles({
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
        borderRadius: '10px',
        backgroundColor: 'green',
        padding: '10px',
        width: '150px',
        fontSize: '20px',
        fontWeight: 'bolder',
        outline: 'none',
    },
});


export default styleOrders;