import React, { useState } from 'react'
import { getPost } from '../../request/request';
import './main.css';
import { Card } from '../../components/card_film/card_film';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export const Main = () => {
    const [newCard, setNewCard ] = useState ([])
    useEffect (() => {
        getPost().then((data) => {
            if (data.data && data.status === 200) {
                setNewCard(data.data)
            }
        }).catch((error) => { console.log(error) })
    }, [])

    return (
        <div className='main'>
            <div className='main_wrapper'>
                <div className='Link_wrapper'>
                    <p className='text'>Сейчас в кино</p>
                    <div className='Link_wrapper_inner'>
                        <Link to={"/"}className='Link_genre_film'>Все</Link>
                        <Link to={"/"}className='Link_genre_film'>Боевики</Link>
                        <Link to={"/"}className='Link_genre_film'>Приключения</Link>
                        <Link to={"/"}className='Link_genre_film'>Комедии</Link>
                        <Link to={"/"}className='Link_genre_film'>Фантастика</Link>
                        <Link to={"/"}className='Link_genre_film'>Триллеры</Link>
                        <Link to={"/"}className='Link_genre_film'>Драммы</Link>
                    </div>
                </div>
                { console.log(newCard) }
                <div className='Cards_wrapper'>
                {
                    
                    newCard.map((data,index) => {
                        return(
                            <Card 
                            key={index}
                            Images={data.Image}
                            title={data.Title}
                            Genre={data.Genre}
                        
                        />
                    )
                    })
                        
                } 
                </div>  
            </div>
        </div>
    );

};