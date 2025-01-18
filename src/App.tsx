import Layout from "./Layout";
import Home from "./pages/Home";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
    </>
  )
);

function App() {
  return (
    <>
      {/* <AuthProvider> */}
        {/* <ToastContainer richcolors theme="dark" /> */}
        <RouterProvider router={router} />
      {/* </AuthProvider> */}
    </>
  );
}

export default App;
