import { UserSliceState } from '@/store/user-slice'

import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const SelectPlanRouter = () => {
  const sheetReducer = useSelector((state: UserSliceState) => state.user.value)
  const { newUser } = sheetReducer

  if (newUser) {
    return <Outlet />
  } else {
    return <Navigate to="/" />
  }
}

export default SelectPlanRouter
