import "../App.css";
import PokeCard from "./PokemonCard";
import NavBar from "./NavBar.tsx"
import { useState } from "react";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
	},
];

function App() {
	const [index, setIndex] = useState(0);
	return (
		<div>
			<PokeCard pokemon={pokemonList[index]} />
			<p>{index}</p>
			<NavBar index={index} setIndex={setIndex} pokemonList={pokemonList} />
		</div>
	);
}

export default App;
