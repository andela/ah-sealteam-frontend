import React, { Component } from 'react';
import './index.scss';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import { rateArticles } from '../../../actions/articleActions';

var data;

class RateArticles extends Component {
    constructor() {
        super();

        this.state = {
            rating: 0,
            formTitle: 'Leave A Comment',
            isHidden: true
        };
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden,
            formTitle: !this.state.formTitle
        });
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState(
            { rating: nextValue },
            function stateUpdateComplete() {
                data = { rate: this.state.rating };
                this.props.dispatch(rateArticles(this.props.slug, data));
            }.bind(this)
        );
    }

    render() {
        const { rating } = this.state;
        const { errors, data } = this.props.article;
        let formTitle;
        if (this.state.formTitle === 'Leave a comment') {
            formTitle = 'Leave a comment';
        } else if (!this.state.formTitle) {
            formTitle = 'Cancel';
        } else {
            formTitle = 'Leave a comment';
        }
        return (
            <div>
                <h5>Rate This Article</h5>
                <p className="help-block with-errors">
                    {errors
                        ? errors.data['detail'] || errors.data['errors'][0]
                        : data.rate
                        ? 'Successful'
                        : ''}
                </p>
                <StarRatingComponent
                    name="rate"
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
                <br />
                <input
                    type="submit"
                    value={formTitle}
                    className="text-info"
                    onClick={this.toggleHidden.bind(this)}
                />
                {!this.state.isHidden && <Comment submit={this.onStarClick} />}
            </div>
        );
    }
}

const Comment = props => {
    return (
        <form className="mt-3">
            <textarea className="comment" rows="3" name="comment" />
            <br />
            <button className="btn article-button mt-1 float-left">
                submit
            </button>
        </form>
    );
};

const mapStateToProps = state => ({
    article: state.articleCRD
});

export default connect(mapStateToProps)(RateArticles);
