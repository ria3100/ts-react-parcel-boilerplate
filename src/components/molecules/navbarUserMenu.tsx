/** @jsx jsx */
import { Link } from 'react-router-dom'
import { css, jsx } from '@emotion/core'

import {
  NavbarEnd,
  NavbarItem,
  NavbarLink,
  NavbarDropdown,
  NavbarDivider,
} from 'bloomer'

export default user => {
  return (
    <NavbarEnd>
      <NavbarItem hasDropdown isHoverable>
        <NavbarLink href="/">user</NavbarLink>
        <NavbarDropdown>
          <NavbarItem href="/">プロフィール</NavbarItem>
          <NavbarDivider />
          <NavbarItem href="/">ログアウト</NavbarItem>
        </NavbarDropdown>
      </NavbarItem>
    </NavbarEnd>
  )
}
