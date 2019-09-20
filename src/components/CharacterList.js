import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import FilterForm from "./FilterForm";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [currentPage, setCurrentPage] = useState(
    "https://rickandmortyapi.com/api/character/"
  );
  const [characterList, setCharacterList] = useState(null);
  const [characterArr, setCharacterArr] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`${currentPage}`)
      .then(res => {
        setCharacterList(res.data);
        setCharacterArr(res.data.results);
      })
      .catch(err => console.error(err));
  }, [currentPage]);

  return (
    <List className="classes.root">
      <FilterForm
        characterList={characterList}
        setCharacterArr={setCharacterArr}
      />
      {characterArr ? (
        characterArr.map(el => <CharacterCard data={el} />)
      ) : (
        <h1>Loading Characters....</h1>
      )}
      <button onClick={() => setCurrentPage(characterList.info.prev)}>
        Prev Page
      </button>
      <button onClick={() => setCurrentPage(characterList.info.next)}>
        Next Page
      </button>
    </List>
  );
}