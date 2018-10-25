import React, { Fragment } from 'react'

import Filterbar from '../../features/Filterbar'
import Repos from './Repos'

import repos from '../../../state/mocks/repos.json'

const RepoList = () => (
  <div className="repo-list">
    {Array.isArray(repos) && repos.length > 0 ? (
      <Fragment>
        <Filterbar />
        <Repos repos={repos} />
      </Fragment>
    ) : (
      <p>There is nothing to show.</p>
    )}
  </div>
)

export default RepoList
