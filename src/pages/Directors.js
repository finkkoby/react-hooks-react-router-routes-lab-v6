import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import CelebCard from "../components/CelebCard";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/directors')
      .then(res => res.json())
      .then(list => setDirectors(list))
  }, [])

  const directorList = directors.map(director => <CelebCard key={director.name} name={director}/>)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorList}
      </main>
    </>
  );
};

export default Directors;
