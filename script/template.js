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
                    <div id="overlayStatsContainer" class="overlay-stats-container">
                <div class="overlay-stats-categories">
                    <div id="categorieGeneral" class="overlay-stats-categories-name active-tab">
                        <span onclick="renderStats('${index}', 'general')">Allgemein</span>
                    </div>
                    <div class="overlay-stats-categories-border"></div>
                    <div id="categorieStats" class="overlay-stats-categories-name">
                        <span onclick="renderStats('${index}', 'stats')">Statistiken</span>
                    </div>  
                    <div class="overlay-stats-categories-border"></div>       
                    <div id="categorieEvolution" class="overlay-stats-categories-name">
                        <span onclick="renderStats('${index}', 'evolution'), renderOverlayEvolution('${index}')">Evolution</span>
                    </div>
                </div>
                <div id="overlayStats" class="overlay-stats"></div>
                <div class="container-arrows-right-left">
                    <img id="previousButton" onclick="previous('${index}')" class="arrows-left" src="./assets/image/arrow-left.png" alt="">
                    <img onclick="next('${index}')" class="arrows-right" src="./assets/image/arrow-right.png"" alt="">
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
                        <th>:<progress class="progress-bar" value="${pokemon[index].hp}" max="255" style="--value: ${pokemon[index].hp}; --max: 255;"></progress></th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">Angriff</th>
                        <th>:<progress class="progress-bar" value="${pokemon[index].attack}" max="190" style="--value: ${pokemon[index].attack}; --max: 190;"></progress></th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">Verteidigung</th>
                        <th>:<progress class="progress-bar" value="${pokemon[index].defense}" max="250" style="--value: ${pokemon[index].defense}; --max: 250;"></progress></th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">Spezial-Attacke</th>
                        <th>:<progress class="progress-bar" value="${pokemon[index].special_attack}" max="194" style="--value: ${pokemon[index].special_attack}; --max: 194;"></progress></th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">Spezial-Verteidigung</th>
                        <th>:<progress class="progress-bar" value="${pokemon[index].special_defense}" max="250" style="--value: ${pokemon[index].special_defense}; --max: 250;"></progress></th>
                    </tr>
                    <tr>
                        <th class="overlay-stats-general-table-row">Geschwindigkeit</th>
                        <th>:<progress class="progress-bar" value="${pokemon[index].speed}" max="200" style="--value: ${pokemon[index].speed}; --max: 200;"></progress></th>
                    </tr>
                </table>
            </div>
    
    `
}

function showOverlayEvolution(evolution1, evolution2, evolution3) {
    return `
            <div class="overlay-evolution">
                <img class="evolution-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution1}.png" alt="">
                ${evolution2 ? `
                <img class="overlay-evolution-arrow" src="./assets/image/arrow-right.png" alt="">
                <img class="evolution-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution2}.png" alt="">
                ` : ''}
                ${evolution3 ? `
                <img class="overlay-evolution-arrow" src="./assets/image/arrow-right.png" alt="">
                <img class="evolution-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution3}.png" alt="">}
                ` : ''}
            </div>        
            `
}