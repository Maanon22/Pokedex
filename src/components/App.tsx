import "../App.css";
import PokeCard from "./PokemonCard";
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
	const handleClickPrev = () => {
		if (index > 0) {
			setIndex(index - 1);
		}
	};

	const handleClickNext = () => {
		if (index < pokemonList.length - 1) {
			setIndex(index + 1);
		}
	};
	return (
		<div>
			<PokeCard pokemon={pokemonList[index]} />
			<p>{index}</p>
			{index > 0 && <button onClick={handleClickPrev}>Précédent</button>}
			{index <pokemonList.length -1 &&<button onClick={handleClickNext}>Suivant</button>}
		</div>
	);
}

export default App;
