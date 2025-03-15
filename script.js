let pokemon = [];
let offset = 0; 
let limit = 20;
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const BASE_URL_SPECIES = "https://pokeapi.co/api/v2/pokemon-species/"

function init() {
    fetchPokeDataSpecies()
}

async function init2() {


    try{
    await fetchPokeDataSpecies();
    OverlaySpinnerOff();
    }
    catch(error){
        document.getElementById('loadingFailure').innerHTML = 'Fehler beim Laden!';
    }
    console.log('juhu');
}



async function fetchPokeDataSpecies() {
    
    let responseSpecies = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
    let responseAsJsonSpecies = await responseSpecies.json();  
    console.log(responseAsJsonSpecies);
       
    for (let index = 0; index < responseAsJsonSpecies.results.length; index++) {
        await renderPokedex(index);}
}

async function renderPokedex(index) {
    let pokecard = document.getElementById("pokeContainer");     
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
    pokecard.innerHTML += showPokeCard(pokeData, index);      
}     
 


function formatName(inputName) {
    let toFixed = inputName.charAt(0).toUpperCase() + inputName.slice(1);
    return toFixed;
}

async function loadMore() {
    offset = offset + 20;	
    let pokecard = document.getElementById("pokeContainer"); 
    let responseSpecies = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
    let responseAsJsonSpecies = await responseSpecies.json();  
    console.log(responseAsJsonSpecies);
       
    for (let index = 0; index < responseAsJsonSpecies.results.length; index++) {
        let response = await fetch(BASE_URL_SPECIES + (offset + index + 1)); 
        let pokeData = await response.json();
        let response2 = await fetch(BASE_URL + (offset + index + 1)); 
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
        pokecard.innerHTML += showPokeCard(pokeData, offset + index);      
    }   
   
}   

function OverlaySpinnerOff() {
    let spinner = document.getElementById('loadingImageContainer');
    spinner.classList.add("d-none");
}
    
