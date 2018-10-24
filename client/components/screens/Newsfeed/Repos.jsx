import React from 'react'
import PropTypes from 'prop-types'

import Repo from './Repo'

const Repos = ({ repos }) => (
  <section>
    <ul className="newsfeed__repos">
      {repos.map(repo => (
        <Repo key={repo.id} {...repo} />
      ))}
    </ul>
  </section>
)

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Repos
