import React from 'react';
import { Route } from 'react-router-dom';

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
        <li>
          <div className="user-view">
            <div className="background">
              <img src="/images/office.jpg" alt="background" />
            </div>
            <a href="#user">
              <img className="circle" src={user.user.picture} alt="user" />
            </a>
            <a href="#name">
              <span className="white-text name">
                {user.user.name}
              </span>
            </a>
            <a href="#email">
              <span className="white-text email">
                {user.user.email}
              </span>
            </a>
          </div>

        </li>
        <li>
          <a className="waves-effect" href="#!">
            <i className="material-icons">
              cloud
            </i>
            Dashboard
          </a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a className="waves-effect" href="#!">
            <i className="material-icons">
              cloud
            </i>
            Arena
          </a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a className="waves-effect" href="#!">
            <i className="material-icons">
              cloud
            </i>
            Our Team
          </a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a className="waves-effect" href="#!">
            <i className="material-icons">
              cloud
            </i>
            Support
          </a>
        </li>
        <li>
          <div className="divider" />
        </li>
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
