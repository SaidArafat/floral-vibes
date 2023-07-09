import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/home";
import RootLayout from "./layout/rootLayout";
import Flowers from "./pages/flowers";
import Cart from "./pages/cart";
import Blog from "./components/blog";
import Popular from "./components/popular";
import NotFound from "./pages/notFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "/flowers", element: <Flowers /> },
        { path: "/cart", element: <Cart /> },
        { path: "/blog", element: <Blog /> },
        { path: "/gallery", element: <Popular /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
