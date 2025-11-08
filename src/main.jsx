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

const router = createBrowserRouter([
  {
    path: "/",

    Component: RootLayOut,
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
        Component: AddBook,
      },
      {
        path: "/myBooks",
        Component: MyBooks,
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
