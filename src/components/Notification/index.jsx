import React, { Fragment } from 'react';

const Notification = ({ actor, timestamp, description, id, data }) => {
    return (
        <Fragment>
            <li className="notification-box" id={id}>
                <div>
                    <strong className="text-info">{actor}</strong>
                    <div>
                        <a href={data ? data.resource_url : '#'}>
                            {description}
                        </a>
                    </div>
                    <small className="text-warning">{Date(timestamp)}</small>
                </div>
            </li>
            <hr />
        </Fragment>
    );
};

export default Notification;
