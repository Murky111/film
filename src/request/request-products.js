import { baseURL } from "./request";

export const addedFilm = (data) => {
  return baseURL.post("/", data);
};

export const getFilm = () => {
  return baseURL("/");
};

export const removeOneFilm = (id) => {
  return baseURL.delete(`/${id}`);
};

export const editFilm = (data) => {
  return baseURL.patch(`/${data.id}`, data);
};
