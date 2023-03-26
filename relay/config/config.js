const dotenv = require('dotenv');
dotenv.config();

class Config {
    constructor() {
        this.port = process.env.PORT;
        this.nats = `${process.env.NATS_PROTOCOL}://${process.env.NATS_CLUSTER}:${process.env.NATS_PORT}`;
        this.timeout = process.env.TIMEOUT
    }
}

module.exports = {
    Config
}