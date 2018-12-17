import React from 'react';
import Navbar from '../Navbar';
import Header from './header';
import Latestarticles from './latestarticles';
import Mainarticles from './mainarticles';
import Sidebar from './sidebar';
import userService from '../../services/login.service';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage = props => {
  let user = localStorage.getItem('user');
  console.log(props.results);
  return (
    <React.Fragment>
      <Navbar user={user} logout={userService.logout} />
      <Header />

      <div className="container-fluid latest-articles">
        <div className="row div-cards flex-row flex-nowrap">
          {props.results
            ? props.results
                .slice(0, 4)
                .map(item => (
                  <Latestarticles
                    id={item.slug}
                    key={item.slug}
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
                      tags={item.tags}
                      description={item.description}
                      read_time={item.read_time}
                      author={item.author.user.username}
                    />
                  ))
              : ''}
          </section>
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
      {/* Articles */}
    </React.Fragment>
  );
};

export default LandingPage;
