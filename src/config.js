const dev = {
    api: {
        url: "http://d7c54796.ngrok.io"
    },
    cypher: {
        algo: "aes256",
        passKey: "394rwe78fudhwqpwriufdhr8ehyqr9pe8fud",
        encoding: "hex"
    }
};

const prod = {
    api: {
        url: ""
    },
    cypher: {
        algo: "aes256",
        passKey: "394rwe78fudhwqpwriufdhr8ehyqr9pe8fud",
        encoding: "hex"
    }
};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};
