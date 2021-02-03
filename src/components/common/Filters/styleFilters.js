import { makeStyles } from '@material-ui/styles';

const styleFilters = makeStyles({
    search: {
        marginTop: '15px',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: '15px',
        border: '1px solid rgba(0,0,0,0.5)',
        boxShadow: '1px 1px rgba(0,0,0,0.5)',
        paddingLeft: '15px',
        height: '35px',
    },
    filters: {
        margin: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    formControl: {
        width: '150px',
        margin: '20px',
    },
})

export default styleFilters;