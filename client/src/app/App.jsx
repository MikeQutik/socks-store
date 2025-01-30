import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navigation from "../widgets/Navigation/Navigation";
import React from "react";
import "./App.css";
import Footer from "../widgets/footer/Footer";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navigation />
          <Outlet />
          <Footer />
        </div>
      ),
      children: [
        { path: "/", element: <HomePage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
