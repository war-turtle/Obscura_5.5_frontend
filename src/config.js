const dev = {
  api: {
    url: 'http://api.obscuranitkkr.co.in',
  },
  cypher: {
    algo: 'aes256',
    passKey: '394rwe78fudhwqpwriufdhr8ehyqr9pe8fud',
    encoding: 'hex',
  },
  startTimestamp: 1538145000000,
  startDate: '09/28/2018 08:00 PM',
};

const prod = {
  api: {
    url: 'http://api.obscuranitkkr.co.in',
  },
  cypher: {
    algo: 'aes256',
    passKey: '394rwe78fudhwqpwriufdhr8ehyqr9pe8fud',
    encoding: 'hex',
  },
  startTimestamp: 1538145000000,
  startDate: '09/28/2018 08:00 PM',
};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;
export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
