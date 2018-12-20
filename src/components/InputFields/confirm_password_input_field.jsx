import React from 'react';
import InputField from './index';

const ConfirmPasswordField = props => {
    //renders the input field for confirm password
    return (
        <InputField
            type="password"
            placeholder="Confirm Password"
            className="form-control control"
            name="confirm-password"
            error={
                props.confirmpasswordError === ''
                    ? ''
                    : props.confirmpasswordError
            }
        />
    );
};

export default ConfirmPasswordField;
