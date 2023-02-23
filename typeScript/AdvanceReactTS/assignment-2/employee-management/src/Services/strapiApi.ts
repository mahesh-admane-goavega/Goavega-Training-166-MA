import axios from "axios";

// base url from strapi adatbase server
const instance = axios.create({
  baseURL: "http://localhost:1337/api/",
});

export default instance;
