import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import Avatar from './avatar';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      college: '',
      phone: '',
      picture: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const { register } = this.props;
    register(this.state);
  };

  changeAvatar = (avatar) => {
    this.setState({ picture: avatar });
    console.log(avatar);
  }

  render() {
    const { college, phone, username } = this.state;
    return (
      <div className="row">

        <a href="#modal0" className="btn-floating btn-large modal-trigger" />
        <div id="modal0" className="modal">
          <div className="modal-content">
            <h4>
              Select your avatar
            </h4>
            <Avatar onSelectAvatar={this.changeAvatar} />
          </div>
        </div>

        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input name="college" id="college" type="text" value={college} className="validate" onChange={this.onChange} />
              <label htmlFor="college">
                College/Institution Name
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input name="phone" id="phone" type="number" value={phone} className="validate" onChange={this.onChange} />
              <label htmlFor="phone">
                Phone Number
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input name="username" id="username" type="text" value={username} className="validate" onChange={this.onChange} />
              <label htmlFor="username">
                Username
              </label>
            </div>
          </div>
          <button className="modal-close btn waves-effect waves-light" type="submit">
            Submit
            <i className="material-icons right">
              send
            </i>
          </button>
        </form>
      </div>
    );
  }
}

Form.defaultProps = {
  register: () => null,
};

Form.propTypes = {
  register: () => null,
};

const mapStateToProps = (state, ownProps) => ({
  loggedin: state.user.loggedin,
  registered: state.user.registered,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  register: (formData) => {
    dispatch(actions.onboard(formData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
