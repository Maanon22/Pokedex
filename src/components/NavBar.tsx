interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	index: number;
	setIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function NavBar ({index,setIndex,pokemonList}: NavBarProps) {
    const handleClickPrev = () => {
					if (index > 0) {
						setIndex(index - 1);
					}
				};

				// Fonction pour aller à l'élément suivant
				const handleClickNext = () => {
					if (index < pokemonList.length - 1) {
						setIndex(index + 1);
					}
				};
				return (
					<div>
						{index > 0 && <button onClick={handleClickPrev}>Précédent</button>}
						{index < pokemonList.length - 1 && (
							<button onClick={handleClickNext}>Suivant</button>
						)}
					</div>
				);
}

export default NavBar;
