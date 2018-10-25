const { Client } = require('pg');
const fetch = require('node-fetch');

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

const saveUserData = userData => {
  console.log('saving data');
  console.log({ userData });
  let userInfo;
  // try
  return db.one(
    `
  INSERT INTO "test_table"
  (username, followers, following, img)
  VALUES
  ($/username/, $/followers/, $/following/, $/img/)
  RETURNING *;`,
    userData
  );
};

createUser({
  id: 1,
  name: 'Aaron',
  password: 'test5'
});

module.exports = {
  saveUserData,
  createUser
};
