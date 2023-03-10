import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";

type Props = {};

var isRedirect = false;
const AddProduct = (props: Props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted");

    try {
      const response = await axios.post<any>("/api/products", {
        data: {
          Title: title,
          Price: price,
          Description: description,
        },
      });
      console.log("ApI Response", response.data);
    } catch (error) {
      console.log(error);
    }
    isRedirect = true;
  };

  if (isRedirect) {
    useEffect(() => {
      router.push("/Products");
    }, []);
  }
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

export default AddProduct;
