import React from 'react';
import { connect } from 'react-redux';
import {
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import loadjs from 'loadjs';
import actions from '../../actions';
import SweetAlert from '../sweetAlert';

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
    const { history, alias } = this.props;
    if (alias !== '') {
      history.push(`/level/${alias}`);
    }
  }

  render() {
    const {
      user, history, levellist, getLevel, socket,
    } = this.props;
    return (
      <div>
        <li>
          <div className="user-view">
            <div className="background">
              <img src="images/office.jpg" alt="backgroundImage" />
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
          <a className="waves-effect white-text" href="#!" onClick={(e) => { e.preventDefault(); history.push('/dashboard'); }}>
            <i className="material-icons white-text">
            folder_shared
            </i>
            Dashboard
          </a>
        </li>
        <li />
        <li>
          <a className="waves-effect white-text" onClick={() => { jwtDecode(sessionStorage.getItem('jwtToken')).user.team_id ? this.openCurrentLevel() : SweetAlert('Please join a team or create a new!', 'error'); }}>
            <i className="material-icons white-text">
            location_searching
            </i>
            Arena
          </a>
        </li>
        <li />
        <li>
          <a className="waves-effect white-text" href="#!" onClick={(e) => { e.preventDefault(); history.push('/leaderboard'); }}>
            <i className="material-icons white-text">
            format_list_numbered
            </i>
            Leaderboard
          </a>
        </li>
        <li />
        <li>
          <a className="waves-effect white-text" href="#!" onClick={(e) => { e.preventDefault(); history.push('/our-team'); }}>
            <i className="material-icons white-text">
            group
            </i>
            Our Team
          </a>
        </li>
        <li />
        <li>
          <a className="waves-effect white-text" href="#!" onClick={(e) => { e.preventDefault(); history.push('/support'); }}>
            <i className="material-icons white-text">
            headset_mic
            </i>
            Support
          </a>
        </li>
        <li />
        <li>
          <a className="dropdown-trigger waves-effect white-text" href="#" data-target="dropdown1">
            <i className="material-icons white-text">
            whatshot
            </i>
            Levels
          </a>
          <ul id="dropdown1" className="dropdown-content">
            {
              levellist.map(l => (
                <div key={l.levelNo} onClick={(e) => { e.preventDefault(); history.push(`/level/${l.url_alias}`); getLevel(l.url_alias); }}>
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
                </div>
              ))
            }
          </ul>
        </li>
        <li>
          <a className="waves-effect indigo white-text" href="#!" onClick={(e) => { e.preventDefault(); socket.emit('disconnect', null); history.push('/'); }}>
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
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));