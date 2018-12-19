import StarRatings from 'react-star-ratings';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postRatings, getRatings } from '../../actions/ratings.actions';
import swal from 'sweetalert';
import './ratings.scss';

const post_url = `${
    process.env.REACT_APP_DOMAIN
}/api/articles/its-time-to-fall-in-love-none/rate`;
var average_url =
    'https://ah-sealteam-staging.herokuapp.com/api/articles/its-time-to-fall-in-love-none/rate?rate=average';

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
    componentDidMount() {
        this.state.dispatch(getRatings(average_url));
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
        this.state.dispatch(postRatings(post_url, payload));
    };

    render() {
        const { errors, average_ratings } = this.props.ratings;
        if (errors) {
            swal(errors.error);
        }
        return (
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Average ratings</h1>
                        <StarRatings
                            rating={average_ratings}
                            starDimension="40px"
                            starSpacing="15px"
                        />
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <StarRatings
                                rating={this.state.ratings}
                                starRatedColor="blue"
                                changeRating={this.changeRating}
                                numberOfStars={5}
                                name="rating"
                            />
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">
                                    Write a review
                                </label>
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
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ratings: state.ratingsReducer
});
export default connect(mapStateToProps)(ArticleRatings);
