import { userType } from "../Model";
import { UserService } from "../Services/UserServices";
import { userStore } from "../Store";
import { PostManager } from "./PostManager";
export class UserManager {
  static getAllUsers = async () => {
    const users = await UserService.getAll();
    if (!users) return;
    userStore.users = users;
  };

  static selectUser = (user: userType) => {
    var newUser = { ...user };
    userStore.selectedUser = newUser;
    PostManager.getAll();
  };
}
