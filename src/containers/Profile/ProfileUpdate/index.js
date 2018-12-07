import React, { Component } from 'react';
import validator from '../../../utils/profileValidator';

export default class ProfileUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                firstname: '',
                lastname: '',
                bio: '',
                image: ''
            },
            validation: {}
        };
    }

    componentDidMount() {
        let data;
        const { fetched } = this.props.profile;
        if (fetched === true) {
            data = this.props.profile.data;
            this.setState({
                profile: {
                    firstname: data.firstname,
                    lastname: data.lastname,
                    bio: data.bio,
                    image: data.image
                }
            });
        }
    }

    /**
     * Event handler for form changes
     */
    handleChange = e => {
        this.setState({
            profile: {
                ...this.state.profile,
                [e.target.name]: e.target.value
            },
            validation: {
                [e.target.name]: validator(e.target.name, e.target.value)
            }
        });
    };

    /**
     * Handles the updating of the user by calling the updateUser thunk action creator
     */
    handleSubmit = e => {
        e.preventDefault();
        const { updateUser } = this.props;
        const data = { profile: this.state.profile };
        updateUser(data.profile);
    };

    render() {
        const { data, fetching } = this.props.profile;
        const updateForm = (
            <div className="row mt-3 d-flex justify-content-center">
                <div className="col-md-8">
                    <form className="form" onSubmit={this.handleSubmit}>
                        {/* {First Name Last name Start} */}
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="">
                                    First &amp; LastName
                                </span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                aria-label="Small"
                                name="firstname"
                                aria-describedby="inputGroup-sizing-sm"
                                onChange={this.handleChange}
                                defaultValue={data.firstname}
                            />
                            <input
                                type="text"
                                class="form-control"
                                aria-label="Small"
                                name="lastname"
                                aria-describedby="inputGroup-sizing-sm"
                                onChange={this.handleChange}
                                defaultValue={data.lastname}
                            />
                            <span className="text-danger">
                                {this.state.validation.firstname}
                            </span>
                            <span className="text-danger">
                                {this.state.validation.lastname}
                            </span>
                        </div>
                        {/* {Fitst Name Last Name End} */}
                        {/* {Bio & Submit Start} */}
                        <div className="form-group">
                            <div className="col-xs-12">
                                <label htmlFor="bio">Bio</label>
                                <textarea
                                    name="bio"
                                    id="bio"
                                    rows="4"
                                    className="form-control"
                                    defaultValue={data.bio}
                                    onChange={this.handleChange}
                                />
                                <span className="text-danger">
                                    {this.state.validation.bio}
                                </span>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-12">
                                <button
                                    className="btn btn-md btn-success btn-block"
                                    type="submit"
                                >
                                    <i className="glyphicon glyphicon-ok-sign" />
                                    Update Profile
                                </button>
                            </div>
                        </div>
                        {/* {Bio & Submit End} */}
                    </form>
                </div>
            </div>
        );

        return <div>{fetching ? '' : updateForm}</div>;
    }
}
