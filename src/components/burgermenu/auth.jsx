import { Transition } from 'react-transition-group';
import x from '../burgermenu/images/Vector.svg'
import './auth.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import vk from '../../assets/icons/vk.svg'
import google from '../../assets/icons/google.svg'
import tvit from'../../assets/icons/tvit.svg'
import { useContext } from 'react';
import { AuthContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { getAuth } from '../../request/request';
import { TextInput } from '../text-input/text-input'
import { useForm } from 'react-hook-form';
import { RegisterMenu } from './register';
export const BurgerMenu = ({ isOpen, onClose, children }) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [UserLogin, setUserLogin] = React.useState('');
    const [UserPassword, setUserPassword] = React.useState('');
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const [modalIsopen, setmodalIsopen] = React.useState(false);

    const onSubmit = (data) => {
        getAuth().then(({ data }) => {
            setIsAuth(true)
            navigate("/");
            onClose()
            localStorage.setItem("token", data.token);
        });
        console.log({
            'UserLogin': data.UserLogin,
            'UserPassword': data.UserPassword,
        });
    };
    const onWrapperClick = (event) => {
        if (event.target.classList.contains("modal__wrapper")) { onClose() }
    }
    const onCloseAuth =() => {
        onClose()
        setmodalIsopen(false)
    }

    return (
        <Transition in={isOpen} timeout={30} unmountOnExit={true}>
            { (state) => 
                (<div className={`modal modal--${state}`}>
                <div className="modal__wrapper" onClick={onWrapperClick}>
                    <div className="modal__wrapper__content">
                        <button className="modal__wrapper__content__closeButton" onClick={()=>onClose()}><img src={x} alt="" /></button>
                        
                            <div className='main_auth'>
                                <div className='auth_Wrapper'>
                                    <p className='p_author'>Войти</p>
                                        <div> 
                                            <form className='auth_form' onSubmit={handleSubmit(onSubmit)}>
                                                <TextInput
                                                    label={"логин"}
                                                    errors={errors}
                                                    name={'UserLogin'}
                                                    register={register}
                                                    validate={{ required: true }}
                                                    changevalue={(elem) => { setUserLogin(elem.target.value) }}
                                                
                                                />
                                                <TextInput
                                                    label={"Ведите пороль"}
                                                    errors={errors}
                                                    name={'UserPassword'}
                                                    register={register}
                                                    validate={{ required: true }}
                                                    changevalue={(elem) => { setUserPassword(elem.target.value) }}
                                                    type={'password'}
                                                />
                                                <button type='submit' className='button_author' >Войти</button>
                                            </form>
                                        </div>
                                        <button className='button_link_reg' onClick={ ()=>{setmodalIsopen(true)}}>Зарегистрироваться</button>
                                        <div className='inner_wrapper'>
                                            <Link className='link_icons'><img src={vk} alt="" /></Link>
                                            <Link className='link_icons'><img src={google} alt="" /></Link>
                                            <Link className='link_icons'><img src={tvit} alt="" /></Link>
                                        </div>
                                </div>
                            
                            </div>
              </div>
                </div>
                <RegisterMenu isOpen={modalIsopen} onClose={()=>{onCloseAuth()}}>
                    
                </RegisterMenu>
            </div>)}
        </Transition>
    );
};