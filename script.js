let pokemon = [];
let offset = 0; 
let limit = 20;
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const BASE_URL_SPECIES = "https://pokeapi.co/api/v2/pokemon-species/"

async function init() {


    try{
    OverlaySpinnerOn();
    await fetchPokeDataSpecies();
    OverlaySpinnerOff();
    LoadMoreOn ();
    }
    catch(error){
        let loadFailutre = document.getElementById('loadingFailure')
        setTimeout(function() {
            loadFailutre.innerHTML = 'Fehler beim Laden!<br> Versuche es später nochmal';
        }, 500);            
        OverlaySpinnerOff();
    }
    console.log('juhu');
    
}



async function fetchPokeDataSpecies() {
    
    let responseSpecies = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
    let responseAsJsonSpecies = await responseSpecies.json();  
    console.log(responseAsJsonSpecies);
       
    for (let index = offset; index < responseAsJsonSpecies.results.length + offset; index++) {
        await renderPokedex(index);}
}

async function renderPokedex(index) {
    let pokecard = document.getElementById("pokeContainer");     
    let response = await fetch(BASE_URL_SPECIES + (offset + index - offset + 1)); 
    let pokeData = await response.json();
    let response2 = await fetch(BASE_URL + (offset + index - offset + 1)); 
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
        setTimeout(function() {
            pokecard.innerHTML += showPokeCard(pokeData, index);
        }, 500);    
}     


function formatName(inputName) {
    let toFixed = inputName.charAt(0).toUpperCase() + inputName.slice(1);
    return toFixed;
}

async function loadMore() {
    offset = offset + 20;	
    init()   
}   

function LoadMoreOn () {
    let spinner = document.getElementById('loadMoreContainer');
    setTimeout(function() {
        spinner.classList.remove("d-none");
    }, 500);        
}

function OverlaySpinnerOn(){
    let spinner = document.getElementById('loadingImageContainer');
    spinner.classList.remove("d-none");
}

function OverlaySpinnerOff() {
    let spinner = document.getElementById('loadingImageContainer');
    setTimeout(function() {
        spinner.classList.add("d-none");
    }, 500);    
}
    
