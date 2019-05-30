/** @jsx jsx */
import { Link } from 'react-router-dom'
import { css, jsx } from '@emotion/core'

import { NavbarEnd, NavbarItem, Button } from 'bloomer'

export default () => {
  return (
    <NavbarEnd>
      <NavbarItem>
        <Link to="/login">
          <Button isColor="primary">Login</Button>
        </Link>
        <Link to="/signup">
          <Button isColor="light">Signup</Button>
        </Link>
      </NavbarItem>
    </NavbarEnd>
  )
}
