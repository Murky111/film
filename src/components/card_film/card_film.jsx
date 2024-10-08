import { useEffect,useState } from "react";
import { getPost } from "../../request/request";
import './card_film.css';
import { Link } from "react-router-dom";

export const Card = ({title,Genre,Images}) => {
    return (
        <div className='card_film'>
            {console.log(Images)}
            <Link ><img className="images_film" src={Images} alt="" /></Link>
            <p className="title">{title}</p>
            <p className="genre">{Genre}</p>       
        </div>
    );
};