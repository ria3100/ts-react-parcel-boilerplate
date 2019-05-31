/** @jsx jsx */
import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useMappedState } from 'redux-react-hook'
import { css, jsx } from '@emotion/core'
import { bindActionCreators } from 'redux'

import { useDispatch } from 'redux-react-hook'

import { Operations as AuthOperations } from '../../modules/auth'

import { Navbar, NavbarBrand, NavbarStart, NavbarItem } from 'bloomer'

import { NavbarLogin, NavbarUserMenu } from '../molecules'

export default () => {
  const { user } = useMappedState(
    useCallback((state: any) => ({ user: state.auth.userData }), [])
  )

  const dispatch = useDispatch()
  const { logoutUser } = bindActionCreators({ ...AuthOperations }, dispatch)

  return (
    <header css={style}>
      <Navbar className="is-dark is-fixed-top">
        <NavbarBrand />
        <NavbarStart>
          <NavbarItem>
            <Link to="/">logo</Link>
          </NavbarItem>
        </NavbarStart>
        {user ? (
          <NavbarUserMenu user={user} logout={logoutUser} />
        ) : (
          <NavbarLogin />
        )}
      </Navbar>
    </header>
  )
}

const boxShadow = '0 0 4px rgba(0, 0, 0, 0.14), 0 4px 7px rgba(0, 0, 0, 0.28)'

const style = css({
  marginTop: '52px',
  '.navbar': {
    boxShadow,
    fontWeight: 'bold',
    height: '52px',

    '.navibar-brand, .navbar-menu': {
      background: 'inherit',

      '.navbar-item': {
        color: 'hsl(0,0%,96%)',
        '&:hover': {
          background: 'inherit !important',
          color: '#ee4c83 !important',
        },
      },
    },

    '.navibar-brand': {
      padding: '0 16px',
    },

    '.navbar-menu': {
      '@media screen and (max-width: 1088px)': {
        boxShadow,

        '.navbar-item': {
          marginLeft: '2em',
        },
      },
    },
  },
})
