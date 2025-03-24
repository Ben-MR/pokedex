async function renderPokedex(index) {
    let pokecard = document.getElementById("pokeContainer");  
    let response = await fetch(BASE_URL_SPECIES + (offset + index - offset + 1)); 
    let pokeData = await response.json();
    let response2 = await fetch(BASE_URL + (offset + index - offset + 1)); 
    let pokeData2 = await response2.json();  
    pokemon.push(
        {
            id : pokeData.id,
            name : pokeData.names[5].name,
            type1 : pokeData2.types[0].type.name,
            type2: pokeData2.types.length > 1 ? pokeData2.types[1].type.name : null,
            backgroundcolor: pokeData.color.name,
            evolutionChain : pokeData.evolution_chain.url,
            egg1: pokeData.egg_groups[0].name,
            egg2: pokeData.egg_groups.length > 1 ? pokeData.egg_groups[1].name :null,
            height: pokeData2.height,
            weight: pokeData2.weight,
            ability1: pokeData2.abilities[0].ability.name,
            ability2: pokeData2.abilities.length >1 ? pokeData2.abilities[1].ability.name :null,
            ability3: pokeData2.abilities.length >2 ? pokeData2.abilities[2].ability.name :null,
            base_experience: pokeData2.base_experience,
            hp: pokeData2.stats[0].base_stat,
            attack: pokeData2.stats[1].base_stat,
            defense: pokeData2.stats[2].base_stat,
            special_attack: pokeData2.stats[3].base_stat,
            special_defense: pokeData2.stats[4].base_stat,
            speed: pokeData2.stats[5].base_stat,
            })
        if (index < offset + 20) {
                pokecard.innerHTML += showPokeCard(pokeData, index);}   
}