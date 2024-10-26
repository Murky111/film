import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import vk from '../../assets/icons/vk.svg'
import google from '../../assets/icons/google.svg'
import tvit from'../../assets/icons/tvit.svg'
import "./Feedback.css"
import { TextInput } from '../../components/text-input/text-input';
import { useForm } from 'react-hook-form';

export const  Feedback = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [UserName, setUserName] = React.useState('');
    const [UserEmail, setUserUserEmail] = React.useState('');
    const [UserTel, setUserTel] = React.useState('');
    return (
        <div className='main_Feedback'>
                <p className='main_Feedback_text'>Обратная связь</p>
                <div className='main_Feedback__wrapper'>
                    <p className='main_Feedback_wrapper_hader'>Ваше мнение важно для нас!</p>
                    <p className='main_Feedback_wrapper_text'>В компании [Название компании] мы стремимся к постоянному улучшению наших услуг и продуктов. Ваша обратная связь помогает нам лучше понимать ваши потребности и ожидания, что позволяет нам становиться лучше с каждым днем.</p>
                    <div className='main_Feedback_wrapper_inner'>
                    <Link className='main_Feedback_wrapper_link'><img src={vk} alt="" /></Link>
                    <Link className='main_Feedback_wrapper_link'><img src={google} alt="" /></Link>
                    <Link className='main_Feedback_wrapper_link'><img src={tvit} alt="" /></Link>
                    <Link className='main_Feedback_wrapper_link'><img src={vk} alt="" /></Link>
                </div>
                </div>
                <form className='Feedback_form'>
                    <div className='Feedback_imput'>
                        <div className='Feedback_imput_div'>
                            <p className='text'>Ваше имя:</p>
                            <TextInput
                                    label={"Введите ваше имя"}
                                    errors={errors}
                                    name={'UserLogin'}
                                    register={register}
                                    validate={{ required: true }}
                                    changevalue={(elem) => { setUserName(elem.target.value) }}
                                
                                />
                        </div>
                        <div  className='Feedback_imput_div'>
                            <p className='text'>E-mail:</p>
                            <TextInput
                                    label={"Введите ваш E-mail"}
                                    errors={errors}
                                    name={'UserEmail'}
                                    register={register}
                                    validate={{ required: true }}
                                    changevalue={(elem) => { setUserUserEmail(elem.target.value) }}
                                
                                />
                        </div>
                        <div  className='Feedback_imput_div'>
                            <p className='text'>Телефон:</p>
                            <TextInput
                                    label={"Введите ваш телефон"}
                                    errors={errors}
                                    name={'UserTel'}
                                    register={register}
                                    validate={{ required: true }}
                                    changevalue={(elem) => { setUserTel(elem.target.value) }}
                                
                                />
                                
                            
                        </div>
                        
                    </div>
                </form>
                <div className='imput_message'>
                            <p className='text'>Ваше сообщение:</p>
                            <textarea className='imput' placeholder="Пожелания, предложения, сотрудничество и т.д."></textarea>
                </div>
                <div className='div_button_message'>
                    <button className='button_message'>Отправить</button>
                </div>
        </div>
    );
};