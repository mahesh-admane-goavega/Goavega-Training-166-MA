import { Any } from "@react-spring/web";
import { UserService } from "../Services/UserService";
import { userStore } from "../Stores/UserStore";
export class UserManager {
  static getAllUsers = async () => {
    const resp = await UserService.getAllUser();
    if (!resp) return null;
    userStore.user = resp;
  };

  static addUser = async (data: any) => {
    await UserService.addUser(data).catch(() => null);
    this.getAllUsers();
  };

  static deleteUser = async (id: number) => {
    await UserService.deleteUser(id).catch(() => null);
    this.getAllUsers();
  };
}
