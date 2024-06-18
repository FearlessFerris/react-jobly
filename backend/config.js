// "use strict";

// /** Shared config for application; can be required many places. */

// require("dotenv").config();
// require("colors");

// const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

// const PORT = +process.env.PORT || 3001;

// // Use dev database, testing database, or via env var, production database
// function getDatabaseUri() {
//   const dbUser = process.env.DB_USER || 'marcus';
//   const dbPass = process.env.DB_PASS || 'Civil392601*';
//   const dbHost = process.env.DB_HOST || 'localhost';
//   const dbPort = process.env.DB_PORT || 5432;
//   const dbName = process.env.NODE_ENV === "test" ? "jobly_test" : (process.env.DB_NAME || "jobly");

//   // Return full database connection string
//   return `postgres://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
// }

// // Speed up bcrypt during tests, since the algorithm safety isn't being tested
// //
// // WJB: Evaluate in 2021 if this should be increased to 13 for non-test use
// const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

// console.log("Jobly Config:".green);
// console.log("SECRET_KEY:".yellow, SECRET_KEY);
// console.log("PORT:".yellow, PORT.toString());
// console.log("BCRYPT_WORK_FACTOR".yellow, BCRYPT_WORK_FACTOR);
// console.log("Database:".yellow, getDatabaseUri());
// console.log("---");

// module.exports = {
//   SECRET_KEY,
//   PORT,
//   BCRYPT_WORK_FACTOR,
//   getDatabaseUri,
// };

require("dotenv").config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "default_secret_key";
const PORT = +process.env.PORT || 3001;
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

function getDatabaseUri() {
  const dbUser = process.env.DB_USER || 'default_db_user';
  const dbPass = process.env.DB_PASS || 'default_db_pass';
  const dbHost = process.env.DB_HOST || 'localhost';
  const dbPort = process.env.DB_PORT || 5432;
  const dbName = process.env.NODE_ENV === "test" ? "jobly_test" : (process.env.DB_NAME || "jobly");

  return `postgres://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
}

console.log("Jobly Config:".green);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
console.log("BCRYPT_WORK_FACTOR".yellow, BCRYPT_WORK_FACTOR);
console.log("Database:".yellow, getDatabaseUri());
console.log("---");

module.exports = {
  SECRET_KEY,
  PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
};
