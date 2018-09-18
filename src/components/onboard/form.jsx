import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // handleSubmit(e) {
  //   e.preventDefault();

  //   const formData = {};
  //   for (const field in this.refs) {
  //     formData[field] = this.refs[field].value;
  //   }
  //   if (formData.picture !== '0') {
  //     this.props.signupUser(formData);
  //   } else {
  //     alert('Please select any avatar');
  //   }
  // }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input id="college" type="text" className="validate" />
              <label htmlFor="college">
                College/Institution Name
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="phone" type="number" className="validate" />
              <label htmlFor="phone">
                Phone Number
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="username" type="text" className="validate" />
              <label htmlFor="username">
                Username
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  loggedin: state.user.loggedin,
  registered: state.user.registered,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signupUser: (formData) => {
    dispatch(actions.signup(formData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
