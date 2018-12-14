import React from 'react';
import image from '../../assets/images/andela.png';
import image2 from '../../assets/images/panda.jpg';
import image3 from '../../assets/images/black.jpg';
import image4 from '../../assets/images/bluepen.jpg';

const latestarticles = props => {
  console.log(props.results ? props.results.map(item => item) : null);
  let title, tags, read_time, description;
  if (props.results) {
    title = props.results.map(item => item.title);
    tags = props.results.map(item => item.tags);
    read_time = props.results.map(item => item.read_time);
    description = props.results.map(item => item.description);
  }
  return (
    <div className="container-fluid latest-articles">
      <div className="row div-cards flex-row flex-nowrap">
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
        <div className="col-xs-6 col-sm-6 col-lg-3 Card">
          <div className="card-header">Movies</div>
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img
                  className="card-img-top card-image"
                  src={image2}
                  alt="card-img"
                />
              </div>
              <div className="flip-box-back">
                <div className="card-body">
                  <h5 className="card-title">Kung Fu Panda: </h5>
                  <p className="card-text">
                    Shifu: If You only do what you can, You will never be more
                    than you are now...
                  </p>
                  <a href="/" className="form-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="card-footer text-muted">Posted 4 days ago</div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-lg-3 Card">
          <div className="card-header">Education</div>
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img
                  className="card-img-top card-image"
                  src={image4}
                  alt="card-img"
                />
              </div>
              <div className="flip-box-back">
                <div className="card-body">
                  <h5 className="card-title">Power of a pen</h5>
                  <p className="card-text">
                    Let us remember: One book, one pen, one child, and one
                    teacher can change the world....
                  </p>
                  <a href="/" className="form-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="card-footer text-muted">Posted 4 days ago</div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-lg-3 Card">
          <div className="card-header">Gems</div>
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img
                  className="card-img-top card-image"
                  src={image3}
                  alt="card-img"
                />
              </div>
              <div className="flip-box-back">
                <div className="card-body">
                  <h5 className="card-title">Diamonds</h5>
                  <p className="card-text">
                    The only carrots that interest me are the number you get in
                    a diamond........
                  </p>
                  <a href="/" className="form-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="card-footer text-muted">Posted 4 days ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default latestarticles;
