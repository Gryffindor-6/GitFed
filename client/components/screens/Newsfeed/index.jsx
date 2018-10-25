import React, { Component } from 'react'

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
