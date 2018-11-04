import React from 'react';
import { connect } from 'react-redux';
import {
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import loadjs from 'loadjs';
import actions from '../../actions';
import SweetAlert from '../shared/sweetAlert';
import Chat from '../chat';

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

  render() {
    const {
      user, history, levellist, getLevel, logoutUser,
    } = this.props;
    levellist.sort((a, b) => a.levelNo - b.levelNo);
    return (
      <div>
        <li>
          <div className="user-view">
            <div className="background">
              <img src="/images/office.jpg" alt="backgroundImage" />
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
        <li>
          <a
            className={
              levellist.length ? 'dropdown-trigger waves-effect ' : 'dropdown-trigger waves-effect  hide'
            }
            href="#!"
            data-target="dropdown1"
          >
            <i className="material-icons ">
              whatshot
            </i>
            Levels
          </a>
          <ul id="dropdown1" className="dropdown-content">
            {
              levellist.map(l => (
                <a
                  href="#!"
                  key={l.levelNo}
                  onClick={(e) => {
                    e.preventDefault(); history.push(`/level/${l.url_alias}`); getLevel(l.url_alias);
                  }}
                >
                  <li>
                    <a href="#!">
                      <i className="material-icons">
                        whatshot
                      </i>
                      Level
                      {' '}
                      {l.levelNo}
                    </a>
                  </li>
                  <li className="divider" tabIndex="-1" />
                </a>
              ))
            }
          </ul>
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
        <li className="no-padding">
          <ul className="collapsible collapsible-accordion">
            <li>
              <a className="collapsible-header">
                Chat
                <i className="material-icons">
                  arrow_drop_down
                </i>
              </a>
              <div className="collapsible-body">
                <ul>
                  <li>
                    <Chat />
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
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
  levellist: PropTypes.arrayOf(PropTypes.object),
  getLevel: () => null,
};


Navigation.defaultProps = {
  // user: {},
  getLevelList: () => null,
  history: () => null,
  getCurrentLevelAlias: () => null,
  alias: '',
  levellist: [],
  getLevel: () => null,
};

const mapStateToProps = state => ({
  alias: state.level.alias,
  levellist: state.level.levellist,
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
