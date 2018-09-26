import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import $ from 'jquery';
import Navigation from '../components/navigator';
import Chat from '../components/chat';

const jwtDecode = require('jwt-decode');

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
};

const SideBar = ({ component: Component, ...rest }) => {
  $('link[rel=stylesheet][href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"]').remove();
  const user = localStorage.getItem('jwtToken') ? jwtDecode(localStorage.getItem('jwtToken')) : null;

  if (!user) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <ul id="slide-out0" className="sidenav sidenav-fixed">
        <Navigation user={user} />
      </ul>
      <a href="#" data-target="slide-out0" className="sidenav-trigger">
        <i className="material-icons">
          menu
        </i>
      </a>
      <main>
        <Route
          {...rest}
          render={matchProps => renderMergedProps(Component, matchProps, rest)
          }
        />
      </main>
      {/* <ul id="slide-out" className="sidenav left">
        <li>
          <a className="sidenav-close" href="#!">
            Clicking this will close Sidenav
          </a>
        </li>
        <li>
          <Chat />
        </li>
      </ul>
      <a href="#" data-target="slide-out" className="sidenav-trigger right">
        <i className="material-icons">
          menu
        </i>
      </a> */}
    </div>
  );
};

SideBar.propTypes = {
  component: () => null,
};

SideBar.defaultProps = {
  component: () => null,
};

export default withRouter(SideBar);
