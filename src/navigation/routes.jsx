import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import ErrorElement from "./errorElements";
import { Auth } from "../pages/auth/auth";
import { Main } from "../pages/main/main";
import { Register } from "../pages/register/register";
const authPages = [{

}]
const notauthPages= [
    {
        path: "/auth",
        Component: Auth,
    },
    {
        path: "/register",
        Component: Register
    }

]

export const getRoutes = (isAuth) => {
    return createBrowserRouter([
      {
        Component: Layout,
        errorElement: <ErrorElement />,
        children: [
          {
            path: "/",
            Component: Main,
          },
  
          ...(isAuth ? authPages : notauthPages),
        ],
      },
    ]);
  };
  