import { combineReducers } from 'redux';
import { snackbarReducer } from 'react-redux-snackbar';
import { Redirect } from 'react-router-dom';
import React from 'react';
import initialState from './initialState';
import history from '../utils/history';

const jwtDecode = require('jwt-decode');


const url = (state = initialState, action) => {
  switch (action.type) {
    case 'URL':
      return action.url;
    default:
      return history.location.pathname;
  }
};

const message = (state = initialState.messageSent, action) => {
  switch (action.type) {
    case 'SUCCESSFULLY_SENT_MESSAGE':
      return true;
    default:
      return state;
  }
};

const user = (state = initialState.user, action) => {
  console.log(action.type, action.data);
  switch (action.type) {
    case 'SUCCESS_LOGIN':
      localStorage.setItem('jwtToken', action.data.data.token);
      return Object.assign({}, state, {
        userData: jwtDecode(action.data.data.token).user,
        loggedin: true,
        onboard: !!(jwtDecode(action.data.data.token).user.onboard),
      });

    case 'SIGNUP_REQUIRED':
      localStorage.setItem('jwtToken', action.data.data.token);
      return Object.assign({}, state, {
        userData: jwtDecode(action.data.data.token).user,
        loggedin: true,
        onboard: false,
      });

    case 'SIGNUP_SUCCESS':
      localStorage.setItem('jwtToken', action.data.data.token);
      return Object.assign({}, state, {
        loggedin: true,
        jwtToken: action.data.data.token,
        registered: true,
        onboard: true,
      });

    case 'SIGNUP_ERROR':
      return Object.assign({}, state, {
        registered: false,
        signupRequired: false,
      });

    case 'SUCCESSFULLY_SENT_REQUEST':
      return Object.assign({}, state, {
        sentRequests: state.sentRequests.concat(action.data),
      });
    case 'TEAM_CREATE_SUCCESS':
      localStorage.setItem('jwtToken', action.data.data.token);
      return Object.assign({}, state, {
        team: action.data.data.team,
      });
    case 'TEAM_FETCH_SUCCESS':
      return Object.assign({}, state, {
        team: action.data.data,
      });
    default:
      return state;
  }
};

const teams = (state = initialState.teams, action) => {
  switch (action.type) {
    case 'TEAM_LIST_FETCHED':
      return action.data.teams;
    default:
      return state;
  }
};

const leaderboard = (state = initialState.leaderboard, action) => {
  switch (action.type) {
    case 'LEADERBOARD_SUCCESS':
      return {
        count: action.data.data.count,
        list: action.data.data.teams,
      };
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
        levellist: action.data.data,
      });

    case 'FAILURE_LIST':
      return null;

    case 'ALIAS_SUCCESS':
      return Object.assign({}, state, {
        alias: action.data.data.alias,
      });

    case 'LEVEL_NOT_CREATED':
      return Object.assign({}, state, {
        error: action.status,
      });

    case 'LEVEL_SUCCESS':
      return Object.assign({}, state, action.data.data);

    case 'LEVEL_FAILURE':
      return Object.assign({}, state, {
        error: action.status,
      });

    case 'RIGHT_ANS':
      return Object.assign({}, state, {
        ansCheck: true,
        nextalias: action.data.data.alias,
        alias: action.data.data.alias,
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
  message,
});

export default rootReducer;
