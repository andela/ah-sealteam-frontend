import React, { Component } from 'react';

export default class Profile extends Component {
    render() {
        return (
            <div className="justify-content-center">
                <button className="btn btn-sm btn-warning">
                    <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate" />{' '}
                    Loading...
                </button>
            </div>
        );
    }
}
