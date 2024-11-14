import { Transition } from 'react-transition-group';
import x from '../burgermenu/images/Vector.svg'
import './register.css';
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
export const RegisterMenu = ({ isOpen, onClose, children }) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [UserName, setUserName] = React.useState('');
    const [UserSecondName, setUserSecondName] = React.useState('');
    const [UserLogin, setUserLogin] = React.useState('');
    const [UserPassword, setUserPassword] = React.useState('');
    const [UserPasswordcheck, setUserPasswordcheck] = React.useState('');
    const [UserTelEmail, setUserTelEmail] = React.useState('');
    const [isregistor_error, setisregistor_error] = useState(false)
    const { isAuth, setIsAuth } = useContext(AuthContext);

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

    return (
        <Transition in={isOpen} timeout={30} unmountOnExit={true}>
            { (state) => 
                (<div className={`modal modal--${state}`}>
                <div className="modal__wrapper" onClick={onWrapperClick}>
                    <div className="modal__wrapper__content">
                        <button className="modal__wrapper__content__closeButton" onClick={()=>onClose()}><img src={x} alt="" /></button>
                        
                        <div className='main_register_modal'>
            <div className='register'>
                <p className='p_reg'>Зарегистрироваться</p>
                <form className='register_form' onSubmit={handleSubmit(onSubmit)}>
                    <TextInput
                        label={"Имя"}
                        errors={errors}
                        name={'UserName'}
                        register={register}
                        validate={{ required: true }}
                        changevalue={(e) => setUserName(e.target.value)}
                    />
                    <TextInput
                        label={"Фамилия"}
                        errors={errors}
                        name={'UserSecondName'}
                        register={register}
                        validate={{ required: true }}
                        changevalue={(e) => setUserSecondName(e.target.value)}
                    />
                    <TextInput
                        label={"Придумайте логин"}
                        errors={errors}
                        name={'UserLogin'}
                        register={register}
                        validate={{ required: true }}
                        changevalue={(e) => setUserLogin(e.target.value)}
                    />
                    <TextInput
                        label={"Придумайте пороль"}
                        errors={errors}
                        name={'UserPassword'}
                        register={register}
                        validate={{ required: true }}
                        changevalue={(e) => setUserPassword(e.target.value)}
                        type={'password'}
                    />
                    <TextInput
                        label={"Повторите пороль"}
                        errors={errors}
                        name={'UserPasswordcheck'}
                        register={register}
                        validate={{ required: true }}
                        changevalue={(e) => setUserPasswordcheck(e.target.value)}
                        type={'password'}
                    />
                    {isregistor_error &&(<p className='Passwordcheck'>Пароли не совпадают</p>)}
                    <TextInput
                        label={"Номер телефона или e-mail"}
                        errors={errors}
                        name={'UserTelEmail'}
                        register={register}
                        validate={{ required: true }}
                        changevalue={(e) => setUserTelEmail(e.target.value)}
                    />
                    <button type="submit" className='button_reg'>Зарегистрироваться</button>
                </form>
            </div>                 
           </div>
              </div>
                </div>
            </div>)}
        </Transition>
    );
};