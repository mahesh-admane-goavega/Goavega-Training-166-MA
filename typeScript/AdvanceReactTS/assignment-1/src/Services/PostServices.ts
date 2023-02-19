import { postType } from "../Model";
import api from "./placeholderApi";

export class PostServices {
  static getPost = async (userId: number | undefined) => {
    const post = await api.get<postType[]>("/posts", { params: { userId } });
    return post.data;
  };
}
