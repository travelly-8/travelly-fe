import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/home'
import Test from './pages/home/test/ButtonTest'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}
