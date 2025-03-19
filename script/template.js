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
                <div style="background-color:${pokemon[index].backgroundcolor}" class="overlaypicture-box">
                    <img id="pokeImage" class="poke-image-overlay" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon[index].id}.svg" alt="">
                </div>
                <div id="" class="overlay-type-container">
                    <div class="${pokemon[index].type1}"></div>
                    <div class="${pokemon[index].type2}"></div>             
                </div>
                <div id="overlayStatsContainer" class="overlay-stats-container">
                    <div class="overlay-stats-categories">
                        <div id="categorieGeneral" class="overlay-stats-categories-name active-tab">
                            <span onclick="renderGeneral('${index}')">Allgemein</span>
                        </div>
                        <div class="overlay-stats-categories-border"></div>
                        <div id="categorieStats" class="overlay-stats-categories-name">
                            <span onclick="renderStats('${index}')">Statistiken</span>
                        </div>  
                        <div class="overlay-stats-categories-border"></div>       
                        <div id="categorieEvolution" class="overlay-stats-categories-name">
                            <span onclick="renderEvolution('${index}')">Evolution</span>
                        </div>
                    </div>
                <div id="overlayStats" class="overlay-stats"></div>
                <div class="container-arrows-right-left">
                    <img onclick="previous('${index}')" class="arrows-right-left" src="./assets/image/arrow-left.png" alt="">
                    <img onclick="next('${index}')" class="arrows-right-left" src="./assets/image/arrow-right.png"" alt="">
                </div>
            </div>
            `
}

function showOverlayGeneral(index) {
    return `
            <div class="overlay-stats-general">
                <table class="overlay-stats-general-table">
                    <tr>
                        <th class="overlay-stats-general-table-row">Größe</th>
                        <th class="overlay-stats-general-table-row">: ${formatNumbers(pokemon[index].height)}m</th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">Gewicht</th>
                        <th class="overlay-stats-general-table-row">: ${formatNumbers(pokemon[index].weight)}kg</th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">Farbe</th>
                        <th class="overlay-stats-general-table-row">: ${formatName(pokemon[index].backgroundcolor)}</th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">Fähigkeiten</th>
                        <th class="overlay-stats-general-table-row">: ${formatName(pokemon[index].ability1)}${pokemon[index].ability2 ? `, ${formatName(pokemon[index].ability2)}${pokemon[index].ability3 ? `, ${formatName(pokemon[index].ability3)}` : ""}` : ""}</th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">Ei-Gruppe</th>
                        <th class="overlay-stats-general-table-row">: ${formatName(pokemon[index].egg1)}${pokemon[index].egg2 ? `, ${formatName(pokemon[index].egg2)}` : ""}</th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">Basis Erfahrung</th>
                        <th class="overlay-stats-general-table-row">: ${pokemon[index].base_experience}</th>
                    </tr>
                </table>
            </div>  
    `    
}

function showOverlayStats(index) {
    return `
            <div class="overlay-stats-stats">
                <table class="overlay-stats-stats-table">
                    <tr>
                        <th class="overlay-stats-general-table-row">HP</th>
                        <th class="overlay-stats-general-table-row">: ${pokemon[index].hp}</th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">Angriff</th>
                        <th class="overlay-stats-general-table-row">: ${pokemon[index].attack}</th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">Verteidigung</th>
                        <th class="overlay-stats-general-table-row">: ${pokemon[index].defense}</th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">Spezial-Attacke</th>
                        <th class="overlay-stats-general-table-row">: ${pokemon[index].special_attack}</th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">Spezial-Verteidigung</th>
                        <th class="overlay-stats-general-table-row">: ${pokemon[index].special_defense}</th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">Geschwindigkeit</th>
                        <th class="overlay-stats-general-table-row">: ${pokemon[index].speed}</th>
                    </tr>
                </table>
            </div>
    
    `
}

function showOverlayEvolution(index) {
    return `
            <div class="overlay-evolution">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon[index].id}.png" alt="">
                <img class="overlay-evolution-arrow" src="./assets/image/arrow-right.png" alt="">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon[index].id + 1}.png" alt="">
                <img class="overlay-evolution-arrow" src="./assets/image/arrow-right.png" alt="">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon[index].id + 2}.png" alt="">
            </div>        
            `
}