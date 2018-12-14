import React from 'react';
import image from '../../assets/images/ah1.jpg';

const Header = () => {
  return (
    <header>
      <div className="overlay" />
      <img src={image} alt="header" />
      <div className="container">
        <div className="d-flex text-center h-100 video-text">
          <div className="my-auto w-100 text-white">
            <h1 className="display-3">Authors Haven</h1>
            <h2>A platform for the creative at heart</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
