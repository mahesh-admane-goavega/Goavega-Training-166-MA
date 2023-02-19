import { PostServices } from "../Services/PostServices";
import { postStore, userStore } from "../Store";

export class PostManager {
  static getAll = async () => {
    const user = userStore.selectedUser;
    console.log(user);
    const posts = await PostServices.getPost(user?.id);
    if (!posts) return;
    postStore.posts = posts;
    userStore.selectedUser = user;
  };
}
