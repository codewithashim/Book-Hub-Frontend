import { createBrowserRouter } from "react-router-dom";
// import PrivetRouterPage from "./PrivetRouter.tsx";
import App from "../App.tsx";
import Login from "../pages/auth/Login/Login.tsx";
import Signup from "../pages/auth/Signup/Signup.tsx";
import NotFound from "../components/NotFound/NotFound.tsx";
import Home from "../pages/home/Home/home.tsx";
import DashboardLayout from "../layouts/DashboardLayout.tsx";
import AllBooks from "../pages/allBooks/AllBooks.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/allBooks",
        element: <AllBooks />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
