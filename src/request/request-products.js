import { baseURL } from "./request";

export const addedFilm = (data) => {
  return baseURL.post("/newFilm", data);
};

 export const getFilm = () => {
   return baseURL("/newFilm");
 };

export const removeOneFilm = (id) => {
  return baseURL.delete(`/newFilm${id}`);
};

export const editFilm = (data) => {
  return baseURL.patch(`/newFilm${data.id}`, data);
};
