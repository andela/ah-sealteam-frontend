import React from 'react';
import hdate from 'human-date';
import { Link } from 'react-router-dom';

const Mainarticles = ({
    title,
    slug,
    image,
    tags,
    description,
    created_at,
    author
}) => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-5 col-xl-4">
                    <div className="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
                        <img className="img-fluid" src={image} alt="Sample" />
                        <Link to={`/articles/${slug}`}>
                            <div className="mask rgba-white-slight" />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-7 col-xl-8">
                    <h3 className="font-weight-bold mb-3">
                        <strong>{title}</strong>
                        <i
                            className="fa fa-bookmark article-icon"
                            aria-hidden="true"
                        />
                    </h3>
                    <p className="dark-grey-text">{description}</p>
                    <p>
                        by{' '}
                        <a href="/" className="font-weight-bold">
                            {author}
                        </a>
                        , {hdate.relativeTime(created_at)}
                    </p>
                    <Link
                        to={`/articles/${slug}`}
                        className="btn btn-rounded article-button"
                    >
                        Read more
                    </Link>
                </div>
            </div>
            <hr className="my-5" />
        </div>
    );
};

export default Mainarticles;
