import React from 'react';
import hdate from 'human-date';
import 'bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './publish.scss';
const PublishedComp = (article, i) => {
    const article_url = `/articles/${article.article.slug}`;
    const title = `Read ${
        article.article.reads.no_read
    } times. Last read was ${hdate.relativeTime(
        article.article.reads.read_last_at
    )}`;
    console.log(article);
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
                        <strong>{article.article.title}</strong>
                        <i
                            className="fa fa-bookmark article-icon"
                            aria-hidden="true"
                        />
                    </h3>
                    <p className="dark-grey-text">
                        {article.article.description}
                    </p>
                    <p>by {hdate.relativeTime(article.article.createdAt)}</p>
                    <div className="float-left popup" data-popuptext={title}>
                        <FontAwesomeIcon
                            icon="eye"
                            className=" mr-1 text-primary"
                        />
                        <p className="d-inline text-primary ">
                            {article.article.reads.no_read}
                        </p>
                    </div>
                    <Link
                        to={article_url}
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

export default PublishedComp;
