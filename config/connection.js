const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: process.env.HOST,
        port: process.env.PORT,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    });
}

connection.connect((err) => {
    if (err) throw err;
    console.log("connected at " +connection.threadId+"/n");
});

module.exports = connection;