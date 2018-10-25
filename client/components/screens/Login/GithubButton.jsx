import React from 'react'
import PropTypes from 'prop-types'

import Github from '../../common/icons/Github'

const GithubButton = ({ handleClick }) => (
  <button className="loginform__github" onClick={handleClick}>
    <Github />
    <span>Sign in with Github</span>
  </button>
)

GithubButton.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default GithubButton
