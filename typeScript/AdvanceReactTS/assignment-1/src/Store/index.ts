import { proxy } from "valtio";
import { subscribeKey } from "valtio/utils";
import { PostManager } from "../Managers/PostManager";
import { postType, userType } from "../Model";

// Store for Users
interface userStoreType {
  users: userType[];
  selectedUser?: userType;
}

export const userStore = proxy<userStoreType>({
  users: [],
});

// Store for Post
interface postStoreType {
  posts: postType[];
}

export const postStore = proxy<postStoreType>({
  posts: [],
});

subscribeKey(userStore, "selectedUser", () => {
  console.log("User is Stored");
  PostManager.getAll();
});
