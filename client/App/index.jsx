import React, { Fragment } from 'react'

import Routes from './Routes'
import Navbar from '../components/features/Navbar'

const App = () => (
  <Fragment>
    <Navbar />
    <main className="screens">
      <Routes />
    </main>
  </Fragment>
)

export default App
