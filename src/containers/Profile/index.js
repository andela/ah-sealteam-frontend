import React, { Component } from 'react';
import { getUserInfo, updateUser } from '../../actions/profileActions';
import { connect } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import '../Profile/index.css';
import ProfileUpdate from './ProfileUpdate';
import { bindActionCreators } from 'redux';
// import Loader from '../../components/Profile';
import uploadToCloudinary from '../../utils/cloudinary';
import Loader from 'react-dots-loader';
import 'react-dots-loader/index.css';

class Profile extends Component {
    state = {
        profile: {},
        imageUrl: null,
        loading: false
    };

    componentDidMount() {
        this.props.getUserInfo();
    }

    /**
     * Event handler for image upload
     */
    handleImageUpload = e => {
        const imageUrl = e.target.files[0];
        this.setState({ imageUrl, loading: true }, () => {
            uploadToCloudinary(this.state.imageUrl).then(data => {
                this.setState({ profile: { image: data } }, () => {
                    setTimeout(() => {
                        this.setState({ loading: false }, () =>
                            this.handleSubmit()
                        );
                    }, 1000);
                });
            });
        });
    };

    /**
     * Handles the updating of the user by calling the updateUser thunk action creator
     */
    handleSubmit() {
        const { updateUser } = this.props;
        const data = { profile: this.state.profile };
        updateUser(data.profile);
    }

    render() {
        const { data, fetching, fetched } = this.props.profile;
        const info = (
            <React.Fragment>
                <div className="container">
                    <div className="row mt-4">
                        {/* {Profile image Start} */}
                        <div className="col-md-4 mt-4">
                            <div className="text-center">
                                <figure>
                                    <img
                                        src={
                                            data.image
                                                ? data.image
                                                : 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
                                        }
                                        className="avatar rounded-circle img-thumbnail mx-auto d-block img-fluid"
                                        alt="avatar"
                                    />
                                    <label
                                        htmlFor="update-image"
                                        className="mt-1"
                                    >
                                        <input
                                            type="file"
                                            id="update-image"
                                            name="image"
                                            className="d-none"
                                            accept="image/*"
                                            onChange={this.handleImageUpload}
                                        />
                                        <span className="btn btn-light btn-block">
                                            {this.state.loading ? (
                                                <Loader
                                                    size={10}
                                                    distance={31}
                                                />
                                            ) : (
                                                'Update Image'
                                            )}
                                        </span>
                                    </label>
                                </figure>

                                <h6 className="mt-1">{`${
                                    data.firstname ? data.firstname : ''
                                } ${data.lastname ? data.lastname : ''}`}</h6>
                            </div>
                            <br />
                        </div>
                        {/* {Profile image End} */}
                        <div className="col-md-8 text-center">
                            {/* {Profile Details Start} */}
                            <nav>
                                <div
                                    className="nav"
                                    id="nav-tab"
                                    role="tablist"
                                >
                                    <a
                                        className="nav-item nav-link"
                                        id="nav-profile-update-tab"
                                        data-toggle="tab"
                                        href="#nav-profile-update"
                                        role="tab"
                                        aria-controls="nav-profile-update"
                                        aria-selected="false"
                                    >
                                        {/* {Modal Implementation} */}
                                        <button
                                            type="button"
                                            className="btn btn-light"
                                            data-toggle="modal"
                                            data-target=".bd-example-modal-lg"
                                        >
                                            <i className="fa fa-pencil pencil">
                                                Update Profile
                                            </i>
                                        </button>

                                        <div
                                            className="modal fade bd-example-modal-lg"
                                            tabIndex="-1"
                                            role="dialog"
                                            aria-labelledby="myLargeModalLabel"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">
                                                    <div
                                                        arria-hidden="true"
                                                        id="hideModal"
                                                        className="close-modal"
                                                        onClick={() =>
                                                            document
                                                                .getElementById(
                                                                    'hideModal'
                                                                )
                                                                .click()
                                                        }
                                                        data-dismiss="modal"
                                                    >
                                                        {' '}
                                                        <i className="fa fa-window-close pull-left" />
                                                    </div>
                                                    {
                                                        <ProfileUpdate
                                                            profile={
                                                                this.props
                                                                    .profile
                                                            }
                                                            updateUser={
                                                                this.props
                                                                    .updateUser
                                                            }
                                                        />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        {/* {Modal implementation} */}
                                    </a>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                {/* Profile Tab Start*/}
                                <div
                                    className="tab-pane fade show active"
                                    id="nav-profile"
                                    role="tabpanel"
                                    aria-labelledby="nav-profile-tab"
                                >
                                    <ul className="list-group mt-3">
                                        <li className="list-group-item text-muted">
                                            Activity{' '}
                                            <i className="fa fa-dashboard fa-1x" />
                                        </li>
                                        <li className="list-group-item text-center">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <p>{data.followers}</p>
                                                    <p className="d-inline-block">
                                                        Followers
                                                    </p>
                                                </div>
                                                <div className="col-md-4">
                                                    <p>{data.following}</p>
                                                    <p className="d-inline-block">
                                                        Following
                                                    </p>
                                                </div>
                                                <div className="col-md-4">
                                                    <p>{data.articles}</p>
                                                    <p className="d-inline-block">
                                                        Articles
                                                    </p>
                                                </div>
                                            </div>
                                        </li>{' '}
                                        {data.bio !== '' ? (
                                            <li className="list-group-item text-right d-inline">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading text-center font-weight-bold">
                                                        <p>
                                                            about{' '}
                                                            {data.username}
                                                        </p>
                                                    </div>
                                                    <div className="panel-body text-center">
                                                        {data.bio}
                                                    </div>
                                                </div>
                                            </li>
                                        ) : (
                                            ''
                                        )}
                                    </ul>
                                </div>
                                {/* {Profile Tab End} */}
                            </div>
                        </div>
                        {/* {Profile details End} */}
                    </div>
                </div>
            </React.Fragment>
        );
        return (
            <div className="mt-4 ml-4">
                {fetching && !fetched ? <Loader /> : info}
            </div>
        );
    }
}

// The only place the component is supposed to get information from is the props.
// The functions below map the needed information to the props

/**
 * A function to pull data from the store when it changes,
 * and pass those values as props to this container.
 * It basically maps the state variables from your store to the props that you specify
 */
const mapStateToProps = state => ({
    profile: state.userInfo
});

/**
 * A function to pass a function into this container via the props
 */
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            updateUser,
            getUserInfo
        },
        dispatch
    );

//Connect the above mapped props to this container
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
