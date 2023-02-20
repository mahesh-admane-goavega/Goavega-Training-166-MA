import { commentType, postType } from "../Model";
import api from "./placeholderApi";

export class CommentServices {
  static getAllComment = async (postId: number | undefined) => {
    const resp = await api
      .get<commentType[]>("/comments", { params: { postId } })
      .catch(() => null);
    if (!resp) return null;
    return resp.data;
  };
}
