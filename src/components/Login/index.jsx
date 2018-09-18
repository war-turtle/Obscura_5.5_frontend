import React from "react";
import { FacebookLogin } from "react-facebook-login-component";
import { GoogleLogin } from "react-google-login";
import { connect } from 'react-redux';
import actions from '../../actions';
import {
  withRouter
} from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  responseGoogle = (response) => {
    // this.setState({
    //     classname: "preloader-wrapper big active loader"
    // })
    if(!response.tokenId) {
      alert('try aganin');
      return;
    }
    this.props.login(response.tokenId, 'google');
  };

  responseFacebook = response => {
    // this.setState({
    //   classname: "preloader-wrapper big active loader"
    // });
    if(!response.accessToken) {
      alert('try aganin');
      return;
    }
    this.props.login(response.accessToken, 'facebook');
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedin && nextProps.onboard) {
      this.props.history.push('/dashboard');
    } else if (nextProps.loggedin && !nextProps.onboard) {
      this.props.history.push('/onboard');
    }
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
          xfbml={true}
          fields="id,email,name,picture"
          version="v2.5"
          className="btn waves-effect waves-light login indigo"
          buttonText="Login With Facebook"
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loggedin: state.user.loggedin
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (token, provider) => {
      dispatch(actions.login(token, provider))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
