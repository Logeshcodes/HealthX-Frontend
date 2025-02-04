import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import AdminLogin from "../pages/Admin/AdminLogin";
import BrickLoader from "../components/BrickLoader";
import Dashboard from "../pages/Admin/Dashboard";
import Department from "../pages/Admin/Department";
import UserList from "../pages/Admin/UserList";
import EditDepartmentForm from "../pages/Admin/EditDepartment";
import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import AddDepartmentForm from "../pages/Admin/AddDepartment";
import DoctorsListTable from "../pages/Admin/VerifiedDoctorList";
import RequestedDoctorList from "../pages/Admin/RequestedDoctorList";
import PrivateRoute from "../Protecter/AdminPrivateRoute";

import NotFoundPage from "../pages/Admin/NotFoundPage";

const AdminRouter = () => {
  const [isDarkMode] = useState(true);

  return (
    <Suspense fallback={<BrickLoader />}>
      <Routes>
        {/* Unprotected Route */}
        <Route path="login" element={<AdminLogin />} />
        
        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard isDarkMode={isDarkMode} />} />
            <Route path="department" element={<Department isDarkMode={isDarkMode} />} />
            <Route path="users" element={<UserList isDarkMode={isDarkMode} />} />
            <Route path="editDepartment/:department" element={<EditDepartmentForm isDarkMode={isDarkMode} />} />
            <Route path="addDepartment" element={<AddDepartmentForm isDarkMode={isDarkMode} />} />
            <Route path="verifiedDoctors" element={<DoctorsListTable isDarkMode={isDarkMode} />} />
            <Route path="requestedDoctors" element={<RequestedDoctorList isDarkMode={isDarkMode} />} />
          </Route>
        </Route>


        {/* Catch-all Route for 404 */}
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </Suspense>
  );
};

export default AdminRouter;
