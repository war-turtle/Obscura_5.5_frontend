import { showSnack } from 'react-redux-snackbar';
import services from '../services';

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
    (user) => {
      if (user.status === 'failure') {
        dispatch(failure('SIGNUP_REQUIRED', user));
      } else if (user.status === 'error') {
        dispatch(showSnack('myUniqueId', {
          label: user.message,
          timeout: 2000,
          button: {
            label: 'OK, GOT IT',
          },
        }));
      } else {
        dispatch(success('SUCCESS_LOGIN', user));
      }
    },
  );
};


const getLevelList = token => (dispatch) => {
  services.getLevelList(token).then(
    (list) => {
      if (list.status === 'failure') {
        dispatch(failure('FAILURE_LIST', list));
      } else {
        dispatch(success('SUCCESS_LIST', list));
      }
    },
  );
};

const onboard = formData => (dispatch) => {
  services.onboardUser(formData).then(
    (response) => {
      if (response.jwtToken) {
        dispatch(success('SIGNUP_SUCCESS', response));
      } else {
        dispatch(failure('SIGNUP_ERROR', null));
      }
    },
  );
};

const getLeaderboard = jwtToken => (dispatch) => {
  services.fetchLeaderboard(jwtToken).then(
    (response) => {
      if (response.status === 'success') {
        dispatch(success('LEADERBOARD_SUCCESS', response.data));
      } else {
        dispatch(failure('LEADERBOARD_FAILURE', response.status));
      }
    },
  );
};

const getLevel = (alias, jwtToken) => (dispatch) => {
  services.fetchLevel(alias, jwtToken).then(
    (response) => {
      if (response.status === 'success') {
        dispatch(success('LEVEL_SUCCESS', response.data));
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

const getAlias = jwtToken => (dispatch) => {
  services.getAlias(jwtToken).then(
    (response) => {
      if (response.status === 'success') {
        dispatch(success('ALIAS_SUCCESS', response.alias));
      } else {
        dispatch(failure('LEVEL_NOT_CREATED', response.status));
      }
    },
  );
};

const postAns = (ans, jwtToken, alias) => (dispatch) => {
  services.postAns(ans, jwtToken, alias).then(
    (response) => {
      if (response.status === 'success') {
        dispatch(showSnack('myUniqueId', {
          label: response.message,
          timeout: 2000,
          button: { label: 'OK, GOT IT' },
        }));
        dispatch(success('RIGHT_ANS', response.nextalias));
      } else if (response.status === 'failure') {
        dispatch(failure('WRONG_ANS', response.status));
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

export default {
  login,
  getLevelList,
  onboard,
  getLeaderboard,
  getLevel,
  getAlias,
  postAns,
};
