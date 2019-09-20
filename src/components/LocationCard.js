import React from "react";

export default function LocationCard(props) {
  const { name, type, dimension, residents } = props.data;
  return (
    <div>
      <p>
        {name} - {dimension}
      </p>
      <p>{type}</p>
      <p>Residents: {residents.length}</p>
    </div>
  );
}