import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Countdown from 'react-count-down';
import loadjs from 'loadjs';
import actions from '../../actions';
import TeamDetails from './teamDetails';
import Team from '../onboard/team';
import config from '../../config';
import SweetAlert from '../sweetAlert';

const jwtDecode = require('jwt-decode');

const Decide = (props) => {
  const { teamExist, team, socket } = props;
  if (teamExist) {
    return <TeamDetails team={team} socket={socket} requests="" />;
  }
  return <Team />;
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamExist: false,
      css: '',
    };
    loadjs('/js/init.js');
    this.startTime = config.startTimestamp;
    this.user = sessionStorage.getItem('jwtToken') ? jwtDecode(sessionStorage.getItem('jwtToken')) : null;
    this.OPTIONS = {
      endDate: config.startDate,
      prefix: 'until game starts!',
      cb: () => {
        props.getCurrentLevelAlias();
        props.getLevelList();
        SweetAlert('Game has started! You may enter.', 'success');
      },
    };

    const { socket } = props;
    socket.emit('checkUser', jwtDecode(sessionStorage.getItem('jwtToken')).user);
  }

  componentDidMount = () => {
    const {
      getTeam, history,
    } = this.props;
    if (this.user === null) {
      history.push('/');
    }

    if (!this.user.user.team_id) {
      this.setState({
        teamExist: false,
      });
    } else {
      getTeam(this.user.user.team_id);
      this.setState({
        teamExist: true,
      });
    }
    if (this.startTime < new Date()) {
      this.setState({
        css: 'hide',
      });
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.team) {
      this.setState({
        teamExist: true,
      });
    }
  }

  renderTimer = () => {
    const shouldShowTimer = this.startTime > new Date();
    if (shouldShowTimer) {
      return (
        <h5>
          <Countdown options={this.OPTIONS} />
        </h5>
      );
    }
    return '';
  }

  render() {
    const timer = this.renderTimer();
    const { teamExist, css } = this.state;
    const { team, socket } = this.props;
    return (
      <div>
        <nav
          className={css}
          style={{
            paddingBottom: '120px',
            backgroundColor: '#424242',
          }}
        >
          <div className="nav-wrapper" style={{ backgroundColor: '#424242' }}>
            <a href="#" className="brand-logo center">
              {timer}
            </a>
          </div>
        </nav>
        <div className="row center">
          <div className="col s12">
            <h4>
              Dashboard
            </h4>
            <Decide teamExist={teamExist} team={team} socket={socket} />
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  team: state.user.team,
  alias: state.level.alias,
});


const mapDispatchToProps = dispatch => ({
  getTeam: (teamId) => {
    dispatch(actions.getTeam(teamId));
  },
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
