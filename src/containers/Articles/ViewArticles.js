import React, { Component } from 'react';
import LandingPage from '../../components/LandingPage';
import getAllArticles from '../../actions/view_articles.actions';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';
import { PER_PAGE } from '../../constants';

class ViewArticles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getAllArticles());
    }

    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
        this.props.dispatch(getAllArticles(pageNumber));
    }

    render() {
        return (
            <React.Fragment>
                <LandingPage
                    paginator={
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={PER_PAGE}
                            totalItemsCount={
                                this.props.articles.articles.article
                                    ? this.props.articles.articles.article.count
                                    : null
                            }
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange}
                        />
                    }
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
