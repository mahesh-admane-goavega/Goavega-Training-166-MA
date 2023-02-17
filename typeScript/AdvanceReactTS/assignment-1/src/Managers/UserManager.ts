import { userType } from "../Model";
import { UserService } from "../Services/UserServices";
import { userStore } from "../Store";
export class UserManager {
  static getAllUsers = async () => {
    const users = await UserService.getAll();
    userStore.users = users;
  };

  static selectUser = (user: userType) => {
    userStore.selectedUser = user;
    console.log(user);
  };
}
