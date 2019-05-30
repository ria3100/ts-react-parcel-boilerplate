/** @jsx jsx */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { css, jsx } from '@emotion/core'
import { bindActionCreators } from 'redux'

import { useDispatch } from 'redux-react-hook'

import { Operations as AuthOperations } from '../../modules/auth'

import {
  Columns,
  Column,
  Box,
  Field,
  Label,
  Control,
  Input,
  Button,
} from 'bloomer'

import { LoginButtonField } from '../atoms'

export default () => {
  const [state, setState] = useState({ email: '', password: '' })

  const dispatch = useDispatch()

  const {
    loginWithEmailAndPassword,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
  } = bindActionCreators({ ...AuthOperations }, dispatch)

  return (
    <Columns isCentered>
      <Column isSize={6}>
        <Box>
          <Label>SNSでログイン</Label>
          <LoginButtonField handleEvent={loginWithGoogle} title="Google" />
          <LoginButtonField handleEvent={loginWithFacebook} title="Facebook" />
          <LoginButtonField handleEvent={loginWithTwitter} title="Twitter" />
          <hr />
          <Field>
            <Label>Email</Label>
            <Control>
              <Input
                value={state.email}
                type="text"
                onChange={e => setState({ ...state, email: e.target.value })}
              />
            </Control>
          </Field>
          <Field>
            <Label>Password</Label>
            <Control>
              <Input
                value={state.password}
                type="text"
                onChange={e => setState({ ...state, email: state.email })}
              />
            </Control>
          </Field>
          <Field>
            <Control>
              <Button
                isColor="primary"
                onClick={() =>
                  loginWithEmailAndPassword(state.email, state.password)
                }
                className="is-fullwidth"
              >
                ログイン
              </Button>
            </Control>
          </Field>
          <Link to="signup">登録はこちら</Link>
        </Box>
      </Column>
    </Columns>
  )
}
