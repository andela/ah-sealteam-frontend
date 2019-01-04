import React, { Component } from 'react';
import { connect } from 'react-redux';
import { likeDislikeArticle } from '../../actions/likeDislikeActions';

class LikeDislike extends Component {
    handleClick = event => {
        const action = event.target.getAttribute('name');
        const slug = this.props.slug;
        console.log(action, slug);
        this.props.dispatch(likeDislikeArticle(slug, action));
    };
    render() {
        const {
            initlikeCount,
            likeCount,
            initdislikeCount,
            dislikeCount,
            loading
        } = this.props;
        return (
            <div className="container">
                <i
                    className="fa fa-thumbs-o-up fa-lg"
                    name="like"
                    onClick={this.handleClick}
                />
                &nbsp;
                <span className="badge badge-dark">
                    {likeCount !== null ? likeCount : initlikeCount}
                </span>
                &nbsp;&nbsp;
                <i
                    className="fa fa-thumbs-o-down fa-lg"
                    name="dislike"
                    onClick={this.handleClick}
                />
                &nbsp;
                <span className="badge badge-dark">
                    {dislikeCount !== null ? dislikeCount : initdislikeCount}
                </span>
                &nbsp;&nbsp;
                {loading ? <i className="fa fa-spinner fa-sm" /> : ''}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    likeCount: state.likeDislike.likeCount,
    slug: state.articleCRD.data.slug,
    dislikeCount: state.likeDislike.dislikeCount,
    errors: state.likeDislike.errors,
    loading: state.likeDislike.loading
});

export default connect(mapStateToProps)(LikeDislike);
