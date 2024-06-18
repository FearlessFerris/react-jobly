// "use strict";
// /** Database setup for jobly. */
// const { Client } = require("pg");
// const { getDatabaseUri } = require("./config");

// let db;

// if (process.env.NODE_ENV === "production") {
//   db = new Client({
//     connectionString: getDatabaseUri(),
//     ssl: {
//       rejectUnauthorized: false
//     }
//   });
// } else {
//   db = new Client({
//     connectionString: getDatabaseUri()
//   });
// }

// db.connect();

// module.exports = db;

// db.js

const { Pool } = require('pg');
require('dotenv').config();

// Database connection string
const connectionString = process.env.DATABASE_URL || 'postgres://marcus:Civil392601*@localhost:5432/jobly';

// Log connection options for debugging
console.log('Connection String:', connectionString);

// Create a new pool using the connection string
const pool = new Pool({ connectionString });

module.exports = pool;
