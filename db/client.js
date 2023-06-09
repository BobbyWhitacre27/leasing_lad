// Connect to DB
const { Client } = require('pg');

const DB_NAME = 'leasing_lad-dev';

const DB_URL =
  process.env.DATABASE_URL;

let client;

// github actions client config
if (process.env.CI) {
  client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres',
  });
} else {
  // local / heroku client config
  client = new Client(DB_URL);
}

module.exports = client;
