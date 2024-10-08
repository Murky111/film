import "./App.css";
import { RouterProvider } from "react-router-dom";
import { createContext , useState } from "react"; 
import { getRoutes } from "./navigation/routes";
export const AuthContext =createContext(null)

export const App = ()=>{
  const [isAuth, setIsAuth] = useState(false);
  
  const routes = getRoutes(isAuth);

  return (
    <AuthContext.Provider value={{isAuth,setIsAuth}}>
      <RouterProvider router={routes} />
    </AuthContext.Provider>
  )
}