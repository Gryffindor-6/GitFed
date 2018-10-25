import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Home from '../../common/icons/Home'
import Newsfeed from '../../common/icons/Newsfeed'
import RepoList from '../../common/icons/RepoList'
import Settings from '../../common/icons/Settings'

class Navbar extends Component {
  state = {
    icons: [
      {
        to: '/',
        title: 'Home',
        Component: <Home />
      },
      {
        to: '/repos',
        title: 'Repositories',
        Component: <RepoList />
      },
      {
        to: '/newsfeed',
        title: 'Newsfeed',
        Component: <Newsfeed />
      },
      {
        to: '/404',
        title: 'Settings',
        Component: <Settings />
      }
    ]
  }

  render() {
    const { icons } = this.state

    return (
      <nav className="navbar">
        {icons.map(({ to, title, Component }) => (
          <Link to={to} key={to} title={title} className="navbar__link">
            {Component}
          </Link>
        ))}
      </nav>
    )
  }
}

export default Navbar
