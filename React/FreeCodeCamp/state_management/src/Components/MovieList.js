import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

export default function MovieList() {
  const [movies, setMovies] = useContext(MovieContext);
  return movies.map((movie) => (
    <Movie key={movie.key} name={movie.name} price={movie.price} />
  ));
}
