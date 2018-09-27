import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Countdown from 'react-count-down';
import actions from '../../actions';
import TeamDetails from './teamDetails';
import Team from '../onboard/team';
import config from '../../config';

const jwtDecode = require('jwt-decode');

const Decide = (props) => {
  const { teamExist, team, socket } = props;
  if (teamExist) {
    return <TeamDetails team={team} socket={socket} />;
  }
  return <Team />;
};

const cb = () => {
  console.log('expired');
  // history.push('/level/0');
};
const OPTIONS = { endDate: config.startDate, prefix: 'until game starts!', cb };

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamExist: false,
      css: '',
    };
    this.startTime = config.startTimestamp;
    this.user = localStorage.getItem('jwtToken') ? jwtDecode(localStorage.getItem('jwtToken')) : null;
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

  renderTimer() {
    const shouldShowTimer = this.startTime > new Date();
    if (shouldShowTimer) {
      return (
        <h5>
          <Countdown options={OPTIONS} />
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
        <nav className={css}>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo right">
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
});


const mapDispatchToProps = dispatch => ({
  getTeam: (teamId) => {
    dispatch(actions.getTeam(teamId));
  },
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
