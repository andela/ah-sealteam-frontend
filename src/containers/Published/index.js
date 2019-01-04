import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import Pagination from 'react-js-pagination';
import 'bootstrap';
import '../../assets/styles/paginator.scss';
// import './bookmark.scss';
import GeneralLoader from '../../assets/jsx/generalLoader';
import { fetchPublisheds } from '../../actions/published.actions';
import PublishedComp from './published';

export class Published extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 15,
            dispatch: this.props.dispatch
        };
    }

    componentDidMount() {
        this.state.dispatch(fetchPublisheds());
    }

    handlePageChange = pageNumber => {
        this.setState({ activePage: pageNumber });
        this.state.dispatch(fetchPublisheds(pageNumber));
    };

    render() {
        let articleList = '';
        let count = 0;
        const { articles, errors, pending } = this.props.published;
        if (errors) {
            swal('Warning!!', errors.error, 'warning');
        }
        if (Object.keys(articles).length && articles.count) {
            count = articles.count;
            articleList = articles.results.map((article, i) => (
                <PublishedComp article={article} key={i} />
            ));
        } else {
            if (articles.count === 0) {
                articleList = 'Your published articles were not found';
            }
        }
        return (
            <Fragment>
                <div className="bookmark-list">
                    {articleList}
                    {pending ? <GeneralLoader /> : ''}
                </div>
                <div className="d-flex justify-content-center">
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={count}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                    />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({ published: state.published });
export default connect(mapStateToProps)(Published);
