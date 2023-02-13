import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

export const Addmovies = () => {
  const [movies, setMovies] = useContext(MovieContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovies = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
  };

  return (
    <form onSubmit={addMovies}>
      <input
        name="name"
        type="text"
        value={name}
        placeholder="Movie Name"
        onChange={updateName}
      />
      <input
        name="price"
        type="text"
        value={price}
        placeholder="Movie price"
        onChange={updatePrice}
      />
      <button>Submit</button>
    </form>
  );
};
