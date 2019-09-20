import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodesList() {
  const [episodeList, setEpisodeList] = useState();

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
      .then(res =>{
        setEpisodeList(res.data.results)
      })
      .catch(err => console.log('Error: ', err));
  }, []);

  if (!episodeList) {
    return <p>Loading data...</p>
  }

  return (
    <section className="location-list grid-view">
      {episodeList.map((episode, index) => <EpisodeCard episode={episode} key={index}/>)}
    </section>
  );
}