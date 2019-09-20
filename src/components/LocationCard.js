import React from "react";

export default function LocationCard(props) {
  const { name, type, dimension, residents } = props.location;
  return (
    <div className="location-card">
      <h2>{name}</h2>
      <h3>{type} - {dimension}</h3>
      <h3>{residents.length} Residents</h3>
    </div>
  )
}