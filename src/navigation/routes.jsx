import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import ErrorElement from "./errorElements";

import { Main } from "../pages/main/main";
import { Feedback } from "../pages/Feedback/Feedback";
import { Film } from "../pages/film/film";
import { Poster } from "../pages/poster/poster";
const authPages = [{

}]
const notauthPages= [
    {
      path: "/Feedback",
        Component:Feedback
    },
    {
      path: "/film",
        Component:Film,
        // children:[{path: "/:id",
        // Component:Feedback}]
    },
    {
      path: "/poster",
        Component:Poster
    },
    

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
  