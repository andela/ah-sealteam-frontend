import React from 'react';
import SocialLogin from 'react-social-login';

const Button = ({ children, triggerLogin, ...props }) => (
    <button
        onClick={triggerLogin}
        {...props}
        className={props.classes}
        id={props.id}
    >
        {children}
    </button>
);

export default SocialLogin(Button);
