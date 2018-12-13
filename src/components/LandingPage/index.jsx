import React from 'react';
import Navbar from '../Navbar';
import userService from '../../services/login.service';
import video from '../../assets/videos/video.mp4';
import image from '../../assets/images/andela.png';
import image2 from '../../assets/images/panda.jpg';
import image3 from '../../assets/images/black.jpg';
import image4 from '../../assets/images/bluepen.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage = () => {
  let user = localStorage.getItem('user');
  return (
    <React.Fragment>
      <Navbar user={user} logout={userService.logout} />
      <header>
        <div class="overlay" />
        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div class="container">
          <div class="d-flex text-center h-100 video-text">
            <div class="my-auto w-100 text-white">
              <h1 class="display-3">Authors Haven</h1>
              <h2>A platform for the creative at heart</h2>
            </div>
          </div>
        </div>
      </header>

      <div className="container-fluid latest-articles">
        <div className="row div-cards flex-row flex-nowrap">
          <div className="col-xs-6 col-sm-6 col-lg-3 Card">
            <div className="card-header ">Companies</div>
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
                    <h5 className="card-title">Andela Kenya</h5>
                    <p className="card-text">
                      Andela invests in Africa's most talented software
                      engineers to help companies solve....
                    </p>
                    <a href="/" className="form-button">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-footer text-muted">Posted 2 days ago</div>
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
              <div class="card-footer text-muted">Posted 4 days ago</div>
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
              <div class="card-footer text-muted">Posted 4 days ago</div>
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
                      The only carrots that interest me are the number you get
                      in a diamond........
                    </p>
                    <a href="/" className="form-button">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-footer text-muted">Posted 4 days ago</div>
            </div>
          </div>
        </div>
      </div>

      <div class="second-container">
        <div id="mainDiv">
          <section class="my-5">
            <h2 class="h1-responsive font-weight-bold my-5">Recent posts</h2>
            <div class="row">
              <div class="col-lg-5 col-xl-4">
                <div class="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
                  <img
                    class="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                    alt="Sample"
                  />
                  <a href="/">
                    <div class="mask rgba-white-slight" />
                  </a>
                </div>
              </div>
              <div class="col-lg-7 col-xl-8">
                <h3 class="font-weight-bold mb-3">
                  <strong>Title of the article</strong>
                  <i class="fa fa-bookmark article-icon" aria-hidden="true" />
                </h3>
                <p class="dark-grey-text">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus et aut officiis debitis cum soluta nobis est
                  eligendi placeat facere aut rerum.
                </p>
                <p>
                  by{' '}
                  <a href="/" class="font-weight-bold">
                    Jessica Clark
                  </a>
                  , 19/04/2018
                </p>
                <a href="/" class="btn btn-rounded article-button">
                  Read more
                </a>
              </div>
            </div>

            <hr class="my-5" />

            <div class="row">
              <div class="col-lg-5 col-xl-4">
                <div class="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
                  <img
                    class="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                    alt="Sample"
                  />
                  <a href="/">
                    <div class="mask rgba-white-slight" />
                  </a>
                </div>
              </div>
              <div class="col-lg-7 col-xl-8">
                <h3 class="font-weight-bold mb-3">
                  <strong>Title of the article</strong>
                  <i class="fa fa-bookmark article-icon" aria-hidden="true" />
                </h3>

                <p class="dark-grey-text">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus et aut officiis debitis cum soluta nobis est
                  eligendi placeat facere aut rerum.
                </p>
                <p>
                  by{' '}
                  <a href="/" class="font-weight-bold">
                    Jessica Clark
                  </a>
                  , 19/04/2018
                </p>
                <a href="/" class="btn btn-rounded article-button">
                  Read more
                </a>
              </div>
            </div>

            <hr class="my-5" />

            <div class="row">
              <div class="col-lg-5 col-xl-4">
                <div class="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
                  <img
                    class="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                    alt="Sample"
                  />
                  <a href="/">
                    <div class="mask rgba-white-slight article-button" />
                  </a>
                </div>
              </div>
              <div class="col-lg-7 col-xl-8">
                <h3 class="font-weight-bold mb-3">
                  <strong>Title of the article</strong>
                  <i class="fa fa-bookmark article-icon" aria-hidden="true" />
                </h3>
                <p class="dark-grey-text">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus et aut officiis debitis cum soluta nobis est
                  eligendi placeat facere aut rerum.
                </p>
                <p>
                  by{' '}
                  <a href="/" class="font-weight-bold">
                    Jessica Clark
                  </a>
                  , 19/04/2018
                </p>
                <a href="/" class="btn btn-rounded article-button">
                  Read more
                </a>
              </div>
            </div>
          </section>
        </div>

        <div id="sideBar">
          <div class="input-group md-form form-sm form-2 pl-0 text-center">
            <input
              class="form-control my-0 py-1 red-border"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <div class="input-group-append">
              <span class="input-group-text lighten-3" id="basic-text1">
                <i class="fa fa-search text-grey" aria-hidden="true" />
              </span>
            </div>
          </div>

          <section class="mt-5 pl-0 ">
            <div class="row justify-content-center">
              <div class="col">
                <ul class="nav nav-tabs some-tabs">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-toggle="tab"
                      href="#tab-1"
                      role="tab"
                    >
                      Popular
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#tab-2"
                      role="tab"
                    >
                      Recent
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#tab-3"
                      role="tab"
                    >
                      Comments
                    </a>
                  </li>
                </ul>
                <div class="card card-tabs-1">
                  <div class="card-block">
                    <div class="tab-content">
                      <div class="tab-pane active" id="tab-1">
                        <h4 class="card-title">Popular</h4>
                        <p class="card-body">
                          <div class="row">
                            <div class="col-lg-5 col-xl-4">
                              <div class="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
                                <img
                                  class="img-fluid"
                                  src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                                  alt="Sample"
                                />
                                <a href="/">
                                  <div class="mask rgba-white-slight article-button" />
                                </a>
                              </div>
                            </div>
                            <div class="col-lg-7 col-xl-8">
                              <h6 class="font-weight-bold some-text">
                                <strong>Popular article</strong>
                              </h6>
                              <p className="some-text">
                                <a href="/" class="font-weight-bold">
                                  Jessica Clark
                                </a>
                                , 19/04/2018
                              </p>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div class="tab-pane" id="tab-2">
                        <h4 class="card-title">Recent</h4>
                        <p class="card-body some-text">
                          <div class="row">
                            <div class="col-lg-5 col-xl-4">
                              <div class="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
                                <img
                                  class="img-fluid"
                                  src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                                  alt="Sample"
                                />
                                <a href="/">
                                  <div class="mask rgba-white-slight article-button" />
                                </a>
                              </div>
                            </div>
                            <div class="col-lg-7 col-xl-8">
                              <h6 class="font-weight-bold some-text">
                                <strong>Recent article</strong>
                              </h6>
                              <p className="some-text">
                                <a href="/" class="font-weight-bold">
                                  Jessica Clark
                                </a>
                                , 19/04/2018
                              </p>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div class="tab-pane" id="tab-3">
                        <h4 class="card-title">Comments</h4>
                        <p class="card-body some-text">
                          <div class="row">
                            <div class="col-lg-5 col-xl-4">
                              <div class="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
                                <img
                                  class="img-fluid"
                                  src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                                  alt="Sample"
                                />
                                <a href="/">
                                  <div class="mask rgba-white-slight article-button" />
                                </a>
                              </div>
                            </div>
                            <div class="col-lg-7 col-xl-8">
                              <h6 class="font-weight-bold some-text">
                                <strong>Recent Comment</strong>
                              </h6>
                              <p className="some-text">
                                <a href="/" class="font-weight-bold">
                                  Jessica Clark
                                </a>
                                , 19/04/2018
                              </p>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div id="clear" />
      </div>

      {/* Articles */}
    </React.Fragment>
  );
};

export default LandingPage;
