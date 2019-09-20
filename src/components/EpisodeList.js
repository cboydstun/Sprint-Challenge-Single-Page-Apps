import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  const [currentPage, setCurrentPage] = useState(
    "https://rickandmortyapi.com/api/episode/"
  );
  const [episodeList, setEpisodeList] = useState(null);

  useEffect(() => {
    axios
      .get(`${currentPage}`)
      .then(res => setEpisodeList(res.data))
      .catch(err => console.error(err));
  }, [currentPage]);

  return (
    <section className="episode-list">
      {episodeList ? (
        episodeList.results.map(el => <EpisodeCard data={el} />)
      ) : (
        <h1>Loading Episodes....</h1>
      )}
      <button onClick={() => setCurrentPage(episodeList.info.prev)}>
        Prev Page
      </button>
      <button onClick={() => setCurrentPage(episodeList.info.next)}>
        Next Page
      </button>
    </section>
  );
}