import React from 'react';
import hdate from 'human-date';
import 'bootstrap';
const BookMarkComp = (article, i) => {
    return (
        <div key={i}>
            <div className="row">
                <div className="col-lg-5 col-xl-4">
                    <div className="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
                        <img
                            className="img-fluid"
                            src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                            alt="Sample"
                        />
                        <a href="/">
                            <div className="mask rgba-white-slight" />
                        </a>
                    </div>
                </div>
                <div className="col-lg-7 col-xl-8">
                    <h3 className="font-weight-bold mb-3">
                        <strong>{article.article.article_name}</strong>
                        <i
                            className="fa fa-bookmark article-icon"
                            aria-hidden="true"
                        />
                    </h3>
                    <p className="dark-grey-text">{article.description}</p>
                    <p>
                        by{' '}
                        <a href="/" className="font-weight-bold">
                            {article.article.author}
                        </a>
                        , {hdate.relativeTime(article.article.created_at)}
                    </p>
                    <a href="/" className="btn btn-rounded article-button">
                        Read more
                    </a>
                </div>
            </div>
            <hr className="my-5" />
        </div>
    );
};

export default BookMarkComp;
