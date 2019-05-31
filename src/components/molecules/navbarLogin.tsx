/** @jsx jsx */
import { Link } from 'react-router-dom'
import { css, jsx } from '@emotion/core'

import { NavbarEnd, NavbarItem, Button, Field, Control } from 'bloomer'

export default () => {
  return (
    <NavbarEnd>
      <NavbarItem>
        <Field isGrouped>
          <Control>
            <Link to="/login">
              <Button isColor="primary">Login</Button>
            </Link>
          </Control>
          <Control>
            <Link to="/signup">
              <Button isColor="light">Signup</Button>
            </Link>
          </Control>
        </Field>
      </NavbarItem>
    </NavbarEnd>
  )
}
