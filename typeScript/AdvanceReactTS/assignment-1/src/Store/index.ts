import { proxy } from "valtio";
import { subscribeKey } from "valtio/utils";
import { PostManager } from "../Managers/PostManager";
import { UserManager } from "../Managers/UserManager";
import { userType } from "../Model";

interface userStoreType {
  users: userType[];
  selectedUser?: userType;
}

export const userStore = proxy<userStoreType>({
  users: [],
});

// subscribeKey(userStore, "selectedUser", () => {
//   console.log("User is Stored");
//   PostManager.getAll();
// });
