import logo from "./logo.svg";
import "./App.css";
import MovieList from "./Components/MovieList";
import Nav from "./Components/Nav";
import { MovieProvider } from "./Components/MovieContext";
import { Addmovies } from "./Components/Addmovies";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <Addmovies />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
