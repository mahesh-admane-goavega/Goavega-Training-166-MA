import { useSnapshot } from "valtio";
import { commentType } from "../Model";
import { CommentServices } from "../Services/CommentServices";
import { commentStore, postStore } from "../Store";

export class CommentManager {
  static getAll = async () => {
    const post = postStore.selectedPost;
    const comment = await CommentServices.getAllComment(post?.id);
    if (!comment) return;
    commentStore.comments = comment;
  };
}
