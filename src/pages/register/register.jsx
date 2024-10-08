import React, { createContext, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getAuth } from '../../request/request';
import { useNavigate } from 'react-router-dom';
import './register.css'
import { TextInput } from '../../components/text-input/text-input';
import { useEffect } from 'react';
import { AuthContext } from '../../App';

export const Register = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();

    const [UserName, setUserName] = React.useState('');
    const [UserSecondName, setUserSecondName] = React.useState('');
    const [UserLogin, setUserLogin] = React.useState('');
    const [UserPassword, setUserPassword] = React.useState('');
    const [UserPasswordcheck, setUserPasswordcheck] = React.useState('');
    const [UserTelEmail, setUserTelEmail] = React.useState('');
    const [isregistor_error, setisregistor_error] = useState(false)
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const onSubmit = (data) => {
        console.log({
            'UserName': data.UserName,
            'UserSecondName': data.UserSecondName,
            'UserLogin': data.UserLogin,
            'UserPassword': data.UserPassword,
            'UserPasswordcheck': data.UserPasswordcheck,
            'UserTelEmail': data.UserTelEmail
        });
        if (UserPassword==UserPasswordcheck){
            getAuth().then(({ data }) => {
                setIsAuth(true)
                navigate("/");
                // localStorage.setItem("token", data.token);
                
            });
            setisregistor_error(false)
        }else{setisregistor_error(true)}
        
    };

    return (
        <div className='main_register'>
            <div className='register'>
                <p className='p_reg'>Зарегистрироваться</p>
                <form className='register_form' onSubmit={handleSubmit(onSubmit)}>
                    <TextInput
                        label={"Имя"}
                        errors={errors}
                        name={'UserName'}
                        register={register}
                        validate={{ required: true }}
                        changevalue={setUserName}
                    />
                    <TextInput
                        label={"Фамилия"}
                        errors={errors}
                        name={'UserSecondName'}
                        register={register}
                        validate={{ required: true }}
                        changevalue={setUserSecondName}
                    />
                    <TextInput
                        label={"Придумайте логин"}
                        errors={errors}
                        name={'UserLogin'}
                        register={register}
                        validate={{ required: true }}
                        changevalue={setUserLogin}
                    />
                    <TextInput
                        label={"Придумайте пороль"}
                        errors={errors}
                        name={'UserPassword'}
                        register={register}
                        validate={{ required: true }}
                        changevalue={setUserPassword}
                        type={'password'}
                    />
                    <TextInput
                        label={"Повторите пороль"}
                        errors={errors}
                        name={'UserPasswordcheck'}
                        register={register}
                        validate={{ required: true }}
                        changevalue={setUserPasswordcheck}
                        type={'password'}
                    />
                    {isregistor_error &&(<p className='Passwordcheck'>Пароли не совпадают</p>)}
                    <TextInput
                        label={"Номер телефона или e-mail"}
                        errors={errors}
                        name={'UserTelEmail'}
                        register={register}
                        validate={{ required: true }}
                        changevalue={setUserTelEmail}
                    />
                    <button type="submit" className='button_reg'>Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
};


export default Register;