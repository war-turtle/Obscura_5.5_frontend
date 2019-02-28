const dev = {
  api: {
    url: 'http://localhost:8000',
  },
  cypher: {
    algo: 'aes256',
    passKey: '394rwe78fudhwqpwriufdhr8ehyqr9pe8fud',
    encoding: 'hex',
  },
  startTimestamp: 1538188200000,
  startDate: '12/29/2019 08:00 AM',
};

const prod = {
  api: {
    url: 'api.ab0a386e63b2111e994100a0adc2a109-229152544.ap-south-1.elb.amazonaws.com',
  },
  cypher: {
    algo: 'aes256',
    passKey: '394rwe78fudhwqpwriufdhr8ehyqr9pe8fud',
    encoding: 'hex',
  },
  startTimestamp: 1538188200000,
  startDate: '09/29/2018 08:00 AM',
};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;
export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
