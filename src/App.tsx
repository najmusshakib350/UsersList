import Signup from "./pages/Signup";
import SignIn from "./pages/Signin";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import PrivateRoutes from "./utils/PrivateRoute";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        path: "users",
        element: (
          <Layout>
            <Users />
          </Layout>
        ),
      },
      {
        path: "dashboard",
        element: (
          <Layout>
            <Dashboard />
          </Layout>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
