function PokeCard({pokemon}) { 
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