import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ primary, backgroundColor, size, label, shape, ...props }) => {
  
  const type = primary ? 'btn--primary' : 'btn--secondary';

  return (
    <button
      type="button"
      className={['btn', `btn--${size}`, `btn--${type}`, `btn--${shape}`].join(' ')}
      title="yup"
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  shape: PropTypes.oneOf(['round', 'rounder', 'roundest']),
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  shape: '',
  primary: true,
  backgroundColor: null,
  disabled: false,
  size: 'medium',
  onClick: undefined,
};
