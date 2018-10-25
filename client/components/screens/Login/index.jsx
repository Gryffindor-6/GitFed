import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'

import GithubButton from './GithubButton'
import Heading from './Heading'
import Form from './Form'

class Login extends Component {
  static propTypes = {
    // Is injected by the "withRouter" Higher Order Function
    history: PropTypes.object.isRequired
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('I clicked the login button!')
  }

  handleClick = () => {
    this.props.history.push('/newsfeed')
  }

  render() {
    return (
      <Form handleSubmit={this.handleSubmit}>
        <Heading />
        <GithubButton handleClick={this.handleClick} />
      </Form>
    )
  }
}

export default withRouter(Login)
