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
  return (
    <React.Fragment>
      <Navbar user={user} logout={userService.logout} />
      <Header />
      <Latestarticles results={props.results} />

      <div className="second-container">
        <Mainarticles />
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
