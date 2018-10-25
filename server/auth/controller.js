const fetch = require('node-fetch');
const { saveUserData } = require('../users/model');

async function githubLogIn(req, res, next) {
  console.log('token:', req.query.code);
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

    // console.log({json});

    res.locals.userData = {
      img: json.avatar_url,
      followers: json.followers,
      username: json.login,
      following: json.following
    };
    next();
  } else {
    console.log('There was an error');
  }
}

async function storeUserInfo(req, res, next) {
  // console.log('userInfo:', res.locals.userData);
  console.log('Now we will store user data');
  // let userInfo;
  try {
    userInfo = await saveUserData(res.locals.userData);
  } catch (error) {
    console.log({ error });
  }
  // console.log({userInfo});
  res.send(userInfo);
}

module.exports = {
  githubLogIn,
  getUserInfo,
  storeUserInfo
};
