import { createBrowserRouter } from "react-router-dom";
// import PrivetRouterPage from "./PrivetRouter.tsx";
import App from "../App.tsx";
import Login from "../pages/auth/Login/Login.tsx";
import Signup from "../pages/auth/Signup/Signup.tsx";
import NotFound from "../components/NotFound/NotFound.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
