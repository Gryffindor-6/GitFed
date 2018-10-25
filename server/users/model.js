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
    INSERT INTO "gitfeed" (username, followers, following, img)
    VALUES ($/username/, $/followers/, $/following/, $/img/)
    RETURNING *`,
    user
  );
};

const saveUserData = userData => {
  console.log('saving data');
  return db.one(
    `
  INSERT INTO "gitfeed" 
  (username, followers, following, img) 
  VALUES 
  ($/username/, $/followers/, $/following/, $/img/)
  RETURNING *;`,
    userData
  );
};

createUser({
  username: 'Aaron',
  followers: 'Joel',
  following: 'Denny',
  img: 'Kwame'
});

module.exports = {
  saveUserData,
  createUser
};
