const fetch = require('node-fetch');
const { saveUserData } = require('../users/model');

async function githubLogIn(req, res, next) {
  if (req.query.code) {
    let resp = await fetch(
      `https://github.com/login/oauth/access_token?client_id=7371510084e749ed8e9c&client_secret=b8e12e3fa147cd0305f78360af9cde69ad191642&code=${
        req.query.code
      }`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        }
      }
    );

    let json = await resp.json();

    res.locals.token = json.access_token;

    //SAVE access_token
    //Create session
    //Fetch user data from github api
    //Save data on client
    //Redirect to newsfeed/profile page
    //Display data
    next();
  } else {
    res.redirect('/auth');
  }
}

async function getUserInfo(req, res, next) {
  if (res.locals.token) {
    let resp = await fetch('https://api.github.com/user', {
      method: 'GET',
      headers: {
        Authorization: `token ${res.locals.token}`,
        Accept: 'application/json'
      }
    });

    let json = await resp.json();

    res.locals.userData = {
      img: json.avatar_url,
      followers: json.followers,
      name: json.name
    };
    next();
  } else {
    console.log('There was an error');
  }
}

function storeUserInfo(req, res, next) {
  // return saveUserData(res.locals.userData)
  // .then(res => res.redirect('/newsfeed'));
  console.log('Now we will store user data');
  res.end('Data at this point should be stored');
}

module.exports = {
  githubLogIn,
  getUserInfo,
  storeUserInfo
};
