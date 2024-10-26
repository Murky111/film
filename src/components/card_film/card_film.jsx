import { useEffect,useState } from "react";
import { getPost } from "../../request/request";
import './card_film.css';
import { Link } from "react-router-dom";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({title,Genre,Images,id,onRemove,onEdit,onCardClick}) => {
    const removeFilm = useCallback(() => {
        onRemove(id);
      }, [id, onRemove]);

   
      const editFilm = useCallback(() => {
        onEdit({ status: true, id });
      }, [id, onEdit]);
    return (
        <div onClick={onCardClick} className='card_film'>
            <Link ><img className="images_film" src={Images} alt="" /></Link>
            <button className="Button_del" onClick={removeFilm}>Удалить</button>
            <button className="Button_change" onClick={editFilm}>Изменить</button>
            <p className="title">{title}</p>
            <p className="genre">{Genre}</p>       
        </div>
    );
};