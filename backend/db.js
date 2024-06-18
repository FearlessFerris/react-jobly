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

// Use environment variables for database connection
const connectionString = process.env.DATABASE_URL || {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'jobly',
  ssl: {
    rejectUnauthorized: false // This line is for development, use proper SSL configuration for production
  }
};

// Create a new pool using the connection string
const pool = new Pool(connectionString);

// Log pool connection errors
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;
