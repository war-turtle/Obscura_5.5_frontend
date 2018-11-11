import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../actions';

class Support extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="fade">
        <div className="row center">
          <div className="col s12 m10 offset-m1 l8 offset-l2 z-depth-3 support-card" style={{ padding: '30px' }}>
            <div className="row">
              <h5>
                Send us a Message
              </h5>
            </div>
            <div className="col s12 m7 l7">
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s6">
                      <input id="first_name" type="text" className="validate" />
                      <label htmlFor="first_name">
                        First Name
                      </label>
                    </div>
                    <div className="input-field col s6">
                      <input id="last_name" type="text" className="validate" />
                      <label htmlFor="last_name">
                        Last Name
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="subject" type="text" className="validate" />
                      <label htmlFor="subject">
                        Subject
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea id="description" className="materialize-textarea" />
                      <label htmlFor="description">
                        Description
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="email" type="email" className="validate" />
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
            <div className="col s5 hide-on-med-and-down" style={{ padding: '25px' }}>
              <h6>
                CONTACT INFORMATION
              </h6>
              <ul style={{ padding: '25px' }}>
                <li>
                  <div className="row">
                    <div className="col s2">
                      <i className="material-icons">
                        location_on
                      </i>
                    </div>
                    <div className="col s10">
                      462, Block C, Hostel No 7,
                      <br />
                      NIT Kurukshetra,
                      <br />
                      Thanesar, Kurukshetra: 136119
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col s2">
                      <i className="material-icons">
                        phone
                      </i>
                    </div>
                    <div className="col s10">
                      9729778862
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col s2">
                      <i className="material-icons">
                        email
                      </i>
                    </div>
                    <div className="col s10">
                      anujjangra25119@gmail.com
                    </div>
                  </div>
                </li>

              </ul>
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
