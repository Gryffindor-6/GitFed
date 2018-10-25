import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Users from '../components/screens/Users/users'
import RepoList from '../components/screens/RepoList'
import Login from '../components/screens/Login'
import Page404 from '../components/screens/Page404'

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/repos" component={RepoList} />
    <Route exact path="/404" component={Page404} />
    <Route exact path="/" component={Login} />
    <Route exact path="/users" component={Users} />
    <Route path="/" component={Page404} />
  </Switch>
)

export default Routes
