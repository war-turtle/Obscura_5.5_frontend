import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../actions';
import SweetAlert from '../shared/sweetAlert';

class Support extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      first_name: '',
      last_name: '',
      subject: '',
      email: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { sendMessage } = this.props;
    sendMessage(this.state);
    this.setState({
      description: '',
      first_name: '',
      last_name: '',
      subject: '',
      email: '',
    });
    SweetAlert('Contacting Support!', 'success');
  }

  render() {
    const {
      first_name, last_name, email, subject, description,
    } = this.state;
    return (
      <div className="fade">
        <div className="row center">
          <div className="col s12 m10 offset-m1 l8 offset-l2 z-depth-3 support-card" style={{ padding: '30px' }}>
            <div className="row">
              <h5>
                Send us a Message
              </h5>
            </div>
            <div className="col s12">
              <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="input-field col s6">
                      <input id="first_name" value={first_name} name="first_name" type="text" className="validate" onChange={this.onChange} required />
                      <label htmlFor="first_name">
                        First Name
                      </label>
                    </div>
                    <div className="input-field col s6">
                      <input id="last_name" value={last_name} name="last_name" type="text" className="validate" onChange={this.onChange} required />
                      <label htmlFor="last_name">
                        Last Name
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="subject" value={subject} name="subject" type="text" className="validate" onChange={this.onChange} required />
                      <label htmlFor="subject">
                        Subject
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea id="description" value={description} name="description" className="materialize-textarea" onChange={this.onChange} required />
                      <label htmlFor="description">
                        Description
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="email" value={email} type="email" name="email" className="validate" onChange={this.onChange} required />
                      <label htmlFor="email">
                        Email
                      </label>
                    </div>
                  </div>

                  <button className="btn waves-effect waves-light" type="submit" name="action">
                    Submit
                    <i className="material-icons right">
                      send
                    </i>
                  </button>
                </form>
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messageSent: state.messageSent,
});

const mapDispatchToProps = dispatch => ({
  sendMessage: (formData) => {
    dispatch(actions.sendMessage(formData));
  },
});

Support.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Support);
