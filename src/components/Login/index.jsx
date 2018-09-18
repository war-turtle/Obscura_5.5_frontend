import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import {
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import actions from '../../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    console.log(this.props, 'hello');
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    const { history } = this.props;
    if (nextProps.loggedin && nextProps.onboard) {
      history.push('/dashboard');
    } else if (nextProps.loggedin && !nextProps.onboard) {
      history.push('/onboard');
    }
  }

  responseGoogle = (response) => {
    if (!response.tokenId) {
      alert('try aganin');
      return;
    }
    console.log(this.props);
    const { login } = this.props;
    login(response.tokenId, 'google');
  }

  responseFacebook = (response) => {
    if (!response.accessToken) {
      alert('try aganin');
      return;
    }
    console.log(this.props);
    const { login } = this.props;
    login(response.accessToken, 'facebook');
  }


  render() {
    return (
      <div>
        <GoogleLogin
          clientId="802725431757-hjgkfe6valnvupeletpn8jjfgo2p80fk.apps.googleusercontent.com"
          buttonText="Login With Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          className="btn waves-effect red waves-light login"
        />
        <FacebookLogin
          socialId="482076445491176"
          language="en_US"
          scope="public_profile,email"
          responseHandler={this.responseFacebook}
          xfbml
          fields="id,email,name,picture"
          version="v2.5"
          className="btn waves-effect waves-light login indigo"
          buttonText="Login With Facebook"
        />
      </div>
    );
  }
}
Login.propTypes = {
  login: () => null,
  loggedin: PropTypes.bool,
  onboard: PropTypes.bool,
  history: () => null,
};


Login.defaultProps = {
  login: () => null,
  loggedin: false,
  onboard: false,
  history: () => null,
};

const mapStateToProps = (state, ownProps) => ({
  onboard: state.user.onboard,
  loggedin: state.user.loggedin,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (token, provider) => {
    dispatch(actions.login(token, provider));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
