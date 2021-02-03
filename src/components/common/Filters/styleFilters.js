import { makeStyles } from '@material-ui/styles';

const styleFilters = makeStyles({
    search: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: '15px',
        border: '1px solid rgba(0,0,0,0.5)',
        boxShadow: '1px 1px rgba(0,0,0,0.5)',
        paddingLeft: '15px',
    },
    filters: {
        margin: '1rem'
    },
})

export default styleFilters;