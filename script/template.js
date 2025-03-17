function showPokeCard(pokeData, index) {
    return `
            <div onclick="renderOverlay('${index}')" id="card-container">    
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

function showOverlay(index) {
    return `
    <div class="overlay-content-box" onclick="noBubbling(event)">
            <div class="overlay-number-name">
                <span class="poke-number" id="pokeNumber">#${pokemon[index].id}</span>
                <span class="poke-name" id="pokeName">${formatName(pokemon[index].name)}</span>
                <div></div>
            </div>
            <div style="background-color:green" class="overlaypicture-box">
                <img id="pokeImage" class="poke-image-overlay" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon[index].id}.svg" alt="">
            </div>
            <div id="" class="overlay-type-container">
                                        <div class="${pokemon[index].type1}"></div>
                        <div class="${pokemon[index].type2}"></div>             
            </div>
            <div class="overlay-stats-container">
                <div class="overlay-stats-categories">
                    <div class="overlay-stats-categories-name">
                        <span onclick="renderFiltered(1)">Allgemein</span>
                    </div>
                    <div class="overlay-stats-categories-border"></div>
                    <div class="overlay-stats-categories-name">
                        <span onclick="renderFiltered(2)">Statistiken</span>
                    </div>  
                    <div class="overlay-stats-categories-border"></div>       
                    <div class="overlay-stats-categories-name">
                        <span>Evolution</span>
                    </div>
                </div>

                <div id="overlayStats" class="overlay-stats">


                </div>




            </div>
    `
}

function showOverlayGeneralStats() {
    return `
            <div class="overlay-stats-general">
                <table class="overlay-stats-general-table">
                    <tr>
                        <th class="overlay-stats-general-table-row">Größe</th>
                        <th class="overlay-stats-general-table-row">: 0,7m</th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">Gewicht</th>
                        <th class="overlay-stats-general-table-row">: 6,9kg</th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">Farbe</th>
                        <th class="overlay-stats-general-table-row">: Grün</th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">Fähigkeiten</th>
                        <th class="overlay-stats-general-table-row">: Notdünger, Chlorophyll</th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">Ei-Gruppe</th>
                        <th class="overlay-stats-general-table-row">: Monster, Pflanzen</th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">EP bis Level 100</th>
                        <th class="overlay-stats-general-table-row">: 1.059.860</th>
                    </tr>
                </table>
            </div>  
    `
    
}

function showOverlayGeneralStats() {
    return `
                        <div class="overlay-stats-stats">
                        <table class="overlay-stats-stats-table">
                            <tr>
                                <th class="overlay-stats-general-table-row">HP</th>
                                <th class="overlay-stats-general-table-row">: ${pokemon[index].hp}</th>
                            </tr>
                            <tr>
                                <th class="overlay-stats-general-table-row">Angriff</th>
                                <th class="overlay-stats-general-table-row">: 49</th>
                            </tr>
                            <tr>
                                <th class="overlay-stats-general-table-row">Verteidigung</th>
                                <th class="overlay-stats-general-table-row">: 49</th>
                            </tr>
                            <tr>
                                <th class="overlay-stats-general-table-row">Spezial-Attacke</th>
                                <th class="overlay-stats-general-table-row">: 65</th>
                            </tr>
                            <tr>
                                <th class="overlay-stats-general-table-row">Spezial-Verteidigung</th>
                                <th class="overlay-stats-general-table-row">: 65</th>
                            </tr>
                            <tr>
                                <th class="overlay-stats-general-table-row">Geschwindigkeit</th>
                                <th class="overlay-stats-general-table-row">: 45</th>
                            </tr>
                        </table>
                    </div>
    
    `
}