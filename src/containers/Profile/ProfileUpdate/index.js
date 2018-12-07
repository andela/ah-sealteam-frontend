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
            validation: {},
            success: ''
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
        // const firstNameError = this.props.profile.errors? this.props.profile.errors.data.firstname[0]:'';
        // const lastNameError = this.props.profile.errors? this.props.profile.errors.data.lastname[0]:'';
        // const bioError = this.props.profile.errors? this.props.profile.errors.data.bio[0]:'';

        const { data, fetching } = this.props.profile;
        const updateForm = (
            <div className="row mt-3 d-flex justify-content-center">
                <div className="col-md-8">
                    <form autocomplete="off" className="form">
                        {this.state.success !== '' ? (
                            <div className="alert alert-success">
                                {this.state.success}
                            </div>
                        ) : (
                            ''
                        )}
                        <div class="form-row">
                            <div class="col-md-6 mb-3">
                                <label for="firstname">First name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    aria-label="Small"
                                    id="firstname"
                                    name="firstname"
                                    aria-describedby="inputGroup-sizing-sm"
                                    onChange={this.handleChange}
                                    onBlur={this.handleSubmit}
                                    defaultValue={data.firstname}
                                />
                                <span className="text-danger">
                                    {/* {firstNameError} */}
                                    {this.state.validation.firstname}
                                </span>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="lastname">Last name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    aria-label="Small"
                                    name="lastname"
                                    aria-describedby="inputGroup-sizing-sm"
                                    onChange={this.handleChange}
                                    onBlur={this.handleSubmit}
                                    defaultValue={data.lastname}
                                />
                                <span className="text-danger">
                                    {/* {lastNameError} */}
                                    {this.state.validation.lastname}
                                </span>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-md-12 mb-3">
                                <label htmlFor="bio">Bio</label>
                                <textarea
                                    name="bio"
                                    id="bio"
                                    rows="5"
                                    className="form-control"
                                    defaultValue={data.bio}
                                    onBlur={this.handleSubmit}
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
                                    id="submitBtn"
                                    className="btn btn-md btn-success btn-block"
                                    type="submit"
                                    onClick={() => {
                                        this.setState(
                                            { success: 'Successfully updated' },
                                            () => {
                                                setTimeout(() => {
                                                    this.setState({
                                                        success: ''
                                                    });
                                                    document
                                                        .getElementById(
                                                            'hideModal'
                                                        )
                                                        .click();
                                                }, 1500);
                                            }
                                        );
                                    }}
                                >
                                    <i className="glyphicon glyphicon-ok-sign" />
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );

        return <div>{fetching ? '' : updateForm}</div>;
    }
}
