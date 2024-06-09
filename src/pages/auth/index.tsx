import isAxiosError from '@/utils/isAxiosError'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const AuthCallback: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleSocialLogin = async () => {
      const searchParams = new URLSearchParams(location.search)
      const code = searchParams.get('code')
      const platform = location.pathname.split('/').pop()

      if (code && platform) {
        console.log(`code: ${code} registrationId: ${platform}`)
        const authEndpoint = `/auth/login/${platform}`
        console.log(authEndpoint, { code })
        try {
          await axios.post(authEndpoint, { code })
          navigate('/')
        } catch (error) {
          if (isAxiosError(error)) {
            // console.error('소셜로그인 에러:', error.response?.data)
          } else {
            // console.error('소셜로그인 에러:', (error as Error).message)
          }
        }
      }
    }

    handleSocialLogin()
  }, [location, navigate])

  return <div>로딩중... 뭔가 잘못됨...</div>
}

export default AuthCallback
