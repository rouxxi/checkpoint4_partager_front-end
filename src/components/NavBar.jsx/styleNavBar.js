import { makeStyles } from '@material-ui/styles'

const styleNavBar = makeStyles({
    main: {
        backgroundColor: 'black',
        color: 'rgba(255,255,255,0.8)',

        '& a': {
            textDecoration: 'none',
            color: 'rgba(255,255,255,0.8)',
        },
    },
    Ul: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        listStyle: 'none',

        '& li:hover': {
            cursor: 'pointer',
        },
    },
    kart: {
        color: 'rgba(255,255,255,0.8)',
    },
    buttonBasket: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
    },
});
export default styleNavBar;