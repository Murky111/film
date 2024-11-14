import { useEffect,useState } from "react";
import { getPost } from "../../request/request";
import './card_film.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Card_Poster = ({title,Genre,Images,id,onCardClick}) => {
    return (
        <div onClick={onCardClick} className='card_film'>
            <Link ><img className="images_film" src={Images} alt="" /></Link>
            <p className="title">{title}</p>
            <p className="genre">{Genre}</p>       
        </div>
    );
};