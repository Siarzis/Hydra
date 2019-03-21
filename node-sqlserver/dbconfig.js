const sql = require("mssql");

// 'config' variable is a dictionary exported to server.js script within
// the same directory for privacy & security reasons

const config = {
    user:  "****",
    password: "***",
    server: "***",
    port: 0,
    database: "***"
}

const pool = new sql.ConnectionPool(config);
module.exports = pool;