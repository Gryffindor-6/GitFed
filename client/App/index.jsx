import React, { Fragment } from 'react'

import Routes from './Routes'
import Navbar from '../components/features/Navbar'
import Filterbar from '../components/features/Filterbar'

const App = () => (
  <Fragment>
    <Navbar />
    <Filterbar />
    <Routes />
  </Fragment>
)

export default App
