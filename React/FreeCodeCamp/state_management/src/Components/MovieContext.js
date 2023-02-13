import React, { useState, createContext } from "react";
import MovieList from "./MovieList";
import Nav from "./Nav";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = React.useState([
    {
      name: "Harry Potter",
      price: "23$",
      id: 101,
    },
    {
      name: "Game Of Thrones",
      price: "30$",
      id: 102,
    },
    {
      name: "Inception",
      price: "20$",
      id: 103,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
