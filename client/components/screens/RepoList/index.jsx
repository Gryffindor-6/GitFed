import React, { Fragment } from 'react'

import { connect } from 'react-redux'

import Filterbar from '../../features/Filterbar'
import Repos from './Repos'

import repos from '../../../state/mocks/repos.json'

const RepoList = ({ store }) => (
  <pre>
    <code>{JSON.stringify(store, null, 2)}</code>
  </pre>
)

const mapState = state => {
  return {
    store: state
  }
}

export default connect(mapState)(RepoList)
