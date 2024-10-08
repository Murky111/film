import React, { useState } from 'react';
import './auth.css'
import { Link } from 'react-router-dom';
import vk from '../../assets/icons/vk.svg'
import google from '../../assets/icons/google.svg'
import tvit from'../../assets/icons/tvit.svg'
import { useContext } from 'react';
import { AuthContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { getAuth } from '../../request/request';
import { TextInput } from '../../components/text-input/text-input'
import { useForm } from 'react-hook-form';
export const Auth = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [UserLogin, setUserLogin] = React.useState('');
    const [UserPassword, setUserPassword] = React.useState('');
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const navigate = useNavigate();

    const onSubmit = (data) => {
        getAuth().then(({ data }) => {
            setIsAuth(true)
            navigate("/");
            // localStorage.setItem("token", data.token);
        });
        console.log({
            'UserLogin': data.UserLogin,
            'UserPassword': data.UserPassword,
        });
    };





    return (
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
                                changevalue={setUserLogin}
                            />
                            <TextInput
                                label={"Ведите пороль"}
                                errors={errors}
                                name={'UserPassword'}
                                register={register}
                                validate={{ required: true }}
                                changevalue={setUserPassword}
                                type={'password'}
                            />
                            <button type='submit' className='button_author'>Войти</button>
                        </form>
                    </div>
                    <Link to={"/register"} type='submit' className='button_link_reg' >Зарегистрироваться</Link>
                    <div className='inner_wrapper'>
                        <Link className='link_icons'><img src={vk} alt="" /></Link>
                        <Link className='link_icons'><img src={google} alt="" /></Link>
                        <Link className='link_icons'><img src={tvit} alt="" /></Link>
                    </div>
            </div>
           
        </div>
    );
};