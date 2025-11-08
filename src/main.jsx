import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayOut from "./components/LayOut/RootLayOut.jsx";
import Home from "./components/Home/Home.jsx";
import AllBooks from "./components/AllBooks/AllBooks.jsx";

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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
