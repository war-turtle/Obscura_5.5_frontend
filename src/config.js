const dev = {
  api: {
    url: 'http://eca8bbf3.ngrok.io',
  },
  cypher: {
    algo: 'aes256',
    passKey: '394rwe78fudhwqpwriufdhr8ehyqr9pe8fud',
    encoding: 'hex',
  },
  startTimestamp: 1538134200000,
  startDate: '09/28/2018 05:00 PM',
};

const prod = {
  api: {
    url: '',
  },
  cypher: {
    algo: 'aes256',
    passKey: '394rwe78fudhwqpwriufdhr8ehyqr9pe8fud',
    encoding: 'hex',
  },
  startTimestamp: 1538134200000,
  startDate: '09/28/2018 05:00 PM',
};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
