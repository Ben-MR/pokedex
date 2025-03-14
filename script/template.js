function showPokeCard(pokeData, index) {
    return `
            <div id="card-container">    
                <div class="card-container">
                    <div class="number-name">
                        <span class="poke-number" id="pokeNumber">#${pokemon[index].id}</span>
                        <span class="poke-name" id="pokeName">${formatName(pokemon[index].name)}</span>
                        <div></div>
                    </div>
                    <div style="background-color:${pokemon[index].backgroundcolor}" class="container-poke-image">
                        <img id="pokeImage" class="poke-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeData.id}.svg" alt="">
                    </div>
                    <div id="typeContainer-${index}" class="type-container">
                        <div class="${pokemon[index].type1}"></div>
                                    <div class="${pokemon[index].type2}"></div>
                       
                    </div>
                </div>
            </div>  
            `
}