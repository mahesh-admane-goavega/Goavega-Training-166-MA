import { proxy } from "valtio";
import { subscribeKey } from "valtio/utils";
import { PostManager } from "../Managers/PostManager";
import { commentType, postType, userType } from "../Model";

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
  selectedPost?: postType;
}

export const postStore = proxy<postStoreType>({
  posts: [],
});
export const loadingStore = proxy({
  loading: false,
});

// store for commment

interface commentStoreType {
  comments: commentType[];
}

export const commentStore = proxy<commentStoreType>({
  comments: [],
});
