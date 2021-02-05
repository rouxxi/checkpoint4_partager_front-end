import PropTypes from 'prop-types';

const ThumbnailPropTypes = {
    image: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    onClick: PropTypes.func
}

export default ThumbnailPropTypes;