import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const SelectPlanRouter = () => {
  const authState = useSelector((state: RootState) => state.auth)
  const { role } = authState

  if (role === null) {
    return <Outlet />
  } else {
    return <Navigate to="/" />
  }
}

export default SelectPlanRouter
