import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import LocationList from './components/LocationsList';
import EpisodeList from './components/EpisodeList';

export default function App() {
  return (
    <main>
      <Header />
      <Route path="/" render={props => <TabNav {...props} />}/>
      <Route path="/homepage" component={WelcomePage}/>
      <Route path="/characters" component={CharacterList}/>
      <Route path="/locations" component={LocationList}/>
      <Route path="/episodes" component={EpisodeList}/>
    </main>
  );
}