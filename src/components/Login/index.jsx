import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import actions from '../../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const { clearUser } = this.props;
    clearUser();
  }

  componentWillReceiveProps = (nextProps) => {
    const { history } = this.props;
    if (nextProps.loggedin && nextProps.onboard) {
      history.push('/dashboard');
    } else if (nextProps.loggedin && !nextProps.onboard) {
      history.push('/onboard');
    }
  };

  responseGoogle = (response) => {
    if (!response.tokenId) {
      alert('try aganin');
      // return;
    }
    const { login } = this.props;
    login(response.tokenId, 'google');
  };

  responseFacebook = (response) => {
    if (!response.accessToken) {
      alert('try aganin');
      // return;
    }
    const { login } = this.props;
    login(response.accessToken, 'facebook');
  };

  render() {
    return (
      <div>
        <div>
          <a
            className="fab fa-google-plus-square"
            style={{
              color: 'white',
              fontSize: '30px',
            }}
          />
          <GoogleLogin
            clientId="802725431757-hjgkfe6valnvupeletpn8jjfgo2p80fk.apps.googleusercontent.com"
            buttonText="Login With Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            className="btn waves-effect red waves-light login"
          />
        </div>
        <div>
          <a
            className="fab fa-facebook-square"
            style={{
              color: 'white',
              fontSize: '30px',
            }}
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
      </div>
    );
  }
}
Login.propTypes = {
  login: () => null,
  clearUser: () => null,
  loggedin: PropTypes.bool,
  onboard: PropTypes.bool,
  history: () => null,
};

Login.defaultProps = {
  clearUser: () => null,
  login: () => null,
  loggedin: false,
  onboard: false,
  history: () => null,
};

const mapStateToProps = state => ({
  onboard: state.user.onboard,
  loggedin: state.user.loggedin,
});

const mapDispatchToProps = dispatch => ({
  login: (token, provider) => {
    dispatch(actions.login(token, provider));
  },
  clearUser: () => {
    dispatch(actions.clearUser());
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login),
);
