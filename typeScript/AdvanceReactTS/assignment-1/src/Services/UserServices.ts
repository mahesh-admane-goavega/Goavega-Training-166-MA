import API from "./placeholderApi";
import { userType } from "../Model";

export class UserService {
  static getAll = async () => {
    const resp = await API.get<userType[]>("/users").catch(() => null);
    if (!resp) return;
    return resp.data;
  };
}
