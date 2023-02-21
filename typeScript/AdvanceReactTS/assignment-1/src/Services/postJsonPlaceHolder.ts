import axios from "axios";

const instancepost = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  method: "POST",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
export default instancepost;
