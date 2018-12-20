import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBookMarks } from '../../actions/boomark.actions';
import swal from 'sweetalert';
import Pagination from 'react-js-pagination';
import BookMarkComp from '../../components/BookMarkComponent';
import Tabs from '../../components/BookMarkComponent/tabs';
import 'bootstrap';
import '../../assets/styles/paginator.scss';
import './bookmark.scss';
import GeneralLoader from '../../assets/jsx/generalLoader';

export class BookMark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 15,
            dispatch: this.props.dispatch
        };
    }

    componentDidMount() {
        this.state.dispatch(fetchBookMarks());
    }

    handlePageChange = pageNumber => {
        this.setState({ activePage: pageNumber });
        this.state.dispatch(fetchBookMarks(pageNumber));
    };

    render() {
        let articleList = [];
        let count = 0;
        const { articles, errors, pending } = this.props.articles;
        if (errors) {
            swal('Warning!!', errors.error, 'warning');
        }
        if (Object.keys(articles).length && articles.count) {
            count = articles.count;
            articleList = articles.results.map((article, i) => (
                <BookMarkComp article={article} key={i} />
            ));
        } else {
            if (articles.count === 0) {
                swal(
                    'Not found!!',
                    'It seams you have not bookmarked articles!',
                    'warning'
                );
            }
        }
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-9">
                        <div className="bookmark-list">
                            <Tabs bookmarks={articleList} />
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
                    </div>
                    <div className="col-md-3">Favorites</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ articles: state.bookmarks });
export default connect(mapStateToProps)(BookMark);
