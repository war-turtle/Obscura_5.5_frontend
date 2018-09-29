const initialState = {
  loading: false,
  leaderboard: {
    count: 0,
    list: [],
  },
  teams: [],
  user: {
    loggedin: false,
    signupRequired: false,
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
  messageSent: false,
  otherTeam: {},
};

export default initialState;
