import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

class PopupModal extends Component {
    constructor({ showModal }) {
        super();
        this.state = {
            showModal
        };
    }
    componentWillReceiveProps({ showModal }) {
        this.setState({ showModal });
    }
    toggle = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    };
    render() {
        const { notifications, getNotificationComponents } = this.props;
        const styleList = {
            listStyle: 'none'
        };
        const styleHeading = {
            paddingLeft: '1em'
        };
        return (
            <div id="myModal">
                <Modal isOpen={this.state.showModal} toggle={this.toggle}>
                    <p>
                        <span style={styleHeading}>All Notifications</span>
                        <Button
                            onClick={this.toggle}
                            id="closeModalBtn"
                            className="btn-dark btn-sm float-sm-right"
                        >
                            x
                        </Button>
                    </p>
                    <ModalBody className="text-centered">
                        <ul style={styleList}>
                            {getNotificationComponents(notifications)}
                        </ul>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggle} className="btn btn-dark">
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default PopupModal;
