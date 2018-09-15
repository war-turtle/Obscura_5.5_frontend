import fetch from 'node-fetch';
import config from '../config';

const cryptoJSON = require('crypto-json');


const decrypt = data => cryptoJSON.decrypt(data, config.cypher.passKey, {
  algorithm: config.cypher.algo,
  encoding: config.cypher.encoding,
  keys: [],
});

const reqOptions = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const login = (token, provider) => {
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

const signupUser = (formData) => {
  reqOptions.method = 'POST';
  reqOptions.body = JSON.stringify(formData);
  return fetch(`${config.api.url}signup`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const fetchLeaderboard = (jwtToken) => {
  reqOptions.headers.jwtToken = jwtToken;
  return fetch(`${config.api.url}leaderboard`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const getLevelList = (jwtToken) => {
  reqOptions.headers.jwtToken = jwtToken;
  return fetch(`${config.api.url}levellist`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const fetchLevel = (alias, jwtToken) => {
  reqOptions.headers.jwtToken = jwtToken;
  return fetch(`${config.api.url}level/${alias}`, reqOptions)
    .then(response => response.json())
    .then((response) => {
      if (response.data) {
        response.data = decrypt(response.data);
      }
      return response;
    });
};

const getAlias = (jwtToken) => {
  reqOptions.headers.jwtToken = jwtToken;
  reqOptions.method = 'GET';
  return fetch(`${config.api.url}alias`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

const postAns = (ans, jwtToken, alias) => {
  reqOptions.method = 'POST';
  reqOptions.body = JSON.stringify(ans);
  reqOptions.headers.jwtToken = jwtToken;
  return fetch(`${config.api.url}level/${alias}`, reqOptions)
    .then(response => response.json())
    .then(response => response);
};

export default {
  login,
  signupUser,
  fetchLeaderboard,
  getAlias,
  fetchLevel,
  postAns,
  getLevelList,
};
