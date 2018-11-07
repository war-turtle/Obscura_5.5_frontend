import React from 'react';
import { connect } from 'react-redux';
import {
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import loadjs from 'loadjs';
import $ from 'jquery';
import actions from '../../actions';
import SweetAlert from '../shared/sweetAlert';

const jwtDecode = require('jwt-decode');

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    loadjs('/js/init.js');
  }

  componentDidMount = () => {
    const { getCurrentLevelAlias, getLevelList } = this.props;
    getCurrentLevelAlias();
    getLevelList();
  }

  openCurrentLevel = () => {
    const {
      history, alias, getLevel, getCurrentLevelAlias,
    } = this.props;
    if (alias !== '') {
      getLevel(alias);
      history.push(`/level/${alias}`);
    } else {
      getCurrentLevelAlias();
    }
  }

  hideMainSideNav = () => {
    $('.sidenav-overlay')[0].click();
  }

  render() {
    const {
      user, history, logoutUser,
    } = this.props;
    return (
      <div>
        <li>
          <div className="user-view">
            <div className="background">
              <img src="https://9cover.com/images/ccovers/1362683988black-abstract-texture.jpg" alt="backgroundImage" />
            </div>
            <a href="#user">
              <img className="circle" src={user.user.picture} alt="user" />
            </a>
            <a href="#name">
              <span className="white-text name card-title">
                <h6>
                  <b>
                    {user.user.name}
                  </b>
                </h6>
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
          <a
            className="waves-effect "
            href="#!"
            onClick={(e) => {
              e.preventDefault(); history.push('/dashboard');
            }}
          >
            <i className="material-icons ">
              folder_shared
            </i>
            Dashboard
          </a>
        </li>
        <li />
        <li>
          <a
            href="#!"
            className="waves-effect "
            onClick={(e) => {
              e.preventDefault();
              jwtDecode(sessionStorage.getItem('jwtToken')).user.team_id ? this.openCurrentLevel() : SweetAlert('Please join a team or create a new to PLAY!', 'error');
            }}
          >
            <i className="material-icons ">
              location_searching
            </i>
            Arena
          </a>
        </li>
        <li />
        <li className="hide-on-small-only">
          <a
            href="#!"
            data-target="slide-out1"
            className="sidenav-trigger"
          >
            <i className="material-icons ">
              whatshot
            </i>
            Levels
          </a>
        </li>
        <li className="hide-on-med-and-up">
          <a
            href="#!"
            data-target="slide-out1"
            className="sidenav-trigger"
            onClick={() => { this.hideMainSideNav(); }}
          >
            <i className="material-icons ">
              whatshot
            </i>
            Levels
          </a>
        </li>
        <li>
          <a
            className="waves-effect "
            href="#!"
            onClick={(e) => { e.preventDefault(); history.push('/leaderboard'); }}
          >
            <i className="material-icons ">
              format_list_numbered
            </i>
            Leaderboard
          </a>
        </li>
        <li />
        <li>
          <a
            className="waves-effect "
            href="#!"
            onClick={(e) => { e.preventDefault(); history.push('/our-team'); }}
          >
            <i className="material-icons ">
              group
            </i>
            Our Team
          </a>
        </li>
        <li />
        <li>
          <a
            className="waves-effect"
            href="#!"
            onClick={(e) => { e.preventDefault(); history.push('/support'); }}
          >
            <i className="material-icons ">
              headset_mic
            </i>
            Support
          </a>
        </li>
        <li />
        <li>
          <a
            className="waves-effect indigo white-text"
            href="#!"
            onClick={(e) => { e.preventDefault(); history.push('/'); logoutUser(); }}
          >
            <i className="material-icons white-text">
              exit_to_app
            </i>
            Logout
          </a>
        </li>
      </div>
    );
  }
}

Navigation.propTypes = {
  // user: PropTypes.objectOf(PropTypes.node),
  getLevelList: () => null,
  history: () => null,
  getCurrentLevelAlias: () => null,
  alias: PropTypes.string,
  getLevel: () => null,
};


Navigation.defaultProps = {
  // user: {},
  getLevelList: () => null,
  history: () => null,
  getCurrentLevelAlias: () => null,
  alias: '',
  getLevel: () => null,
};

const mapStateToProps = state => ({
  alias: state.level.alias,
});


const mapDispatchToProps = dispatch => ({
  getCurrentLevelAlias: () => {
    dispatch(actions.getAlias());
  },
  getLevelList: () => {
    dispatch(actions.getLevelList());
  },
  getLevel: (alias) => {
    dispatch(actions.getLevel(alias));
  },
  logoutUser: () => {
    dispatch(actions.logoutUser());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
