import React from 'react';
import { Route, withRouter } from 'react-router-dom';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
};

const Socket = ({ component: Component, ...rest }) => (

  <Route
    {...rest}
    render={matchProps => renderMergedProps(Component, matchProps, rest)
    }
  />

);

Socket.propTypes = {
  component: () => null,
};

Socket.defaultProps = {
  component: () => null,
};

export default withRouter(Socket);
