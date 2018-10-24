import React from 'react'
import PropTypes from 'prop-types'

const Repo = props => <li>{props.full_name}</li>

Repo.propTypes = {
  full_name: PropTypes.string.isRequired
}

export default Repo
