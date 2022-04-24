import React, { useState } from "react";
import { useQuery } from "react-query";
import { Character } from "./Character";

export default function Characters() {
  const [page, setPage] = useState(42);

  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  const { data, status } = useQuery(["characters", page], fetchCharacters, {keepPreviousData: true});

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Uh No Erro...</div>;
  }

  console.log(data);
  return (
    <div className="characters">
      {data.results.map((character) => (
        <Character character={character} />
      ))}
      <div>
      <button disabled={page === 1} onClick={() => setPage(page -1)} >Prev</button>
      <button disabled={!data.info.next} onClick={() => setPage(page + 1)}>Next</button>
    </div>
    </div>
  );
}
