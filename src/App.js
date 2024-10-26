import "./App.css";
import { RouterProvider } from "react-router-dom";
import { createContext , useState } from "react"; 
import { getRoutes } from "./navigation/routes";
export const AuthContext =createContext(null)
export const FilmIdContext =createContext(null)
export const App = ()=>{
  const [isAuth, setIsAuth] = useState(false);
  const [FilmId, setFilmId] = useState(-1)
 
  const routes = getRoutes(isAuth);

  return (
    <AuthContext.Provider value={{isAuth,setIsAuth}}>
      <FilmIdContext.Provider value={{FilmId, setFilmId}}>
        <RouterProvider router={routes} />
      
      </FilmIdContext.Provider>
    </AuthContext.Provider>
  )
}