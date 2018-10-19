import fetch from 'node-fetch';
import config from '../config';

const jwtDecode = require('jwt-decode');

// const cryptoJSON = require('crypto-json');


// const decrypt = data => cryptoJSON.decrypt(data, config.cypher.passKey, {
//   algorithm: config.cypher.algo,
//   encoding: config.cypher.encoding,
//   keys: [],
// });


const login = (token, provider) => {
  const reqOptions = {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    credentials: 'include',
    body: JSON.stringify({ token, provider }),
  };
  return fetch(`${config.api.url}/auth/login`, reqOptions)
    .then(response => response.json())
    .then((user) => {
      if (user && user.token) {
        sessionStorage.setItem('user', JSON.stringify(user));
      }
      return user;
    });
};

const logoutUser = () => {
  console.log('hey 1');
  const reqOptions = {
    method: 'GET',
    headers: new Headers({
      Authorization: sessionStorage.getItem('jwtToken'),
    }),
    credentials: 'include',
  };
  return fetch(`${config.api.url}/auth/logout`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const onBoardUser = (formData) => {
  const reqOptions = {
    method: 'PUT',
    headers: new Headers({
      Authorization: sessionStorage.getItem('jwtToken'),
      'Content-Type': 'application/json',
    }),
    credentials: 'include',
    body: JSON.stringify(formData),
  };
  return fetch(`${config.api.url}/players/${jwtDecode(sessionStorage.getItem('jwtToken')).user._id}`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const fetchLeaderboard = (skip, limit) => {
  const reqOptions = {
    method: 'GET',
    headers: new Headers({
      Authorization: sessionStorage.getItem('jwtToken'),
    }),
    credentials: 'include',
  };
  return fetch(`${config.api.url}/teams?skip=${skip}&limit=${limit}&sort=true`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const getLevelList = () => {
  const reqOptions = {
    method: 'GET',
    headers: new Headers({
      Authorization: sessionStorage.getItem('jwtToken'),
    }),
    credentials: 'include',
  };
  return fetch(`${config.api.url}/levels?action=getAllLevels`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const fetchLevel = (alias) => {
  const reqOptions = {
    method: 'GET',
    headers: new Headers({
      Authorization: sessionStorage.getItem('jwtToken'),
    }),
    credentials: 'include',
  };
  return fetch(`${config.api.url}/levels?action=getAliasLevel&alias=${alias}`, reqOptions).then(response => response.json());
};

const getAlias = () => {
  const reqOptions = {
    method: 'GET',
    headers: new Headers({
      Authorization: sessionStorage.getItem('jwtToken'),
    }),
    credentials: 'include',
  };
  return fetch(`${config.api.url}/levels?action=getLevelAlias`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const postAns = (ans, alias) => {
  const reqOptions = {
    method: 'POST',
    headers: new Headers({
      Authorization: sessionStorage.getItem('jwtToken'),
      'Content-Type': 'application/json',
    }),
    credentials: 'include',
    body: JSON.stringify(ans),
  };
  return fetch(`${config.api.url}/levels/${alias}`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const getTeamList = () => {
  const reqOptions = {
    method: 'GET',
    headers: new Headers({
      Authorization: sessionStorage.getItem('jwtToken'),
    }),
    credentials: 'include',
  };
  return fetch(`${config.api.url}/teams`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const getTeam = (teamId) => {
  const reqOptions = {
    method: 'GET',
    headers: new Headers({
      Authorization: sessionStorage.getItem('jwtToken'),
    }),
    credentials: 'include',
  };
  return fetch(`${config.api.url}/teams/${teamId}`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const sendTeamRequest = (teamId) => {
  const reqOptions = {
    method: 'PUT',
    headers: new Headers({
      Authorization: sessionStorage.getItem('jwtToken'),
      'Content-Type': 'application/json',
    }),
    credentials: 'include',
  };
  return fetch(`${config.api.url}/teams/${teamId}?action=request`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const createTeam = (formData) => {
  const reqOptions = {
    method: 'POST',
    headers: new Headers({
      Authorization: sessionStorage.getItem('jwtToken'),
      'Content-Type': 'application/json',
    }),
    credentials: 'include',
    body: JSON.stringify(formData),
  };
  return fetch(`${config.api.url}/teams`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const sendMessage = (formData) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.body = JSON.stringify(formData);
  reqOptions.headers.Authorization = sessionStorage.getItem('jwtToken');
  reqOptions.method = 'POST';
  return fetch(`${config.api.url}/messages?action=email&to=admin`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const acceptRequest = (reqId) => {
  const reqOptions = {
    method: 'PUT',
    headers: new Headers({
      Authorization: sessionStorage.getItem('jwtToken'),
      'Content-Type': 'application/json',
    }),
    credentials: 'include',
    body: JSON.stringify({ reqId }),
  };
  return fetch(`${config.api.url}/teams/${jwtDecode(sessionStorage.getItem('jwtToken')).user.team_id}?action=accept_request`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const deleteRequest = (reqId) => {
  const reqOptions = {
    method: 'PUT',
    headers: new Headers({
      Authorization: sessionStorage.getItem('jwtToken'),
      'Content-Type': 'application/json',
    }),
    credentials: 'include',
    body: JSON.stringify({ reqId }),
  };
  return fetch(`${config.api.url}/teams/${jwtDecode(sessionStorage.getItem('jwtToken')).user.team_id}?action=delete`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

export default {
  login,
  onBoardUser,
  fetchLeaderboard,
  getAlias,
  fetchLevel,
  postAns,
  getLevelList,
  getTeamList,
  sendTeamRequest,
  createTeam,
  sendMessage,
  getTeam,
  acceptRequest,
  deleteRequest,
  logoutUser,
};
