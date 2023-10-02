const express = require("express");
require('dotenv').config();

const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users';
        // Middlewares: functions that add more functionality to the web server
        this.middlewares();
        // Routes of my application
        this.routes();

    }

    routes() {
        this.app.use(this.userPath, require('../routes/users.route'));
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // Reading and parsing of the body
        this.app.use(express.json());
        //Public directory
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }

}

module.exports = Server;
