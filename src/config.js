const dev = {
  api: {
    url: 'http://localhost:8000',
  },
  cypher: {
    algo: 'aes256',
    passKey: '394rwe78fudhwqpwriufdhr8ehyqr9pe8fud',
    encoding: 'hex',
  },
  startTimestamp: 1552048200000,
  startDate: '03/08/2019 06:00 PM',
};

const prod = {
  api: {
    url: 'http://www.obscuranitkkr.co.in/api',
  },
  cypher: {
    algo: 'aes256',
    passKey: '394rwe78fudhwqpwriufdhr8ehyqr9pe8fud',
    encoding: 'hex',
  },
  startTimestamp: 1552048200000,
  startDate: '03/08/2019 06:00 PM',
};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;
export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
