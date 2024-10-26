import { FilmIdContext } from "../../App";
import { useContext } from "react";

export const  Film = () => {
    const {FilmId, setFilmId}=useContext(FilmIdContext)
    return (
        <div>{console.log(FilmId)}</div>
    );
};