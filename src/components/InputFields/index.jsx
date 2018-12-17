import React from 'react';
import PropTypes from 'prop-types';

const inputField = ({
  type,
  placeholder,
  className,
  name,
  error,
  value,
  onChange
}) => (
  <div className="form-group form-wrapper divWrapper">
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
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
