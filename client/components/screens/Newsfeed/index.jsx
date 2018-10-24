import React from 'react'

import Filterbar from '../../features/Filterbar'
import Repos from './Repos'

import repos from '../../../state/mocks/repos.json'

const Newsfeed = () => (
  <div className="newsfeed">
    <Filterbar />
    <Repos repos={repos} />
  </div>
)

export default Newsfeed
