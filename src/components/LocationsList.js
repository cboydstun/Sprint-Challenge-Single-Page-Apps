import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
  const [locationList, setLocationList] = useState();

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location/')
      .then(res =>{
        setLocationList(res.data.results)
      })
      .catch(err => console.log('Error: ', err));
  }, []);

  if (!locationList) {
    return <p>Loading data...</p>
  }

  return (
    <section className="location-list grid-view">
      {locationList.map((location, index) => <LocationCard location={location} key={index}/>)}
    </section>
  );
}