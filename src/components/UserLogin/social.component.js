import SocialButton from '../../containers/Signin/socialButton';
import { FB_CLIENT_ID, GG_CLIENT_ID } from '../../config';
import React from 'react';

const SocialLoginComponent = props => {
    return (
        <div className="d-flex justify-content-center">
            <SocialButton
                provider="google"
                appId={GG_CLIENT_ID}
                onLoginSuccess={props.handleLogin}
                onLoginFailure={props.hanldeFailure}
                classes={'btn btn-danger btn-circle btn-lg float-left'}
                id="google-id"
            >
                <span className="fa fa-google-plus" />
            </SocialButton>
            <SocialButton
                provider="facebook"
                appId={FB_CLIENT_ID}
                onLoginSuccess={props.handleLogin}
                onLoginFailure={props.hanldeFailure}
                children={<span className="fa fa-facebook-official" />}
                classes={'btn btn-primary btn-circle btn-lg float-left'}
                id="facebook-id"
            >
                <span className="fa fa-facebook-official" />
            </SocialButton>
        </div>
    );
};

export default SocialLoginComponent;
