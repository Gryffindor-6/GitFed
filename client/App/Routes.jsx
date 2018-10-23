import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Newsfeed from '../components/screens/Newsfeed'
import Signup from '../components/screens/Signup'
import Page404 from '../components/screens/Page404'

const Routes = () => (
  <Switch>
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/404" component={Page404} />
    <Route exact path="/" component={Newsfeed} />
    <Route path="/" component={Page404} />
  </Switch>
)

export default Routes
