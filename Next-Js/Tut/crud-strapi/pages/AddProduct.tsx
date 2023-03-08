import axios from "axios";
import React, { useState } from "react";

type Props = {};

const AddProduct = (props: Props) => {
  const [formData, setFormData] = useState({
    Title: "",
    Price: "",
    Description: "",
  });

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      Title: title,
      Price: price,
      Description: description,
    };
    try {
      const response = await axios.post("http://127.0.0.1:1337/api/products", {
        data: {
          Title: title,
          Price: price,
          Description: description,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    console.log(data);
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

export default AddProduct;
