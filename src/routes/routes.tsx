import { createBrowserRouter } from "react-router-dom";
import PrivetRouterPage from "./PrivetRouter.tsx";
import App from "../App.tsx";
import Login from "../pages/auth/Login/Login.tsx";
import Signup from "../pages/auth/Signup/Signup.tsx";
import NotFound from "../components/NotFound/NotFound.tsx";
import Home from "../pages/home/Home/home.tsx";
import AllBooks from "../pages/books/AllBooks/AllBooks.tsx";
import BookDetails from "../pages/books/BooksDetails/BookDetails.tsx";
import EditeBook from "../components/ManageBooks/EditeBook/EditeBook.tsx";
import AddBook from "../pages/books/AddBook/AddBook.tsx";
import ReadingFuture from "../pages/bookmanagement/ReadingFuture/ReadingFuture.tsx";
import Wiselist from "../pages/bookmanagement/Wiselist/Wiselist.tsx";
import CurentlyReading from "../pages/bookmanagement/CurentlyReading/CurentlyReading.tsx";
import FinishReading from "../pages/bookmanagement/FinishReading/FinishReading.tsx";
import Clendar from "../pages/calendar/Clendar.tsx";

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
      {
        path: "/calendar",
        element: <Clendar />,
      }
      ,
      {
        path: "/add-book",
        element: (
          <PrivetRouterPage>
            <AddBook />
          </PrivetRouterPage>
        ),
      },
      {
        path: "/edit-book/:id",
        element: (
          <PrivetRouterPage>
            <EditeBook />
          </PrivetRouterPage>
        ),
      },
      {
        path: "/reading-future",
        element: (
          <PrivetRouterPage>
            <ReadingFuture />
          </PrivetRouterPage>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PrivetRouterPage>
            <Wiselist />
          </PrivetRouterPage>
        ),
      },
      {
        path: "/curently-reading",
        element: (
          <PrivetRouterPage>
            <CurentlyReading />
          </PrivetRouterPage>
        ),
      },
      {
        path: "/finished-reading",
        element: (
          <PrivetRouterPage>
            <FinishReading />
          </PrivetRouterPage>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
