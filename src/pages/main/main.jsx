import React, { useContext, useState } from 'react'
import { getPost } from '../../request/request';
import './main.css';
import { Card } from '../../components/card_film/card_film';
import { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { CreateFilm  } from '../../components/card_film/create-film';
import { EditFilm } from '../../components/card_film/edit-film';
import { getFilm } from '../../request/request';
import { editFilm } from '../../request/request';
import { removeOneFilm } from '../../request/request';
import { Preloader } from "../../components/preloader/preloader";
import { FILM } from '../../request/const-request';
import { useRequest } from '../../hook/use-request';
import { baseURL } from '../../request/request';
import { createContext } from 'react';
import { FilmIdContext } from '../../App';
export const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newCard, setNewCard ] = useState ([])
    const [isLoading, setisLoading ] = useState (false)
    const [isEdit, setIsEdit] = useState({ status: false, id: null });
    const {FilmId, setFilmId} = useContext(FilmIdContext)
 
   

    // const { data, isLoading, error, useQuery } = useRequest({
    //   url: FILM,
    // });
  
    useEffect(()=>{
      baseURL
      .get(FILM)
      .then(({ data }) => {setNewCard(data); console.log(data.status)})
      .catch((baseError) => {
        console.log(baseError.status);
      })
      .finally(() => setisLoading(false));
    },[])
    const addProduct = () => {
        setIsModalOpen(true);
      };
      useEffect(() => {
        getFilm ()
          .then(({ data }) => {
            setNewCard(data.map((elem) => ({ ...elem, price: 10 })));
          })
          .catch(() => null).finally(setisLoading(false))
          
      }, []);
      const Navigate =useNavigate()
     
      const gotofilm = (tempfilmid) => {
        setFilmId(tempfilmid)
        console.log(FilmId)
        // Navigate("/film")
      }

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
                  <Preloader isLoading={isLoading}>
                  <div className='Cards_wrapper'>
                  
                    {
                     
                      newCard.map((data,index) => {
                          return(
                              <Card
                              onCardClick={()=>{gotofilm(data.id)}}
                              key={index}
                              Images={data.Image}
                              title={data.Title}
                              Genre={data.Genre}
                              onEdit={setIsEdit}
                              onRemove={removeFilm}
                              id={data.id}
                          />
                      )
                      })
                    }                       
      
                  </div>
                  </Preloader>
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