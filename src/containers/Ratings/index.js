import StarRatings from 'react-star-ratings';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rateArticles } from '../../actions/ratings.actions';
import './ratings.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ratings_meaning = [
    'I hated it',
    "I didn't like it",
    'It was OK.',
    'I liked it.',
    'I loved it'
];

class ArticleRatings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ratings: props.ratings.ratings,
            comment: props.ratings.review,
            dispatch: this.props.dispatch
        };
    }

    changeRating = newRating => {
        this.setState({
            ratings: newRating
        });
    };

    handleInputValueChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const payload = {
            rate: this.state.ratings,
            comment: this.state.comment
                ? this.state.comment
                : ratings_meaning[this.state.ratings - 1]
        };
        this.state.dispatch(rateArticles(this.props.slug, payload));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h6>Rate This Article</h6>
                    <div className="form-group">
                        <StarRatings
                            rating={this.state.ratings}
                            starRatedColor="blue"
                            changeRating={this.changeRating}
                            numberOfStars={5}
                            name="rating"
                            className="stars"
                            starDimension="30px"
                            starSpacing="0.5px"
                            starHoverColor="#30231d"
                        />
                    </div>
                    <div className="form-group mt-2 ratings_input">
                        <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            onChange={this.handleInputValueChange}
                            name="comment"
                            placeholder="What is your review"
                        />
                    </div>
                    <button
                        disabled={!this.state.ratings}
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>

                <ToastContainer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ratings: state.ratingsReducer
});
export default connect(mapStateToProps)(ArticleRatings);
