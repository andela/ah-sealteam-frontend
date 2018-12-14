import React, { Component } from 'react';
import LandingPage from '../../components/LandingPage';
import getAllArticles from '../../actions/view_articles.actions';
import { connect } from 'react-redux';

class ViewArticles extends Component {
  componentDidMount() {
    this.props.dispatch(getAllArticles());
  }

  render() {
    return (
      <React.Fragment>
        <LandingPage
          results={
            this.props.articles.articles.article
              ? this.props.articles.articles.article.results
              : null
          }
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.allArticles
});

export default connect(mapStateToProps)(ViewArticles);
