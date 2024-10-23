import "../App.css"
import PokeCard from "./PokemonCard"

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",
	},
];

function App(){
	return (
	<div>
	<PokeCard pokemon={pokemonList[0]}/>
	</div>
);
}

export default App;