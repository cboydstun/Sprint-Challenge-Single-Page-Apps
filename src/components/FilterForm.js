import React from "react";

function FilterForm({ characterList, setCharacterArr }) {
  const handleChange = e => {
    let filteredArr = characterList.results.filter(char =>
      char.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCharacterArr(filteredArr);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        name="search"
        placeholder="Filter by name"
      />
    </div>
  );
}

export default FilterForm;