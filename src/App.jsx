import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { connect } from 'react-redux';
import Home from './components/Home';
import Onboard from './components/onboard';
import SideBar from './container/sidebar';
import Socket from './container/socket';
import Dashboard from './components/dashboard';
import Level from './components/Level';
import Support from './components/support';
import Team from './components/ourteam';
import Leaderboard from './components/Leaderboard/index';
import './App.css';
import actions from './actions';


const jwtDecode = require('jwt-decode');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: 'http://localhost:8000',
    };
    this.socket = socketIOClient(this.state.endpoint);
    if (localStorage.getItem('jwtToken') ? jwtDecode(localStorage.getItem('jwtToken')) : null) {
      this.socket.username = jwtDecode(localStorage.getItem('jwtToken')).user.username;
      this.socket.emit('checkUser', jwtDecode(localStorage.getItem('jwtToken')).user);
      this.socket.on('accepted', (token) => {
        props.getTeam(jwtDecode(token).user.team_id);
        localStorage.setItem('jwtToken', token);
      });
    }
  }

  componentDidMount = () => {
    this.socket.on('stopUser', () => {
    });
  };

  render = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Socket
          exact
          path="/onboard"
          component={Onboard}
          socket={this.socket}
          user={localStorage.getItem('jwtToken')
            ? jwtDecode(localStorage.getItem('jwtToken'))
            : null
          }
        />
        <SideBar
          exact
          path="/dashboard"
          component={Dashboard}
          user={
            localStorage.getItem('jwtToken')
              ? jwtDecode(localStorage.getItem('jwtToken'))
              : null
          }
          socket={this.socket}
        />
        <SideBar
          path="/level/:alias"
          component={Level}
          user={
            localStorage.getItem('jwtToken')
              ? jwtDecode(localStorage.getItem('jwtToken'))
              : null
          }
          socket={this.socket}
        />
        <SideBar
          path="/our-team"
          component={Team}
          user={
            localStorage.getItem('jwtToken')
              ? jwtDecode(localStorage.getItem('jwtToken'))
              : null
          }
          socket={this.socket}
        />
        <SideBar
          path="/support"
          component={Support}
          user={
            localStorage.getItem('jwtToken')
              ? jwtDecode(localStorage.getItem('jwtToken'))
              : null
          }
          socket={this.socket}
        />
        <SideBar
          path="/leaderboard"
          component={Leaderboard}
          user={
            localStorage.getItem('jwtToken')
              ? jwtDecode(localStorage.getItem('jwtToken'))
              : null
          }
          socket={this.socket}
        />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  team: state.user.team,
});


const mapDispatchToProps = dispatch => ({
  getTeam: (team_id) => {
    dispatch(actions.getTeam(team_id));
  },
  getCurrentLevelAlias: () => {
    dispatch(actions.getAlias());
  },
  getLevelList: () => {
    dispatch(actions.getLevelList());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
