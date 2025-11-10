import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayOut from "./components/LayOut/RootLayOut.jsx";
import Home from "./components/Home/Home.jsx";
import AllBooks from "./components/AllBooks/AllBooks.jsx";
import AuthProvider from "./Contexts/AuthProvider.jsx";
import Register from "./components/Register/Register.jsx";
import AddBook from "./components/AddBook/AddBook.jsx";
import MyBooks from "./components/MyBooks/MyBooks.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import LogIn from "./components/LogIn/LogIn.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import UpdateBook from "./components/UpdateBook/UpdateBook.jsx";

const router = createBrowserRouter([
  {
    path: "/",

    Component: RootLayOut,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-books",
        Component: AllBooks,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/myBooks",
        element: (
          <PrivateRoute>
            <MyBooks></MyBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/book-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/books/${params.id}`),
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
      },
      {
        path:'/login',
        Component:LogIn
      },
         {
        path: "/update-book/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/books/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
