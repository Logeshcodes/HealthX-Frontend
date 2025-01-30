import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import AdminLogin from "../pages/Admin/AdminLogin";
import BrickLoader from "../components/BrickLoader";
import Dashboard from "../pages/Admin/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Department from "../pages/Admin/Department";
import UserList from "../pages/Admin/UserList";
import EditDepartmentForm from "../pages/Admin/EditDepartment";
import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import AddDepartmentForm from "../pages/Admin/AddDepartment";

const AdminRouter = () => {


    const [isDarkMode] = useState(true);
  


  return (
    <Suspense fallback={<BrickLoader />}>
      <Routes>
       
        <Route path="login" element={  localStorage.getItem("isAdmin") === "true" ? ( <Navigate to="/admin/dashboard" />):(<AdminLogin />) }/>

        <Route path="dashboard"element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>

        <Route path="" element={<AdminLayout />}>
            <Route path="department" element={<Department isDarkMode={isDarkMode} />} />
        </Route>

        <Route path="" element={<AdminLayout />}>
            <Route path="users" element={<UserList isDarkMode={isDarkMode} />} />
        </Route>

        <Route path="" element={<AdminLayout />}>
            <Route path="editDepartment" element={<EditDepartmentForm isDarkMode={isDarkMode} />} />
        </Route>

        <Route path="" element={<AdminLayout />}>
            <Route path="addDepartment" element={<AddDepartmentForm isDarkMode={isDarkMode} />} />
        </Route>


      </Routes>
    </Suspense>
  );
};

export default AdminRouter;
