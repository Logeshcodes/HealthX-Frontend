
import Layout from "./Layout";
import Home from "./pages/Home";
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
