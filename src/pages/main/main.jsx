import React, { useState } from 'react'
import { getPost } from '../../request/request';
import './main.css';
import { Card } from '../../components/card_film/card_film';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CreateFilm  } from '../../components/card_film/create-film';
import { EditFilm } from '../../components/card_film/edit-film';
import { getFilm } from '../../request/request';
import { editFilm } from '../../request/request';
import { removeOneFilm } from '../../request/request';
export const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newCard, setNewCard ] = useState ([])
    const [isEdit, setIsEdit] = useState({ status: false, id: null });
    const addProduct = () => {
        setIsModalOpen(true);
      };
      useEffect(() => {
        getFilm ()
          .then(({ data }) => {
            setNewCard(data.map((elem) => ({ ...elem, price: 10 })));
          })
          .catch(() => null);
      }, []);
    
      const removeFilm = (id) => {
        removeOneFilm (id)
          .then(({}) => {
            setNewCard((prevValue) =>
              prevValue.filter((Film) => Film.id !== id)
            );
          })
          .catch(() => alert("Ошибка"));
      };
    
      const onCloseModal = () => {
        setIsModalOpen(false);
      };
    
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
                    <button className='addProduct' onClick={addProduct}>Добавить продукт</button>
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
                            onEdit={setIsEdit}
                            onRemove={removeFilm}
                        />
                    )
                    })
                        
                } 
                </div>
                <CreateFilm
        setFilm={setNewCard}
        onCloseModal={onCloseModal}
        isModalOpen={isModalOpen}
      />
      {isEdit.status && (
        <EditFilm
          setFilm={setNewCard}
          onCloseModal={setIsEdit}
          isModalOpen={isEdit.status}
          initialValues={
            newCard.filter((Film) => Film.id === isEdit.id)[0]
          }
          setIsEdit={setIsEdit}
          id={isEdit.id}
        />
      )}

            </div>
        </div>
    );

};