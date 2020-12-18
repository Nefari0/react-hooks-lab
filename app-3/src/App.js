import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import PokemonList from './components/PokemonList';
import routes from './components/routes'


function App() {
  return (
    <div className="App">
      <h1>Brittany's Favorite Anime Site</h1>
      {routes}
    </div>
  );
}

export default App;
