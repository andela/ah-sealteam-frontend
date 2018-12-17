import React from 'react';
import image from '../../assets/images/andela.png';
// import image2 from '../../assets/images/panda.jpg';
// import image3 from '../../assets/images/black.jpg';
// import image4 from '../../assets/images/bluepen.jpg';

const latestarticles = ({ title, tags, read_time, description }) => {
  return (
    <div className="col-xs-6 col-sm-6 col-lg-3 Card">
      <div className="card-header ">{tags}</div>
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img
              className="card-img-top card-image"
              src={image}
              alt="card-img"
            />
          </div>
          <div className="flip-box-back">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href="/" className="form-button">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="card-footer text-muted">{read_time}</div>
      </div>
    </div>
  );
};

export default latestarticles;
