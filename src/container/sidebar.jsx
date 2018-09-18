import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from '../components/navigator';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
};

const SideBar = ({ component: Component, ...rest }) => {
  const { user } = rest;
  return (
    <div>
      <ul id="slide-out" className="sidenav sidenav-fixed">
        <Navigation user={user} />
      </ul>
      <a href="#" data-target="slide-out" className="sidenav-trigger">
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
    </div>
  );
};

SideBar.propTypes = {
  component: () => null,
};

SideBar.defaultProps = {
  component: () => null,
};

export default SideBar;
