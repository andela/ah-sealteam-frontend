import React from 'react';

import { Link } from 'react-router-dom';
import './index.css';

export default function NotFound() {
    return (
        <React.Fragment>
            <div className="jumbotron not-found-wrapper">
                <header className="not-found-header">
                    <div class="overlay" />
                    <div class="container">
                        <div class=" text-white text-center">
                            <h1 class="display-5">Not Found!</h1>
                            <p>
                                We are looking for your resource...,but we can't
                                find it.
                            </p>
                            <p>
                                {' '}
                                <Link to="/">Click Here</Link> to go home.
                            </p>
                        </div>
                    </div>
                    <video
                        playsInline="playsinline"
                        className="video"
                        autoPlay="autoplay"
                        muted="muted"
                        loop="loop"
                    >
                        <source
                            src="https://www.theuselesswebindex.com/static/videos/error.mp4"
                            type="video/mp4"
                        />
                    </video>
                </header>
            </div>
        </React.Fragment>
    );
}
