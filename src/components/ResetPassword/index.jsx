import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/index.scss';
import Loader from '../Loader';

const ResetPassword = props => {
    return (
        <form onSubmit={props.handleSubmit} action="#" id="resetPasswordForm">
            <div className="center_div col-md-6 offset-3">
                <div className="card">
                    {props.loading === true ? <Loader /> : ''}
                    <div className="card-body">
                        <h3 className="text-center default-text py-3">
                            Forgot Password?
                        </h3>
                        <p className="text">Enter your email below</p>
                        <div className="md-form">
                            <input
                                type="email"
                                id="defaultForm-email"
                                name="email"
                                placeholder="johndoe@mail.com"
                                className="form-control"
                                required
                            />
                        </div>
                        <div>
                            <p className="text-danger">{props.error}</p>
                        </div>
                        <div className="text-center">
                            <button className="form-button">Submit</button>
                        </div>
                        <br />
                        <p className="text-center">
                            <a href="./login">Login Here</a>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ResetPassword;
