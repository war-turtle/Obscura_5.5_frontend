import { combineReducers } from 'redux';
import { snackbarReducer } from 'react-redux-snackbar';
import initialState from './initialState';
import history from '../utils/history';

const url = (state = initialState, action) => {
  switch (action.type) {
    case 'URL':
      return action.url;
    default:
      return history.location.pathname;
  }
};

const user = (state = initialState.user, action) => {
  switch (action.type) {
    case 'SUCCESS_LOGIN':
      localStorage.setItem('jwtToken', action.data.data.token);
      return Object.assign({}, state, {
        jwtToken: action.data.data.jwtToken,
        loggedin: true,
        registered: true,
      });

    case 'SIGNUP_REQUIRED':
      return Object.assign({}, state, {
        userData: action.userData,
        signupRequired: true,
      });

    case 'SIGNUP_SUCCESS':
      localStorage.setItem('jwtToken', action.user.jwtToken);
      localStorage.setItem('name', action.user.name);
      localStorage.setItem('username', action.user.username);
      localStorage.setItem('email', action.user.email);
      localStorage.setItem('phone', action.user.phone);
      localStorage.setItem('picture', action.user.picture);
      return Object.assign({}, state, {
        loggedin: true,
        jwtToken: action.user.jwtToken,
        registered: true,
      });

    case 'SIGNUP_ERROR':
      return Object.assign({}, state, {
        registered: false,
        signupRequired: false,
      });

    case 'SUCCESSFULLY_SENT_REQUEST':
      return Object.assign({}, state, {
        sentRequests: state.sentRequests.push(action.data),
      });

    default:
      return state;
  }
};

const teams = (state = initialState.teams, action) => {
  switch (action.type) {
    case 'TEAM_LIST_FETCHED':
      return action.data;
    default:
      return state;
  }
};

const leaderboard = (state = initialState.leaderboard, action) => {
  switch (action.type) {
    case 'LEADERBOARD_SUCCESS':
      return (action.Leaderboard);
    case 'LEADERBOARD_FAILURE':
      return Object.assign({}, state, {
        error: action.status,
      });
    default:
      return state;
  }
};

const level = (state = initialState.level, action) => {
  switch (action.type) {
    case 'SUCCESS_LIST':
      return Object.assign({}, state, {
        levellist: action.list,
      });

    case 'FAILURE_LIST':
      return null;

    case 'ALIAS_SUCCESS':
      return Object.assign({}, state, {
        alias: action.alias,
      });

    case 'LEVEL_NOT_CREATED':
      return Object.assign({}, state, {
        error: action.status,
      });

    case 'LEVEL_SUCCESS':
      return Object.assign({}, state, {
        levelData: action.level,
      });

    case 'LEVEL_FAILURE':
      return Object.assign({}, state, {
        error: action.status,
      });

    case 'RIGHT_ANS':
      return Object.assign({}, state, {
        ansCheck: true,
        nextalias: action.nextalias,
      });

    case 'WRONG_ANS':
      return Object.assign({}, state, {
        error: action.status,
        ansCheck: false,
      });

    case 'ERROR':
      return Object.assign({}, state, {
        error: action.status,
        ansCheck: false,
      });

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user,
  leaderboard,
  level,
  url,
  teams,
  snackbar: snackbarReducer,
});

export default rootReducer;
