import { UserService } from "../Services/UserService";
import { userStore } from "../Stores/UserStore";
export class UserManager {
  static getAllUsers = async () => {
    const resp = await UserService.getAllUser();
    if (!resp) return null;
    userStore.user = resp;
    console.log("Loading Users");
  };

  static addUser = async (data: any) => {
    await UserService.addUser(data).catch(() => null);
    this.getAllUsers();
    this.addNotification("Added Data");
  };

  static deleteUser = async (id: number) => {
    await UserService.deleteUser(id);
    this.getAllUsers();
    this.addNotification("Deleted Data");
  };

  static updateUser = async (userData: any) => {
    await UserService.updateUser(userData);
    this.getAllUsers();
    this.addNotification("Updated Data");
  };

  // for the notification
  static addNotification = async (message: any) => {
    console.log("Notification", message);
  };
}
