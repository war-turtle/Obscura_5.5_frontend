const dev = {
  api: {
    url: 'http://localhost:8000',
  },
  cypher: {
    algo: 'aes256',
    passKey: '394rwe78fudhwqpwriufdhr8ehyqr9pe8fud',
    encoding: 'hex',
  },
  startTimestamp: 1552044600000,
  startDate: '03/08/2019 05:00 PM',
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
  startTimestamp: 1552044600000,
  startDate: '03/08/2019 05:00 PM',
};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;
export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
