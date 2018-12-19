import React, { Component } from 'react';
import { fetchArticle } from '../../../actions/articleActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import { dateTimeParser } from '../../../utils/datetime';
import './index.css';

class Read extends Component {
    componentDidMount() {
        const { slug } = this.props.match.params;
        this.props.dispatch(fetchArticle(slug));
    }
    render() {
        const article = this.props.article.data;
        return this.props.article.fetched ? (
            <div>
                <article className="article">
                    <div className="row">
                        <div className="col-lg-10">
                            <h1 className="mt-4">{article.title}</h1>
                            <p>{article.read_time} </p>
                            <p className="lead">
                                <small>
                                    Posted by{' '}
                                    <Link to="#">
                                        {article.author.username}
                                    </Link>{' '}
                                    on {dateTimeParser(article.createdAt)}
                                </small>
                            </p>
                            <hr />
                            <div className="row">
                                <div className="col-md-3">Likes & ratings</div>
                                <div className="col-md-9">
                                    <p>{article.description}</p>
                                    {renderHTML(article.body)}
                                    <div>
                                        {article.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="badge badge-pill badge-info tags"
                                            >
                                                {tag}
                                            </span>
                                        ))}
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
