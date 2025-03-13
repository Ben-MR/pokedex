let pokemon = [];
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

function init() {
    fetchPokeData();
    
}

async function fetchPokeData() {
    let pokecard = document.getElementById("pokeContainer"); 
    let response = await fetch(BASE_URL);
    let responseAsJson = await response.json();
    console.log(responseAsJson.results);
    for (let index = 0; index < responseAsJson.results.length; index++) {
        pokecard.innerHTML += showPokeCard(responseAsJson.results[index], index);
    }
    
}




function formatName(inputName) {
    let toFixed = inputName.charAt(0).toUpperCase() + inputName.slice(1);
    return toFixed;
}