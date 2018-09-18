const initialState = {
  loading: false,
  leaderboard: [],
  teams: [],
  user: {
    loggedin: false,
    signupRequired: false,
    jwtToken: '',
    registered: false,
    userData: {},
    onboard: false,
    sentRequests: [],
  },
  level: {
    levellist: [],
  },
  url: '/',
  nextalias: '',
};

export default initialState;
