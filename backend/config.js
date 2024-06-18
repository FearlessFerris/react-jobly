

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
