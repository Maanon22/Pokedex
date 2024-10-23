interface pokemonListProps{
    pokemon:{
        name:string;
        imgSrc?:string
    }
}

function PokeCard ({pokemon}: pokemonListProps) { 
    //const pokemon={name:"mew"};
    //console.log(props)
    return(
<figure>
{pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name}/>):(<p>???</p>)}
<figcaption>{pokemon.name}</figcaption>
</figure>
        );
}

export default PokeCard;