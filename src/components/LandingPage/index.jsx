import React from 'react';
import Header from './header';
import Latestarticles from './latestarticles';
import Mainarticles from './mainarticles';
import Sidebar from './sidebar';
import GeneralLoader from '../Loader/generalLoader';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage = props => {
    let user = localStorage.getItem('user');
    return (
        <React.Fragment>
            {props.isFetching ? <GeneralLoader /> : ''}
            <div>
                <Header />

                <div className="container-fluid latest-articles">
                    <div className="row div-cards flex-row flex-nowrap">
                        {props.results
                            ? props.results
                                  .slice(0, 4)
                                  .map(item => (
                                      <Latestarticles
                                          id={item.slug}
                                          created_at={item.createdAt}
                                          image={item.image}
                                          key={item.slug}
                                          slug={item.slug}
                                          title={item.title}
                                          tags={item.tags}
                                          description={item.description}
                                          read_time={item.read_time}
                                      />
                                  ))
                            : ''}
                    </div>
                </div>

                <div className="second-container">
                    <div id="mainDiv">
                        <section className="my-5">
                            <h2 className="h1-responsive font-weight-bold my-5">
                                Recent posts
                            </h2>
                            {props.results
                                ? props.results
                                      .slice(0, 5)
                                      .map(item => (
                                          <Mainarticles
                                              id={item.slug}
                                              key={item.slug}
                                              title={item.title}
                                              created_at={item.createdAt}
                                              tags={item.tags}
                                              slug={item.slug}
                                              image={item.image}
                                              description={item.description}
                                              read_time={item.read_time}
                                              author={item.author.username}
                                          />
                                      ))
                                : ''}
                        </section>
                        <div className="d-flex justify-content-center">
                            {props.paginator}
                        </div>
                    </div>

                    <Sidebar user={user} />
                    <div id="clear" />
                </div>

                <footer className="page-footer font-small brown">
                    <div className="footer-copyright text-center py-3">
                        © 2018 Copyright:
                        <a href="https://ah-sealteam-frontend-staging.herokuapp.com/">
                            {' '}
                            Seal Team
                        </a>
                    </div>
                </footer>
            </div>
        </React.Fragment>
    );
};

export default LandingPage;
