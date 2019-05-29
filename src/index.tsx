import React from 'react'
import ReactDOM from 'react-dom'

import { StoreContext } from 'redux-react-hook'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import routes from './routes'
import store from './modules'

import './assets/scss/style.scss'

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router>
      {routes.map(route => (
        <Route key={route.path} {...route} />
      ))}
    </Router>
  </StoreContext.Provider>,
  document.getElementById('root')
)
