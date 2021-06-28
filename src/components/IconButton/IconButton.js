import PropTypes from 'prop-types';

const IconButton = ({ children, onClick, ...allyprops }) => (
  <button type="button" onClick={onClick} {...allyprops}>
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
