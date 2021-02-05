import PropTypes from 'prop-types'

const ChildrenPropTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
}

export default ChildrenPropTypes;