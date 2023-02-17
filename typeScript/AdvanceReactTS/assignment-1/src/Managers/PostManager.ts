import { userStore } from "../Store";

export class PostManager {
  static getAll = () => {
    const user = userStore.selectedUser;
    console.log(user);
    userStore.selectedUser = user;
  };
}
