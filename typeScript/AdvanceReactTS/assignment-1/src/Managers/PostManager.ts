import { postType } from "../Model";
import { PostServices } from "../Services/PostServices";
import { postStore, userStore } from "../Store";
import { CommentManager } from "./CommentManager";

export class PostManager {
  static getAll = async () => {
    const user = userStore.selectedUser;
    const posts = await PostServices.getPost(user?.id);
    if (!posts) return;
    postStore.posts = posts;
  };

  static selectPost(post: postType) {
    var newPost = { ...post };
    postStore.selectedPost = newPost;
    CommentManager.getAll();
  }
}
