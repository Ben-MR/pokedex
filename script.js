let pokemon = [];
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

function init() {
    fetchPokeData();
    
}

async function fetchPokeData() {
    
    let response = await fetch(BASE_URL);
    let responseAsJson = await response.json();
    console.log(responseAsJson);
    for (let index = 0; index < responseAsJson.results.length; index++) {
       await fetchPokeDetailData(index);
       
    }    
}

async function fetchPokeDetailData(index) {  
    let pokecard = document.getElementById("pokeContainer"); 
    pokecardDetail = await fetch(BASE_URL + (index + 1)) ;
    pokecardDetailAsJson = await pokecardDetail.json();
    pokecard.innerHTML += showPokeCard(pokecardDetailAsJson);  
    await new Promise(resolve => setTimeout(resolve, 100));  
    await fetchType(index);  
 } 
    

 async function fetchType(index) {
    let typeContainer = document.getElementById(`typeContainer-${index}`);

    if (!typeContainer) {
        console.error(`❌ Fehler: Element typeContainer-${index} existiert nicht!`);
        return;  // Funktion beenden, wenn das Element nicht existiert
    }

    let response = await fetch(BASE_URL + (index + 1));
    let pokeData = await response.json();

    console.log('Typenanzahl für Pokémon ' + (index + 1) + ': ' + pokeData.types.length);

    typeContainer.innerHTML = pokeData.types.map(typeInfo => 
        `<span>${typeInfo.type.name}</span>`
    ).join(", ");
}


function formatName(inputName) {
    let toFixed = inputName.charAt(0).toUpperCase() + inputName.slice(1);
    return toFixed;
}