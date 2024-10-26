import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import ErrorElement from "./errorElements";
import { Auth } from "../pages/auth/auth";
import { Main } from "../pages/main/main";
import { Register } from "../pages/register/register";
import { Feedback } from "../pages/Feedback/Feedback";
import { Film } from "../pages/film/film";
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
    },
    {
      path: "/Feedback",
        Component:Feedback
    },
    {
      path: "/film",
        Component:Film
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
  