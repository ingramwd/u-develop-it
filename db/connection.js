const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: '850031Wdi!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;