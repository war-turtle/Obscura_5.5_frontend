import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import SweetAlert from '../components/sweetAlert';

const jwtDecode = require('jwt-decode');

const checkOnboard = () => {
  if (!localStorage.getItem('jwtToken')) {
    return false;
  }
  return (!jwtDecode(localStorage.getItem('jwtToken')).user.onboard);
};

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
};

const Socket = ({ component: Component, ...rest }) => {
  const { history, socket } = rest;
  socket.on('stopUser', () => {
    history.push('/');
    SweetAlert('Someone is active from this account on another device.');
  });
  return (
    <Route
      {...rest}
      render={matchProps => (checkOnboard() ? renderMergedProps(Component, matchProps, rest) : <Redirect to="/" />)
    }
    />
  );
};

Socket.propTypes = {
  component: () => null,
};

Socket.defaultProps = {
  component: () => null,
};

export default withRouter(Socket);
