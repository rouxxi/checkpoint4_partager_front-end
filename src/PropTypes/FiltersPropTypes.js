import PropTypes from 'prop-types';

const FiltersPropTypes = {
    filterName: PropTypes.string,
    onChangeSearch: PropTypes.func,
    onChangeOrder: PropTypes.func,
    order: PropTypes.string
}

export default FiltersPropTypes;