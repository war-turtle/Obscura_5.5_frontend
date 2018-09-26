import React from "react";
import { connect } from "react-redux";
import actions from "../../actions";

class Support extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { sendMessage } = this.props;
        sendMessage(this.state);
    };

    render = () => {
        const { message } = this.state;
        return (
            <div className="row center">
                <div className="col s12">
                    <div className="col s6 offset-s3">
                        <p className="z-depth-2 card section feedback-card">
                            <div className="row">
                                <form
                                    className="col s12"
                                    onSubmit={this.handleSubmit}
                                >
                                    <div className="row feedback-form">
                                        <div className="col s12">
                                            <h4 className="white-text">
                                                Support
                                            </h4>
                                        </div>
                                        <div className="input-field col s12">
                                            <textarea
                                                id="subject"
                                                name="subject"
                                                value={message}
                                                className="materialize-textarea white-text"
                                                onChange={this.onChange}
                                            />
                                            <label
                                                className="white-text"
                                                htmlFor="textarea1"
                                            >
                                                Subject
                                            </label>
                                        </div>
                                        <div className="input-field col s12 white-text">
                                            <textarea
                                                id="object"
                                                name="object"
                                                value={message}
                                                className="materialize-textarea"
                                                onChange={this.onChange}
                                            />
                                            <label
                                                className="white-text"
                                                htmlFor="textarea1"
                                            >
                                                Object
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        className="btn waves-effect waves-light grey"
                                        type="submit"
                                        name="action"
                                    >
                                        Submit
                                        <i className="material-icons right">
                                            send
                                        </i>
                                    </button>
                                </form>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => ({
    messageSent: state.messageSent
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    sendMessage: formData => {
        dispatch(actions.sendMessage(formData));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Support);
