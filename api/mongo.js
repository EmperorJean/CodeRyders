const mongoose = require('mongoose');
require('dotenv').config();
module.exports = {
    init: () => {
        const dbOptions = {
            dbName: `Backend`,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            connectTimeoutMS: 10000,
            family: 4
        };
        mongoose.connect(process.env.DATABASE_CONNECT_URL, dbOptions);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log("Connected to server successfully");
        });

        mongoose.connection.on('err', err => {
            console.error(`Mongoose connection error: \n${err.stack}`);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn("Disconnected from server successfully");
        });
    }
}