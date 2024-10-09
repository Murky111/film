import axios from "axios";
export const baseURL = axios.create({
    baseURL: "https://my-json-server.typicode.com/Murky111/fake",
    headers: {},
})

export const getPost = () => {
    return baseURL("/newFilm");
}
export const getAuth = () => {
    return baseURL("/Auth");
  };

export const addedFilm = (data) => {
  return baseURL.post("/products", data);
};

export const getFilm = () => {
  return baseURL("/products");
};

export const removeOneFilm = (id) => {
  return baseURL.delete(`/products/${id}`);
};

export const editFilm = (data) => {
  return baseURL.patch(`/products/${data.id}`, data);
};

  