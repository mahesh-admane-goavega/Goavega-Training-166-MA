import { proxy } from "valtio";
import { subscribeKey } from "valtio/utils";
import { PostManager } from "../managers/PostManager";
import { User, Post } from "../models";

interface UserStoreType {
  users: User[];
  selectedUser?: User;
}

export const userStore = proxy<UserStoreType>({
  users: [],
});

interface PostStoreType {
  posts: Post[];
}

export const postStore = proxy<PostStoreType>({
  posts: [],
});

export const loadingStore = proxy({
  loading: false,
});

subscribeKey(userStore, "selectedUser", () => {
  console.log("User Stored");
  console.log(userStore.selectedUser?.id);
  PostManager.getAll();
});
