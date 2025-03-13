function showPokeCard(pokemon, index) {
    return `
            <div id="card-container">    
                <div class="card-container">
                    <div class="number-name">
                        <span class="poke-number" id="pokeNumber">#${pokemon.id}</span>
                        <span class="poke-name" id="pokeName">${formatName(pokemon.name)}</span>
                        <div></div>
                    </div>
                    <div class="container-poke-image">
                        <img id="pokeImage" class="poke-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg" alt="">
                    </div>
                    <div id="typeContainer-${index}" class="type-container">
                        
                       
                    </div>
                </div>
            </div>  
            `
}