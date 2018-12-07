import React, { Component } from 'react';

export default class Profile extends Component {
    render() {
        return (
            <div className="justify-content-center">
                <button class="btn btn-sm btn-warning">
                    <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" />{' '}
                    Loading...
                </button>
            </div>
        );
    }
}
