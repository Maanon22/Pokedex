interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	index: number;
	setIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function NavBar ({pokemonList, setIndex}: NavBarProps) {
				return (
					<div>
              {pokemonList.map((pokemon, idx) => <button onClick={() => setIndex(idx)}
              type="button" key={pokemon.name}>{pokemon.name}</button>)}
					</div>
				);
}

export default NavBar;
