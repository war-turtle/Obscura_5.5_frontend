import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Countdown from 'react-count-down';
// import loadjs from 'loadjs';
import actions from '../../actions';
import TeamDetails from '../shared/teamDetails';
import Team from './team';
import config from '../../config';
import SweetAlert from '../shared/sweetAlert';

const jwtDecode = require('jwt-decode');

// conditional component view if the player is joined
const Decide = (props) => {
  const { teamExist, team } = props;
  if (teamExist) {
    return <TeamDetails team={team} requests="" />;
  }
  return <Team />;
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamExist: false, // initialState that player has not joined any team.
      css: '',
    };
    // loadjs('/js/init.js'); // calling materialize init functions.
    this.startTime = config.startTimestamp; // getting timestamp to start the event.

    this.user = sessionStorage.getItem('jwtToken') ? jwtDecode(sessionStorage.getItem('jwtToken')) : null;

    // countdown options
    this.OPTIONS = {
      endDate: config.startDate,
      prefix: 'until game starts!',

      // callback function after countdown stops.
      cb: () => {
        props.getCurrentLevelAlias();
        props.getLevelList();
        SweetAlert('Game has started! You may enter.', 'success');
      },
    };
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

    // changing css of the countdown to hide it.
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
    const { team } = this.props;
    return (
      <div>
        {/* <nav
          className={css}
          style={{
            paddingBottom: '120px',
            backgroundColor: '#424242',
          }}
        >
          <div className="nav-wrapper" style={{ backgroundColor: '#424242' }}>
            <a href="#!" className="brand-logo center">
              {timer}
            </a>
          </div>
        </nav> */}
        <div className="row center">
          <div className="col s12">
            {/* <h4>
              Dashboard
            </h4> */}
            <Decide teamExist={teamExist} team={team} />
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
