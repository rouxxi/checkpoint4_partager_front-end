import { makeStyles } from '@material-ui/core/styles';

const stylethumbnail = makeStyles({
    main: {
        maxWidth: '200px',
        margin: '1rem',
        border: '1px solid rgba(0,0,0,0.6)',
    },
    action: {
        display: 'flex',
        justifyContent: 'center',
    },
})

export default stylethumbnail;