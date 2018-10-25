import React from 'react'
import PropTypes from 'prop-types'

<<<<<<< HEAD
const GithubButton = () => (
  <button><a href='https://github.com/login/oauth/authorize?client_id=7371510084e749ed8e9c&redirect_uri=http://localhost:3000/auth/github'>Github Login</a></button>
=======
import Github from '../../common/icons/Github'

const GithubButton = ({ handleClick }) => (
  <button className="loginform__github" onClick={handleClick}>
    <Github />
    <span>Sign in with Github</span>
  </button>
>>>>>>> a996e7a28ab1d83315ce5107851607416c663800
)

GithubButton.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default GithubButton
