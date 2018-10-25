import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ handleSubmit, children }) => (
  <form onSubmit={handleSubmit} className="loginform">
    {children}
  </form>
)

Form.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default Form
