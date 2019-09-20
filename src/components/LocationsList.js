import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
  const [currentPage, setCurrentPage] = useState(
    "https://rickandmortyapi.com/api/location/"
  );
  const [locationList, setLocationList] = useState(null);

  useEffect(() => {
    axios
      .get(`${currentPage}`)
      .then(res => setLocationList(res.data))
      .catch(err => console.error(err));
  }, [currentPage]);

  return (
    <section className="location-list">
      {locationList ? (
        locationList.results.map(el => <LocationCard data={el} />)
      ) : (
        <h1>Loading Locations....</h1>
      )}
      <button onClick={() => setCurrentPage(locationList.info.prev)}>
        Prev Page
      </button>
      <button onClick={() => setCurrentPage(locationList.info.next)}>
        Next Page
      </button>
    </section>
  );
}