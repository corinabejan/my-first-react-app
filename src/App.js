import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Pokemon from "./components/Pokemon/Pokemon";
import Title from "./components/Title";
import LikeCounter from './components/LikeCounter';
import LikeButton from './components/LikeButton';
import AwesomeAnimals from './components/AwesomeAnimals';
import ArticleList from './components/ArticleList';

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

function App() {
  return (
    <div className="App">
      <main className="container">
        <Title content="Some Simple Title" />
        <LikeCounter /> 
        <LikeButton />
        <AwesomeAnimals />
        <ArticleList />
        <div className="row">
          {all_pokemon.map((pokemon) => (
            <div className="col-md-6 col-lg-4">
              <Pokemon
                name={pokemon.name}
                weight={pokemon.weight}
                awesome={pokemon.awesome}
                terrifying={pokemon.terrifying}
                abilities={pokemon.abilities}
              />
            </div>
          ))}
        </div>
      </main>
      <header className="App-header">
        <p>Hello Codaisseur</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
