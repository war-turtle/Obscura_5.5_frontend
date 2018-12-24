import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import Navigation from '../components/navigator';
import LevelSideNav from '../components/navigator/levelSidenav';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import LevelSidebar from './levelSidebar';

const jwtDecode = require('jwt-decode');

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
};


const SideBar = ({
  component: Component, ...rest
}) => {
  const user = sessionStorage.getItem('jwtToken') ? jwtDecode(sessionStorage.getItem('jwtToken')) : null;

  if (!user) {
    return <Redirect to="/" />;
  }
  const { history, socket } = rest;
  socket.emit('joinRoom', user);

  return (
    <div>
      <ul id="slide-out0" className="sidenav sidenav-fixed z-depth-2">
        <Navigation user={user} />
      </ul>
      <LevelSidebar />
      <div className="row">
        <a href="#!" data-target="slide-out0" className="sidenav-trigger hide-on-large-only">
          <i className="material-icons">
            menu
          </i>
        </a>
        <Header />
        <main>
          <Route
            {...rest}
            render={(matchProps) => {
              if (!sessionStorage.getItem('jwtToken')) {
                return <Redirect to="/" />;
              }
              return jwtDecode(sessionStorage.getItem('jwtToken')).user.onboard ? renderMergedProps(Component, matchProps, rest) : <Redirect to="/onboard" />;
            }
            }
          />
        </main>
      </div>
      {/* <Chat user={user} /> */}
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
