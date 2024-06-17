import { useEffect, useState } from 'react'

import SplashPage from '@/pages/signup/splash'

import { Outlet } from 'react-router-dom'

const SplashRouter = () => {
  const isReturningUser = sessionStorage.getItem('isReturningUser')
  const [isSplashOn, setIsSplashOn] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashOn(false)
      sessionStorage.setItem('isReturningUser', 'true')
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isSplashOn && !isReturningUser) {
    return <SplashPage />
  } else {
    return <Outlet />
  }
}

export default SplashRouter
