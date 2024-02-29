import { useEffect, useState } from "react";

function CelebCard({ name }) {
    const movies = name.movies

    const movieList = movies.map((movie, index) => <li key={index}>{movie}</li>)

    return (
    <article key={name.name}>
      <h2>{name.name}</h2>
      <ul>
        {movieList}
      </ul>
    </article>
    )
}

export default CelebCard