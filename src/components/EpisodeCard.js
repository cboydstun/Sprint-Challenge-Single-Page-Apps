import React from "react";

export default function EpisodeCard(props) {
  const { name, episode, air_date, characters } = props.data;
  return (
    <div>
      <p>{name}</p>
      <p>{episode}</p>
      <p>Aired: {air_date}</p>
      <p>Total Characters: {characters.length}</p>
    </div>
  );
}