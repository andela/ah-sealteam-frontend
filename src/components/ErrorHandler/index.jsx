import React from 'react';

const ErrorHandler = props => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <div className="error-template">
            <h1>:) Oops!</h1>
            <h2>The server is temporarily out of reach</h2>
            <h2>Please try again later!</h2>
            <div>
              <p>Sorry for the inconvenience. we’ll be back online shortly!</p>
              <p>— The Team</p>
            </div>
            <div className="error-actions">
              <a href="/" className="btn btn-info btn-lg">
                <span className="glyphicon glyphicon-home" />Take Me Home{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ErrorHandler;
