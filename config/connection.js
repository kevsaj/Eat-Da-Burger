const mysql = require('mysql');

const dotenv = require("dotenv");
dotenv.config();

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: process.env.PASSWORD,
        database: 'burgers_db'
    });    
}

connection.connect( (err) => {
    if (err) {
        console.error(`Error connecting: ${err.stack}`);
        return
    }
    console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;