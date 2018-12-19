import React, { Component } from 'react';
import { fetchArticle, removeArticle } from '../../../actions/articleActions';
import getAllArticles from '../../../actions/view_articles.actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { dateTimeParser } from '../../../utils/datetime';
import './index.css';
import * as jwt from 'jsonwebtoken';
import { IsAuthenticated } from '../../../services';
import swal from 'sweetalert';
import RateArticles from '../Rate';

class Read extends Component {
    componentWillMount() {
        const { slug } = this.props.match.params;
        this.props.dispatch(fetchArticle(slug));
    }

    checkIfExists() {
        if (this.props.article.errors) {
            if (this.props.article.errors.status === 404) {
                this.props.history.push('/not_found');
            }
        }
    }

    handleDelete(slug) {
        swal({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this article!',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                removeArticle(slug);
                swal('Your article has been deleted!', {
                    icon: 'success'
                });
                this.props.dispatch(getAllArticles());
                setTimeout(() => {
                    this.props.history.push('/');
                }, 1000);
            } else {
                swal('Your article is safe!');
            }
        });
    }

    render() {
        this.checkIfExists();
        const token = IsAuthenticated();
        let user = '';
        if (token) {
            user = jwt.decode(token);
        }
        const article = this.props.article.data;
        const author = article.author && article.author.username;
        return this.props.article.fetched ? (
            <div className="container">
                <article className="article">
                    <div className="row justify-content-center">
                        <div className="col-xs-12">
                            <h1 className="mt-4 title">{article.title}</h1>
                            <p>{article.read_time} </p>
                            <p className="lead">
                                <small>
                                    Posted by <Link to="#">{author}</Link> on{' '}
                                    {dateTimeParser(article.createdAt)}
                                </small>
                            </p>
                            <figure>
                                <img
                                    className="article-image img-fluid"
                                    src={article.image}
                                    alt="Header pic"
                                />
                            </figure>
                            <hr />
                            <div className="row">
                                <div className="col-md-3">
                                    <RateArticles slug={article.slug} />
                                </div>
                                <div className="col-md-9">
                                    <p>{article.description}</p>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: article.body
                                        }}
                                    />
                                    <div className="article-items">
                                        {article.tags
                                            ? article.tags.map(tag => (
                                                  <span
                                                      key={tag}
                                                      className="badge badge-pill badge-info tags"
                                                  >
                                                      {tag}
                                                  </span>
                                              ))
                                            : ''}
                                    </div>
                                    <div
                                        className={`article-items pull-right ${
                                            author !== user.username
                                                ? 'd-none'
                                                : ''
                                        }`}
                                    >
                                        <Link
                                            to="#"
                                            onClick={() =>
                                                this.handleDelete(article.slug)
                                            }
                                        >
                                            <span>
                                                <i className="fa fa-trash pull-right delete" />
                                            </span>
                                        </Link>
                                        <Link
                                            to={`/articles/${
                                                article.slug
                                            }/update`}
                                        >
                                            <span>
                                                <i className="fa fa-edit pull-right edit" />
                                            </span>
                                        </Link>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        ) : (
            <div>Loading...</div>
        );
    }
}

const mapStateToProps = state => ({
    article: state.articleCRD
});
export default connect(mapStateToProps)(Read);
