import { createBrowserRouter } from "react-router-dom";
// import PrivetRouterPage from "./PrivetRouter.tsx";
import App from "../App.tsx";
import Login from "../pages/auth/Login/Login.tsx";
import Signup from "../pages/auth/Signup/Signup.tsx";
import NotFound from "../components/NotFound/NotFound.tsx";
import Home from "../pages/home/Home/home.tsx";
import AllBooks from "../pages/books/AllBooks/AllBooks.tsx";
import BookDetails from "../pages/books/BooksDetails/BookDetails.tsx";

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
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/books-details/:id",
        element: <BookDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
