/** @jsx jsx */
import { Link } from 'react-router-dom'
import { jsx } from '@emotion/core'

import {
  NavbarEnd,
  NavbarItem,
  NavbarLink,
  NavbarDropdown,
  NavbarDivider,
} from 'bloomer'

export default props => {
  return (
    <NavbarEnd>
      <NavbarItem hasDropdown isHoverable>
        <NavbarLink href="/">{props.user.displayName}</NavbarLink>
        <NavbarDropdown>
          <Link className="navbar-item" to="/profile">
            プロフィール
          </Link>
          <NavbarDivider />
          <NavbarItem
            href="#"
            onClick={e => {
              e.preventDefault()
              props.logout()
            }}
          >
            ログアウト
          </NavbarItem>
        </NavbarDropdown>
      </NavbarItem>
    </NavbarEnd>
  )
}
