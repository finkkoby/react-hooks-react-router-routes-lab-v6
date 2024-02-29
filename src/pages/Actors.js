import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import CelebCard from "../components/CelebCard";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/actors')
      .then(res => res.json())
      .then(list => setActors(list))
  }, [])

  const actorList = actors.map(actor => <CelebCard key={actor.name} name={actor} />)

  return (
    <>
      <header>
      <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorList}
      </main>
    </>
  )
};

export default Actors;
