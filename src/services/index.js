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
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.body = JSON.stringify({ token, provider });
  reqOptions.method = 'POST';
  return fetch(`${config.api.url}/auth/login`, reqOptions)
    .then(response => response.json())
    .then((user) => {
      if (user && user.token) {
        localStorage.setItem('user', JSON.stringify(user));
      }
      return user;
    });
};

const onBoardUser = (formData) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.headers.Authorization = localStorage.getItem('jwtToken');
  reqOptions.method = 'PUT';
  reqOptions.body = JSON.stringify(formData);
  return fetch(`${config.api.url}/players/${jwtDecode(localStorage.getItem('jwtToken')).user._id}`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const fetchLeaderboard = (skip, limit) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.headers.Authorization = localStorage.getItem('jwtToken');
  return fetch(`${config.api.url}/teams?skip=${skip}&limit=${limit}&sort=true`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const getLevelList = () => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.headers.Authorization = localStorage.getItem('jwtToken');
  return fetch(`${config.api.url}/levels?action=getAllLevels`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const fetchLevel = (alias) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.headers.Authorization = localStorage.getItem('jwtToken');
  reqOptions.method = 'GET';
  console.log('fetching', alias, `${config.api.url}/levels?action=getAliasLevel&alias=${alias}`);
  return fetch(`${config.api.url}/levels?action=getAliasLevel&alias=${alias}`, reqOptions).then(response => response.json());
};

const getAlias = () => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.headers.Authorization = localStorage.getItem('jwtToken');
  reqOptions.method = 'GET';
  return fetch(`${config.api.url}/levels?action=getLevelAlias`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const postAns = (ans, alias) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.method = 'POST';
  reqOptions.body = JSON.stringify(ans);
  reqOptions.headers.Authorization = localStorage.getItem('jwtToken');
  return fetch(`${config.api.url}/levels/${alias}`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const getTeamList = () => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.headers.Authorization = localStorage.getItem('jwtToken');
  reqOptions.method = 'GET';
  return fetch(`${config.api.url}/teams`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const getTeam = (teamId) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.headers.Authorization = localStorage.getItem('jwtToken');
  reqOptions.method = 'GET';
  return fetch(`${config.api.url}/teams/${teamId}`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const sendTeamRequest = (teamId) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.headers.Authorization = localStorage.getItem('jwtToken');
  reqOptions.method = 'PUT';
  return fetch(`${config.api.url}/teams/${teamId}?action=request`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const createTeam = (formData) => {
  const reqOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  reqOptions.body = JSON.stringify(formData);
  reqOptions.headers.Authorization = localStorage.getItem('jwtToken');
  reqOptions.method = 'POST';
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
  reqOptions.headers.Authorization = localStorage.getItem('jwtToken');
  reqOptions.method = 'POST';
  return fetch(`${config.api.url}/messages?action=email&to=admin`, reqOptions)
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
};
