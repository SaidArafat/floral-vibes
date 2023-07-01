import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/home";
import RootLayout from "./layout/rootLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
