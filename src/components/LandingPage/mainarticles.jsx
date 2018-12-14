import React from 'react';

const Mainarticles = () => {
  return (
    <div id="mainDiv">
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold my-5">Recent posts</h2>
        <div className="row">
          <div className="col-lg-5 col-xl-4">
            <div className="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                alt="Sample"
              />
              <a href="/">
                <div className="mask rgba-white-slight" />
              </a>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8">
            <h3 className="font-weight-bold mb-3">
              <strong>Title of the article</strong>
              <i className="fa fa-bookmark article-icon" aria-hidden="true" />
            </h3>
            <p className="dark-grey-text">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus et aut
              officiis debitis cum soluta nobis est eligendi placeat facere aut
              rerum.
            </p>
            <p>
              by{' '}
              <a href="/" className="font-weight-bold">
                Jessica Clark
              </a>
              , 19/04/2018
            </p>
            <a href="/" className="btn btn-rounded article-button">
              Read more
            </a>
          </div>
        </div>

        <hr className="my-5" />

        <div className="row">
          <div className="col-lg-5 col-xl-4">
            <div className="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                alt="Sample"
              />
              <a href="/">
                <div className="mask rgba-white-slight" />
              </a>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8">
            <h3 className="font-weight-bold mb-3">
              <strong>Title of the article</strong>
              <i className="fa fa-bookmark article-icon" aria-hidden="true" />
            </h3>

            <p className="dark-grey-text">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus et aut
              officiis debitis cum soluta nobis est eligendi placeat facere aut
              rerum.
            </p>
            <p>
              by{' '}
              <a href="/" className="font-weight-bold">
                Jessica Clark
              </a>
              , 19/04/2018
            </p>
            <a href="/" className="btn btn-rounded article-button">
              Read more
            </a>
          </div>
        </div>

        <hr className="my-5" />

        <div className="row">
          <div className="col-lg-5 col-xl-4">
            <div className="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                alt="Sample"
              />
              <a href="/">
                <div className="mask rgba-white-slight article-button" />
              </a>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8">
            <h3 className="font-weight-bold mb-3">
              <strong>Title of the article</strong>
              <i className="fa fa-bookmark article-icon" aria-hidden="true" />
            </h3>
            <p className="dark-grey-text">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus et aut
              officiis debitis cum soluta nobis est eligendi placeat facere aut
              rerum.
            </p>
            <p>
              by{' '}
              <a href="/" className="font-weight-bold">
                Jessica Clark
              </a>
              , 19/04/2018
            </p>
            <a href="/" className="btn btn-rounded article-button">
              Read more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mainarticles;
