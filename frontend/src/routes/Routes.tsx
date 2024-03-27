import Layout from "@/layout/layout";
import { Routes, Route, Navigate } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout child={"asd"}/>} />
      <Route path="/summa" element={<h1>summa</h1>} />
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  );
};

export default AppRoutes;
