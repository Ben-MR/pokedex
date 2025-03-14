let pokemon = [];
let offset = 0; 
let limit = 20;
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const BASE_URL_SPECIES = "https://pokeapi.co/api/v2/pokemon-species/"

const test_url = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=40"

function init() {
    fetchPokeDataSpecies()
}



async function fetchPokeDataSpecies() {
    let pokecard = document.getElementById("pokeContainer"); 
    let responseSpecies = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
    let responseAsJsonSpecies = await responseSpecies.json();  
    console.log(responseSpecies);
       
    for (let index = 0; index < responseAsJsonSpecies.results.length; index++) {
        let response = await fetch(BASE_URL_SPECIES + (index + 1)); 
        let pokeData = await response.json();  
        let response2 = await fetch(BASE_URL + (index + 1)); 
        let pokeData2 = await response2.json();
        pokemon.push(
            {
                id : pokeData.id,
                name : pokeData.names[5].name,
                type1 : pokeData2.types[0].type.name,
                type2: pokeData2.types.length > 1 ? pokeData2.types[1].type.name : null,
                backgroundcolor: pokeData.color.name
            }
        )
        setTimeout(function(){
            pokecard.innerHTML += showPokeCard(pokeData, index);
        }, 1000);
                
    }   
    console.log(pokemon);
}   


function formatName(inputName) {
    let toFixed = inputName.charAt(0).toUpperCase() + inputName.slice(1);
    return toFixed;
}

async function test() {
    offset = offset + 20; // Erhöhe das Offset
    await fetchPokeDataSpecies();
}

    
