import React, { useEffect } from 'react'
import { useCallback } from 'react'
import { useMappedState, useDispatch } from 'redux-react-hook'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { bindActionCreators } from 'redux'

import { Operations as AuthOperations } from '../modules/auth'

import { Home, NoMatch, Login, Signup, Profile } from '../pages'

export default () => {
  const { setCurrentUserData } = bindActionCreators(
    { ...AuthOperations },
    useDispatch()
  )

  useEffect(() => {
    setCurrentUserData()
  }, [])

  const { user } = useMappedState(
    useCallback((state: any) => ({ user: state.auth.userData }), [])
  )

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/login"
          render={props =>
            !user ? <Login /> : <Redirect to={{ pathname: '/' }} />
          }
        />
        <Route
          path="/signup"
          render={props =>
            !user ? <Signup /> : <Redirect to={{ pathname: '/' }} />
          }
        />
        <Route
          path="/profile"
          render={props =>
            user ? <Profile /> : <Redirect to={{ pathname: '/login' }} />
          }
        />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}
