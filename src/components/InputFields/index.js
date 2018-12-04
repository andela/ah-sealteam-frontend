import React from 'react';
import PropTypes from 'prop-types';
import '../SignupForm/index.scss';

const inputField = ({ type, placeholder, className, name, error }) => (
  <div className="form-group form-wrapper">
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      name={name}
      required
    />
    <p className="help-block with-errors">{error}</p>
  </div>
);

export default inputField;

inputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
