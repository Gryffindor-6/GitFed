import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './state/store'

// Adds component state to Hot Module Reloading
import { AppContainer } from 'react-hot-loader'

// Styles
import { ThemeProvider } from 'styled-components'
import theme from './theme'

// Polyfills
import '@babel/polyfill'
import 'cross-fetch/polyfill'

const root = document.getElementById('root')
const render = () => {
  const App = require('./App').default
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </AppContainer>,
    root
  )
}

if (process.env.NODE_ENV !== 'production') {
  module.hot.accept(['./App', './theme'], () => {
    render()
  })
}

render()
