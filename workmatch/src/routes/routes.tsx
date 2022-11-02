import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import LandPage from "../pages/landpage";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </>
  );
}
