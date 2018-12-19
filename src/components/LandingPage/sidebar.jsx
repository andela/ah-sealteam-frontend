import React from 'react';

const Sidebar = props => {
    return (
        <div id="sideBar">
            <section className="mt-5 pl-0 ">
                <div className="row justify-content-center">
                    <div className="col">
                        <ul className="nav nav-tabs some-tabs">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    data-toggle="tab"
                                    href="#tab-1"
                                    role="tab"
                                >
                                    Popular
                                </a>
                            </li>
                        </ul>
                        <div className="card card-tabs-1">
                            <div className="card-block">
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tab-1">
                                        <h4 className="card-title">Popular</h4>
                                        <div className="card-body">
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
                                                    <h6 className="font-weight-bold some-text">
                                                        <strong>
                                                            Popular article
                                                        </strong>
                                                    </h6>
                                                    <p className="some-text">
                                                        <a
                                                            href="/"
                                                            className="font-weight-bold"
                                                        >
                                                            Jessica Clark
                                                        </a>
                                                        , 19/04/2018
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sidebar;
