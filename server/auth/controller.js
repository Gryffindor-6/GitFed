const fetch = require('node-fetch');

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

    console.log('headers', json.access_token);
    res.send('EXIT');
  } else {
    res.redirect('/auth');
  }
}

module.exports = {
  githubLogIn
};
