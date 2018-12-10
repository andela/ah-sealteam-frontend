import React, { Component } from 'react';
import './index.scss';

class Loader extends Component {
  render() {
    return (
      <div className="text-center divLoader">
        <span className="loader">
          <span className="loader-box" />
          <span className="loader-box" />
          <span className="loader-box" />
        </span>
      </div>
    );
  }
}

export default Loader;
