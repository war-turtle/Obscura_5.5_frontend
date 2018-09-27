import { showSnack } from 'react-redux-snackbar';
import services from '../services';

const jwtDecode = require('jwt-decode');

const success = (type, data) => ({
  type,
  data,
});

const failure = (type, data) => ({
  type,
  data,
});

const login = (token, provider) => (dispatch) => {
  services.login(token, provider).then(
    (data) => {
      if (!data.success) {
        dispatch(failure('SIGNUP_REQUIRED', data));
      } else if (data.status === 'error') {
        dispatch(showSnack('myUniqueId', {
          label: data.message,
          timeout: 2000,
          button: {
            label: 'OK, GOT IT',
          },
        }));
      } else {
        dispatch(success('SUCCESS_LOGIN', data));
      }
    },
  );
};


const getLevelList = () => (dispatch) => {
  services.getLevelList().then(
    (list) => {
      if (list.status === 'failure') {
        dispatch(failure('FAILURE_LIST', list));
      } else {
        dispatch(success('SUCCESS_LIST', list));
      }
    },
  );
};

const getTeam = teamId => (dispatch) => {
  services.getTeam(teamId).then(
    (response) => {
      if (response.success) {
        dispatch(success('TEAM_FETCH_SUCCESS', response));
      } else {
        dispatch(failure('TEAM_FETCH_FAILURE', response));
      }
    },
  );
};

const onboard = formData => (dispatch) => {
  services.onBoardUser(formData).then(
    (response) => {
      if (response.success) {
        dispatch(success('SIGNUP_SUCCESS', response));
      } else {
        dispatch(failure('SIGNUP_ERROR', null));
      }
    },
  );
};

const getLeaderboard = (skip, limit) => (dispatch) => {
  services.fetchLeaderboard(skip, limit).then(
    (response) => {
      if (response.success) {
        dispatch(success('LEADERBOARD_SUCCESS', response));
      } else {
        dispatch(failure('LEADERBOARD_FAILURE', response));
      }
    },
  );
};

const acceptRequest = (requesterId, socket) => (dispatch) => {
  services.acceptRequest(requesterId).then(
    (response) => {
      if (response.success) {
        dispatch(success('ACCEPT_SUCCESS', response));
        dispatch(getTeam(jwtDecode(localStorage.getItem('jwtToken')).user.team_id));
      } else {
        dispatch(failure('ACCEPT_FAILURE', response));
      }
    },
  );
};

const deleteRequest = (requesterId, socket) => (dispatch) => {
  services.deleteRequest(requesterId).then(
    (response) => {
      if (response.success) {
        dispatch(success('DELETE_SUCCESS', response));
        dispatch(getTeam(jwtDecode(localStorage.getItem('jwtToken')).user.team_id));
      } else {
        dispatch(failure('DELETE_FAILURE', response));
      }
    },
  );
};

const getLevel = alias => (dispatch) => {
  services.fetchLevel(alias).then(
    (response) => {
      if (response.success) {
        dispatch(success('LEVEL_SUCCESS', response));
      } else {
        dispatch(failure('LEVEL_FAILURE', response.status));
        dispatch(showSnack('myUniqueId', {
          label: response.message,
          timeout: 2000,
          button: { label: 'OK, GOT IT' },
        }));
        // setTimeout(() => { history.goBack(); }, 2000);
      }
    },
  );
};

const getAlias = () => (dispatch) => {
  services.getAlias().then(
    (response) => {
      if (response.success) {
        dispatch(success('ALIAS_SUCCESS', response));
      } else {
        dispatch(failure('LEVEL_NOT_CREATED', response));
      }
    },
  );
};


const postAns = (ans, alias) => (dispatch) => {
  services.postAns(ans, alias).then(
    (response) => {
      if (response.success) {
        // dispatch(showSnack('myUniqueId', {
        //   label: response.message,
        //   timeout: 2000,
        //   button: { label: 'OK, GOT IT' },
        // }));
        dispatch(success('RIGHT_ANS', response));
      } else if (!response.success) {
        dispatch(failure('WRONG_ANS', response));
        dispatch(showSnack('myUniqueId', {
          label: response.message,
          timeout: 2000,
          button: { label: 'OK, GOT IT' },
        }));
      } else {
        dispatch(errorMsg(response.status));
      }
    },
  );

  const errorMsg = status => ({
    type: 'ERROR',
    status,
  });
};

const getTeamList = () => (dispatch) => {
  services.getTeamList().then(
    (response) => {
      if (response.success) {
        const a = [];
        response.data.teams.map((t) => {
          t.requests.map((ri) => {
            if (ri.requester_id === jwtDecode(localStorage.getItem('jwtToken')).user._id) {
              a.push(t._id);
            }
          });
        });
        dispatch(success('TEAM_LIST_FETCHED', response.data));
        dispatch(success('SUCCESSFULLY_SENT_REQUEST', a));
      } else {
        dispatch(success('TEAM_LIST_FAILURE', response.data));
      }
    },
  );
};

const sendTeamRequest = teamId => (dispatch) => {
  services.sendTeamRequest(teamId).then(
    (response) => {
      if (response.success) {
        dispatch(success('SUCCESSFULLY_SENT_REQUEST', [teamId]));
      } else {
        dispatch(failure('ERROR_SENDING_REQUEST', null));
      }
    },
  );
};

const createTeam = formData => (dispatch) => {
  services.createTeam(formData).then(
    (response) => {
      if (response.success) {
        dispatch(success('TEAM_CREATE_SUCCESS', response));
      } else {
        dispatch(failure('ERROR_TEAM_CREATE', null));
      }
    },
  );
};

const sendMessage = data => (dispatch) => {
  services.sendMessage(data).then(
    (response) => {
      if (response.success) {
        dispatch(success('SUCCESSFULLY_SENT_MESSAGE', data));
      } else {
        dispatch(failure('ERROR_SENDING_MESSAGE', null));
      }
    },
  );
};

export default {
  login,
  getLevelList,
  onboard,
  getLeaderboard,
  getLevel,
  getAlias,
  postAns,
  getTeamList,
  sendTeamRequest,
  createTeam,
  sendMessage,
  getTeam,
  acceptRequest,
  deleteRequest,
};
