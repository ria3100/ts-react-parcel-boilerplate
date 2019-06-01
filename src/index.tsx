import React from 'react'
import ReactDOM from 'react-dom'

import { StoreContext } from 'redux-react-hook'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './modules'

import Routes from './routes'
import Container from './container'

import './assets/scss/style.scss'

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Container>
        <Routes />
      </Container>
    </PersistGate>
  </StoreContext.Provider>,
  document.getElementById('root')
)
