import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
