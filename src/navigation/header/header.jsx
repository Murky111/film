import { Link, useNavigate } from 'react-router-dom'
import Vector from '../../assets/icons/Vector.svg'
import logo from '../../assets/icons/logo.svg'
import vk from '../../assets/icons/vk.svg'
import google from '../../assets/icons/google.svg'
import tvit from'../../assets/icons/tvit.svg'
import './header.css'
import { useContext } from 'react'
import { AuthContext } from '../../App'

export const Header = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const navigate = useNavigate();
  
    const logout = () => {
      navigate("/");
  
      localStorage.removeItem("token");
      setIsAuth(false);
    };
  
    return (
        <header style={{display: 'flex', gap: 10}}>
            <div>
                <div className='logo'>
                    <img src={logo} alt="" className='logo_images' />
                    <p className='logo_name'>KINOMRAK</p>
                    </div>
                    <div className='Link'>
                    <Link className='link_icons'><img src={vk} alt="" /></Link>
                    <Link className='link_icons'><img src={google} alt="" /></Link>
                    <Link className='link_icons'><img src={tvit} alt="" /></Link>
                </div>
            </div>
            <h4>
                <Link to={"/"} className='Link_hader'>Главная</Link>
            </h4>
            <h4>
                <Link to={"/"}className='Link_hader'>Афиша</Link>
            </h4>
            <h4>
                <Link to={"/"}className='Link_hader'>Медиа</Link>
            </h4>
            <h4>
                <Link to={"/"}className='Link_hader'>Фильмы</Link>
            </h4>
            <h4>
                <Link to={"/"}className='Link_hader'>Актёры</Link>
            </h4>
            <h4>
                <Link to={"/"}className='Link_hader'>Новости</Link>
            </h4>
            <h4>
                <Link to={"/"}className='Link_hader'>Подборки</Link>
            </h4>
            <h4>
                <Link to={"/"}className='Link_hader'>Категории</Link>
            </h4>
            <button className='Vector'><img src={Vector} alt="" /></button>
            {!isAuth &&(<Link to={"/auth"} className='author'>Войти</Link>)}
            
        </header>
    );
};