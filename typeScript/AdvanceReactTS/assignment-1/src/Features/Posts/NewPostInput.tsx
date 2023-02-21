import React from "react";
import { useSnapshot } from "valtio";
import { PostManager } from "../../Managers/PostManager";
import { newPostStore } from "../../Store";

// type Props = {};

export const NewPostInput = () => {
  const [nid, setId] = React.useState<string>();
  const [ntitle, setTitle] = React.useState<string>();
  const [nbody, setBody] = React.useState<string>();

  const addPost = (e: any) => {
    e.preventDefault();

    let data = {
      id: Number(nid),
      title: String(ntitle),
      body: String(nbody),
    };
    newPostStore.post = data;
    PostManager.addPost(data);
  };
  return (
    <form>
      <div className="form-group  mt-4">
        <h4 className="m-4">Add New Post Here</h4>
        <input
          placeholder="Enter Post Id"
          className="form-control mt-4"
          type={"number"}
          name="new_post_id"
          id="new_post_id"
          value={nid}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <h1></h1>
        <input
          placeholder="Enter Post Title"
          className="form-control mt-4"
          type={"text"}
          id="new_post_title"
          value={ntitle}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          placeholder="Enter Post Body"
          className="form-control mt-4"
          type={"text"}
          id="new_post_body"
          value={nbody}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <button
          onClick={(e: React.MouseEvent<HTMLElement>) => addPost(e)}
          className="btn btn-primary mt-4"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
