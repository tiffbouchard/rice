import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import './styles.css';

export default Button = ({ label, primary, shape, size, block, shadow, customStyle, ...props }) => {
  
  const type = primary ? 'btn--primary' : 'btn--secondary';
  const width = block && 'btn--block';
  const decoration = shadow && 'shadow';

  return (
    <button
      type="button"
      className={['btn', type, width, decoration, `btn--${size}`, `btn--${shape}`].join(' ')}
      style={customStyle}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  shape: PropTypes.oneOf(['default', 'round', 'rounder', 'roundest']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  shadow: PropTypes.bool,
  customStyle: PropTypes.object,
  onClick: PropTypes.func
};

Button.defaultProps = {
  disabled: false,
  size: 'medium',
  onClick: undefined,
  block: false
};