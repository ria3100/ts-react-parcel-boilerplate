import { useEffect } from 'react'
import { useDispatch } from 'redux-react-hook'
import { bindActionCreators } from 'redux'

import { Operations as AuthOperations } from './modules/auth'

export default ({ children }) => {
  const { setCurrentUserData } = bindActionCreators(
    { ...AuthOperations },
    useDispatch()
  )

  useEffect(() => {
    setCurrentUserData()
  }, [])

  return children
}
