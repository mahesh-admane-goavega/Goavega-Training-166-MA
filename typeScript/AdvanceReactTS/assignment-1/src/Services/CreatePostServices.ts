import { useSnapshot } from "valtio";
import { postType } from "../Model";
import { postStore } from "../Store";
// import url from "./placeholderApi";

import url from "./postJsonPlaceHolder";

export class CreatePostServices {
  static createPost = async (data: postType) => {
    const resp = await url.post<postType>("/posts", data).catch(() => null);
    if (!resp) return null;
    console.log("Services Response", resp.data);
    return resp.data;
  };
}
