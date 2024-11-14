import React, { useEffect } from 'react'
import { Card_Poster } from '../../components/card_film/card_film_poster'
import "./poster.css"
import { useState } from 'react'
import { baseURL_Poster } from '../../request/request'
export const Poster = () => { 
    const [newCard, setNewCard ] = useState ([]) 

    useEffect(()=>{
        baseURL_Poster
        .get("newFilm")
        .then(({ data }) => {setNewCard(data); console.log(data.status)})
        .catch((baseError) => {
          console.log(baseError.status);
        })
      },[])
    return(
        <div className='poster_main'>
            <div className='poster_main_wrapper'>
                <div>
                    <p className='text_poster'>График премьер фильмов</p>
                    <p className='text_wrapper_poster'>Мы постоянно обновляем наш каталог, добавляя новые фильмы и сериалы. Будьте в курсе всех новинок киноиндустрии!</p>
                    <p className='date_wrapper_poster'>Декабрь.2024</p>
                        <div className='card_wrapper_poster'>
                            <div className='poster_main_wrapper_inner'>
                            {newCard.map((data,index) => {
                                const [day, month, year] = data.year.split('.').map(Number);
                                if (month==12){
                                    return(
                                        <Card_Poster 
                                        key={index}
                                        Images={data.Image}
                                        title={data.Title}
                                        Genre={data.Genre}
                                        id={data.id}
                                    />
                                    )
                                }
                            }
                            )
                
                    }
                    </div>
                    <div>
                    <p className='date_wrapper_poster'>Ноябрь.2024</p>
                    <div className='poster_main_wrapper_inner'>
                    {newCard.map((data,index) => {
                                const [day, month, year] = data.year.split('.').map(Number);
                                // const date = new Date(year, month - 1, day);
                                
                                // console.log(date);
                                if (month==11){
                                    return(
                                        <Card_Poster 
                                        key={index}
                                        Images={data.Image}
                                        title={data.Title}
                                        Genre={data.Genre}
                                        id={data.id}
                                    />
                                    )
                                }
                            }
                            )
                
                    }
                    </div>
                    <p className='date_wrapper_poster'>Октябрь.2024</p>
                    <div className='poster_main_wrapper_inner'>
                    {newCard.map((data,index) => {
                                const [day, month, year] = data.year.split('.').map(Number);
                                // const date = new Date(year, month - 1, day);
                                
                                // console.log(date);
                                if (month==10){
                                    return(
                                        <Card_Poster 
                                        key={index}
                                        Images={data.Image}
                                        title={data.Title}
                                        Genre={data.Genre}
                                        id={data.id}
                                    />
                                    )
                                }
                            }
                            )
                
                    }
                    
                    
                    </div>
                    <p className='date_wrapper_poster'>Сентябрь.2024</p>
                    <div className='poster_main_wrapper_inner'>
                    {newCard.map((data,index) => {
                                const [day, month, year] = data.year.split('.').map(Number);
                                // const date = new Date(year, month - 1, day);
                                
                                // console.log(date);
                                if (month==9){
                                    return(
                                        <Card_Poster 
                                        key={index}
                                        Images={data.Image}
                                        title={data.Title}
                                        Genre={data.Genre}
                                        id={data.id}
                                    />
                                    )
                                }
                            }
                            )
                
                    }
                    
                    
                    </div>
                    </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
