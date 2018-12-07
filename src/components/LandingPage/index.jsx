import React from 'react';
import Navbar from '../Navbar';

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="jumbotron text-center">
        <h1>For brilliant minds</h1>
        <p>
          Hackers are real! monsters are real too. They live inside us, and
          sometimes, they win!
        </p>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
