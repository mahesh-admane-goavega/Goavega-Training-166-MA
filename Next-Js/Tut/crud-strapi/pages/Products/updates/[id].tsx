import AddProduct from "@/pages/AddProduct";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

const updateProduct = (props: Props) => {
  const router = useRouter();
  console.log(router.query.id);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="m-5" onSubmit={handleSubmit}>
      <div className="form-group mt-3">
        <label htmlFor="exampleInputEmail1"> Title</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Product Title"
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
        ></input>
      </div>
      <div className="form-group mt-3">
        <label htmlFor="exampleInputPassword1"> Product Price</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter Product Price"
          value={price}
          onChange={(e: any) => setPrice(e.target.value)}
        ></input>
      </div>
      <div className="form-group mt-3">
        <label htmlFor="exampleInputPassword1">Product Description</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter Product Description"
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
        ></input>
      </div>

      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

export default updateProduct;
