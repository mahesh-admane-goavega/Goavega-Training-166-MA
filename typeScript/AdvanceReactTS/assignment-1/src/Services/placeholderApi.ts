import axios from "axios";
import { useSnapshot } from "valtio";
import { newPostStore } from "../Store";
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
export default instance;
