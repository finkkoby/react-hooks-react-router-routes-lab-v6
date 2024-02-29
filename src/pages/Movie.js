import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [featMovie, setFeatMovie] = useState({})
  const [genres, setGenres] = useState([])

  const params = useParams()
  const movieId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then(res => res.json())
      .then(movie => {
        setFeatMovie(movie)
        setGenres(movie.genres)
      })
  }, [])

  const genreList = genres.map((genre, index) => <span key={index}>{genre}</span>)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{featMovie.title}</h1>
        <p>{featMovie.time} minutes</p>
        {genreList}
      </main>
    </>
  );
};

export default Movie;
