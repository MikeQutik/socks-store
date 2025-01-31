import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navigation from "../widgets/Navigation/Navigation";
import React from "react";
import "./App.css";
import Footer from "../widgets/footer/Footer";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import GeneratorPage from "../pages/GeneratorPage/GeneratorPage";
import LogInPage from "../pages/LogInPage/LogInPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="App">
          <Navigation />
          <main className="content">
            <Outlet />
          </main>

          <Footer />
        </div>
      ),
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/Generator", element: <GeneratorPage /> },
        { path: "/Login", element: <LogInPage /> },
        { path: "/Registration", element: <RegistrationPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
