import API from "./placeholderApi";
import { userType } from "../Model";

export class UserService {
  static getAll = async () => {
    const resp = await API.get<userType[]>("/users");
    return resp.data;
  };
}
