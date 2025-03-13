function showPokeCard(pokemon, index) {
    return `
            <div id="card-container">    
                <div class="card-container">
                    <div class="number-name">
                        <span class="poke-number" id="pokeNumber">#${index + 1}</span>
                        <span class="poke-name" id="pokeName">${formatName(pokemon.name)}</span>
                        <div></div>
                    </div>
                    <div class="container-poke-image">
                        <img id="pokeImage" class="poke-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="">
                    </div>
                    <div class="typ-container">
                        <img class="image-typ" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-and-shining-pearl/12.png" alt="">
                        <img class="image-typ" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-and-shining-pearl/12.png" alt="">
                    </div>
                </div>
            </div>  
            `
}