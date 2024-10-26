import axios from "axios";
import { FILM } from "./const-request";
export const baseURL = axios.create({
    baseURL: "https://my-json-server.typicode.com/Murky111/fake",
    headers: {},
})

export const getPost = () => {
    return baseURL(FILM);
};
export const getAuth = () => {
    return baseURL("/Auth");
  };

export const addedFilm = (data) => {
  return baseURL.post("/newFilm", data);
};

export const getFilm = () => {
  return baseURL("/newFilm");
};

export const removeOneFilm = (id) => {
  return baseURL.delete(`/newFilm/${id}`);
};

export const editFilm = (data) => {
  return baseURL.patch(`/newFilm/${data.id}`, data);
};

  