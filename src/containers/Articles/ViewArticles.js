import React, { Component } from 'react';
import { connect } from 'react-redux';
import LandingPage from '../../components/LandingPage';
import getAllArticles from '../../actions/Viewrticles.actions';

class ViewArticles extends Component {
  componentDidMount() {
    this.props.dispatch(getAllArticles());
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <LandingPage />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  allArticles: state.allArticles
});

export default connect(mapStateToProps)(ViewArticles);
