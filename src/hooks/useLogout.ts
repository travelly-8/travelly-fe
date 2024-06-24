import { useCallback } from 'react'

import { getLogout } from '@/api/authAPI'
import { clearUser } from '@/store/auth-slice/auth-slice'
import { deleteTokens } from '@/utils/tokenStorage'

import { useDispatch } from 'react-redux'

const useLogout = () => {
  const dispatch = useDispatch()

  const logout = useCallback(async () => {
    try {
      await getLogout()
      deleteTokens()
      dispatch(clearUser())
      sessionStorage.removeItem('relogin')
      localStorage.clear()
    } catch (err) {
      console.error(err)
    }
  }, [dispatch])

  return logout
}

export default useLogout
