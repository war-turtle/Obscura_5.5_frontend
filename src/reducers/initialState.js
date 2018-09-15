const initialState = {
  loading: false,
  leaderboard: [],
  user: {
    loggedin: false,
    signupRequired: false,
    jwtToken: '',
    registered: false,
    userData: {},
    onboard: false,
  },
  level: {
    levellist: [],
  },
  url: '/',
  nextalias: '',
};

export default initialState;
