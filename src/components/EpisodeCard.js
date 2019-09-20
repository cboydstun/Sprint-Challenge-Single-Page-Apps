import React from "react";

export default function EpisodeCard(props) {
  const { name, episode, air_date, characters } = props.episode;
  return (
    <div className="location-card">
      <h2>{name}</h2>
      <h3>{episode}</h3>
      <h3>Aired: {air_date}</h3>
      <h3>{characters.length} Characters in episode.</h3>
    </div>
  )
}