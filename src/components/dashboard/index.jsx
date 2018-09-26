import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../../actions';
import TeamDetails from './teamDetails';
import Team from '../onboard/team';

const jwtDecode = require('jwt-decode');

const Decide = (props) => {
  const { teamExist, team } = props;
  console.log(teamExist, '-------');
  if (teamExist) {
    return <TeamDetails team={team} />;
  }
  return <Team />;
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamExist: false,
    };
    this.user = localStorage.getItem('jwtToken') ? jwtDecode(localStorage.getItem('jwtToken')) : null;
  }

  componentDidMount = () => {
    const {
      user, getTeam, history, socket,
    } = this.props;
    console.log(user, socket);
    if (user === null) {
      history.push('/');
    }

    if (!this.user.user.team_id) {
      this.setState({
        teamExist: false,
      });
    } else {
      console.log(this.user.user);
      getTeam(this.user.user.team_id);
      this.setState({
        teamExist: true,
      });
    }
    console.log(this.state);
  }

  componentWillReceiveProps = (nextProps) => {
    console.log(nextProps);
    if (nextProps.team) {
      this.setState({
        teamExist: true,
      });
    }
  }

  render() {
    const { teamExist } = this.state;
    const { team } = this.props;
    console.log(team, 'got it');
    return (
      <div className="row center">
        <div className="col s12">
          <h4>
            Dashboard
          </h4>
          <Decide teamExist={teamExist} team={team} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  team: state.user.team,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  getTeam: (team_id) => {
    dispatch(actions.getTeam(team_id));
  },
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
