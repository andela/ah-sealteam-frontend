import React, { Component } from 'react';

export default class Read extends Component {
    render() {
        const { slug } = this.props.match.params;
        return (
            <div>
                <h1>
                    Article <i>{slug}</i> Should be read here
                </h1>
            </div>
        );
    }
}
