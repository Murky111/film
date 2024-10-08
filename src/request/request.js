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
  