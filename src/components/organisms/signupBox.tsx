/** @jsx jsx */
import { useState } from 'react'
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
  const [state, setState] = useState({ name: '', email: '', password: '' })

  const dispatch = useDispatch()

  const { signupWithEmailAndPassword } = bindActionCreators(
    { ...AuthOperations },
    dispatch
  )

  return (
    <Columns isCentered>
      <Column isSize={6}>
        <Box>
          <Field>
            <Label>Name</Label>
            <Control>
              <Input
                value={state.name}
                type="text"
                onChange={e => setState({ ...state, name: e.target.value })}
              />
            </Control>
          </Field>
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
                onChange={e => setState({ ...state, password: e.target.value })}
              />
            </Control>
          </Field>
          <hr />
          <Field>
            <Control>
              <Button
                isColor="primary"
                onClick={() =>
                  signupWithEmailAndPassword(
                    state.name,
                    state.email,
                    state.password
                  )
                }
                className="is-fullwidth"
              >
                会員登録
              </Button>
            </Control>
          </Field>
        </Box>
      </Column>
    </Columns>
  )
}
