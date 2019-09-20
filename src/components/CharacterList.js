import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';

export default function CharacterList() {
  const [charList, setCharList] = useState();

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res =>{
        setCharList(res.data.results)
      })
      .catch(err => console.log('Error: ', err));

  }, []);

  if (!charList) {
    return <p>Loading data...</p>
  }

  return (
    <section className="character-list grid-view">
      {charList.map((char, index) => <CharacterCard char={char} key={index}/>)}
    </section>
  );
}