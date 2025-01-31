import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navigation from "../widgets/Navigation/Navigation";
import { useEffect, useState } from "react";
import "./App.css";
// import Logo from "../shared/ui/logo/logo";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import AuthorizationPage from "../pages/AuthorizationPage/AuthorizationPage";
import UserApi from "../entities/user/UserApi";

function App() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    // UserApi.refreshTokens()
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));

    // return () => {
    //   console.log("UnMount App");
    // };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navigation user={user} setUser={setUser} />
          <Outlet />
        </div>
      ),
      children: [
        { path: "/", element: <HomePage /> },
        { path: "*", element: <NotFoundPage /> },
        {
          path: "/auth/registration",
          element: (
            <RegistrationPage
              userData={{
                name,
                setName,
                email,
                setEmail,
                password,
                setPassword,
                confirmPassword,
                setConfirmPassword,
                user,
                setUser,
              }}
            />
          ),
        },
        {
          path: "/auth/authorization",
          element: (
            <AuthorizationPage
              userData={{
                email,
                setEmail,
                password,
                setPassword,
                user,
                setUser,
              }}
            />
          ),
        },
      ],
    },
    { path: "*", element: <NotFoundPage /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
