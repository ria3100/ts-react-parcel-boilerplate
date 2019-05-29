// import { css } from 'emotion'
import React, { useCallback } from 'react'
import { bindActionCreators } from 'redux'

import { useMappedState, useDispatch } from 'redux-react-hook'
import { Operations as AuthOperations } from '../../modules/auth'

export default () => {
  const [state, setState] = React.useState({ email: '', password: '' })

  const dispatch = useDispatch()

  const { handleSignUpEmail, loginWithTwitter } = bindActionCreators(
    {
      handleSignUpEmail: AuthOperations.handleSignUpEmail,
      loginWithTwitter: AuthOperations.loginWithTwitter,
    },
    dispatch
  )

  return (
    <div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          value={state.email}
          type="text"
          onChange={e =>
            setState({ email: e.target.value, password: state.password })
          }
        />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          value={state.password}
          type="text"
          onChange={e =>
            setState({ email: state.email, password: e.target.value })
          }
        />
      </div>
      <button onClick={() => handleSignUpEmail(state.email, state.password)}>
        Sign up
      </button>
      <button onClick={() => loginWithTwitter()}>Twitter</button>
      {/* <button onClick={this.handleLogin}>Login</button> */}
    </div>
  )
}
