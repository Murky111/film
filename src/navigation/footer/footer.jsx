import React from "react";
import vk from '../../assets/icons/vk.svg'
import google from '../../assets/icons/google.svg'
import tvit from '../../assets/icons/tvit.svg'
import { Link } from "react-router-dom";
import './footer.css'

export const Footer = () => {
    return (
        <div className="main_footer">
            <div className="main_footer_link_icons">
                <Link className='link_icons_footer'><img src={vk} alt="" /></Link>
                <Link className='link_icons_footer'><img src={google} alt="" /></Link>
                <Link className='link_icons_footer'><img src={tvit} alt="" /></Link>
            </div>
            <div>
                <Link to={"/"} className='Link_footer'>Афиша</Link>
                <Link to={"/"} className='Link_footer'>Новости</Link>
                <Link to={"/"} className='Link_footer'>Персоны</Link>
                <Link to={"/"} className='Link_footer'>Рейтинги</Link>
                <Link to={"/"} className='Link_footer'>Рецензии</Link>
                <Link to={"/"} className='Link_footer'>Каталог фильмов</Link>
            </div>
            <div>
                <p className="main_footer_text">2024 © KINOMRAK.Все права защищены</p>
            </div>
            <div>
            <Link to={"/"} className='Link_politics'>Политика конфиденциальности</Link>
            </div>
        </div>
    );
};

