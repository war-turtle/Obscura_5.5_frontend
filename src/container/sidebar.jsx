import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import $ from 'jquery';
import Navigation from '../components/navigator';
import Footer from '../components/Footer';

const jwtDecode = require('jwt-decode');

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
};

const checkOnboard = () => {
  if (!localStorage.getItem('jwtToken')) {
    return false;
  }
  return (!jwtDecode(localStorage.getItem('jwtToken')).user.onboard);
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
      <div className="row">
        <a href="#" data-target="slide-out0" className="sidenav-trigger hide-on-med-and-up">
          <i className="material-icons">
          menu
          </i>
        </a>
        <main>
          <Route
            {...rest}
            render={(matchProps) => {
              if (!localStorage.getItem('jwtToken')) {
                return <Redirect to="/" />;
              }
              return jwtDecode(localStorage.getItem('jwtToken')).user.onboard ? renderMergedProps(Component, matchProps, rest) : <Redirect to="/onboard" />;
            }
          }
          />
        </main>
      </div>
      <Footer />
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
