import { useCallback } from 'react'

import { getLogout } from '@/api/authAPI'
import { clearUser } from '@/store/auth-slice/auth-slice'
import { deleteTokens } from '@/utils/tokenStorage'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const useLogout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = useCallback(async () => {
    try {
      await getLogout()
      deleteTokens()
      dispatch(clearUser())
      sessionStorage.removeItem('relogin')
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }, [dispatch, navigate])

  return logout
}

export default useLogout
