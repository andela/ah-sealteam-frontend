import React from 'react';
import image from '../../assets/images/oops.gif';

const ErrorHandler = props => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <div className="error-template">
            <img src={image} alt="Error" />
            <h5>
              Your internet connection might be unstable or our server is
              temporarily out of reach
            </h5>
            <h2>Please check your connectivity or try again later.</h2>
            <div>
              <p>Sorry for the inconvenience</p>
            </div>
            <div className="error-actions">
              <a href="/" className="btn btn-lg form-button">
                <span className="glyphicon glyphicon-home" />
                Take Me Home{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ErrorHandler;
