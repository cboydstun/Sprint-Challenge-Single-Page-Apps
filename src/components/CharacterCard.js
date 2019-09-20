import React from "react";
import { Icon } from 'semantic-ui-react'

export default function CharacterCard(props) {
  const { image, name, location, species, status, origin } = props.char
  
  return (
    <div className="card">
      <img src={image} alt={name}/>
      <div className="card-text">
        <h2>{name}</h2>
        <p className="status">{species} {status}</p>
        <div className="locations">
          <p>Location: {location.name}</p>
          <p>Origin: {origin.name}</p>
        </div>
      </div>
      <div className="episode">
        <Icon name='user' size='large' />
        <h2>Episodes</h2>
      </div>
    </div>
  )
}