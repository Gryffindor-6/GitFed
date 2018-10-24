const { Client } = require('pg');
const client = new Client();
const pgp = require('pg-promise')();
const config = {
  database: 'testdb',
  port: 5432,
  host: 'localhost'
};

const db = pgp(config);

const createUser = user => {
  console.log('creating user in Model', user);
  return db.one(
    `
    INSERT INTO "test_table" (id, name, password)
    VALUES ($/id/, $/name/, $/password/)
    RETURNING *`,
    user
  );
};

createUser({
  id: 1,
  name: 'Aaron',
  password: 'test5'
});

module.exports = {};
