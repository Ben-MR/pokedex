let pokemon = [];
let evolutionData = [];
let allNames = [];
let offset = 0; 
let limit = 20;
let visiblePokemonCount = 20; 
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const BASE_URL_SPECIES = "https://pokeapi.co/api/v2/pokemon-species/"

window.onload = function () {
    pokeSearch();
    
}

async function init() {
    try{
    reStart()
    OverlaySpinner();
    
    await fetchPokeDataComplete();    
    OverlaySpinner();
    LoadMoreOn ();
    }
    catch(error){
        let loadFailutre = document.getElementById('loadingFailure')
        setTimeout(() => loadFailutre.innerHTML = 'Fehler beim Laden!<br> Versuche es später nochmal', 500);           
        OverlaySpinner();
    } 
}

function reStart() {
    pokemon = [];
    let pokecard = document.getElementById("pokeContainer");
    pokecard.innerHTML = ""; 
    document.getElementById('searchField').value = "";
}

function pokeSearch() {
    const searchInput = document.getElementById('searchField');
    const value = searchInput.value;
    search(value);    
}

function search(value) {
    if (value == "") {
        pokemon = []; 
        document.getElementById('pokeContainer').innerHTML = ""
        document.getElementById('backButtonContainer').classList.add('d-none');        
        init();
        return
    }   
    const pokemonResult = pokemon.filter(result => {
        return result.name.toLowerCase().includes(value.toLowerCase()) || result.id == value;     
    });    
    renderSearchResults(pokemonResult);   
}

function renderSearchResults(pokemonResult) {
    let pokecard = document.getElementById("pokeContainer");
    pokecard.innerHTML = ""; 
    pokemon = pokemonResult;  
    for (let index = 0; index < pokemon.length; index++) {
        pokecard.innerHTML += showPokeCard(pokemon[index], index);
    }    
    document.getElementById('loadMoreContainer').classList.add('d-none');
    document.getElementById('backButtonContainer').classList.remove('d-none');
}

function backButton() {
    pokemon = [];
    document.getElementById("pokeContainer").innerHTML = "";
    document.getElementById('searchField').value = "";
    init();
    document.getElementById('backButtonContainer').classList.add('d-none');
}

async function fetchPokeDataComplete() {    
    let responseSpecies = await fetch(`${BASE_URL}?limit=20&offset=${offset}`);
    let responseAsJsonSpecies = await responseSpecies.json();        
    for (let index = offset; index < responseAsJsonSpecies.results.length + offset; index++) {        
        await renderPokedex(index);
    }
}

async function renderStats(index, type) {
    let pokecard = document.getElementById("overlayStats");  
    pokecard.innerHTML = "";  
    if (type === 'general'){
        pokecard.innerHTML = showOverlayGeneral(index);
        setActiveTab("categorieGeneral");
    }if (type === 'stats'){
        pokecard.innerHTML = showOverlayStats(index);
        setActiveTab("categorieStats");
    }if (type === 'evolution'){
        pokecard.innerHTML = showOverlayEvolution(index);
        setActiveTab("categorieEvolution");
    }
}

function setActiveTab(activeId) {
    document.querySelectorAll(".overlay-stats-categories-name").forEach(tab => tab.classList.remove("active-tab"));
    document.getElementById(activeId).classList.add("active-tab");
}

function renderOverlay(index) {
    let overlay = document.getElementById('overlay');
    overlay.innerHTML = showOverlay(index);
    overlay.classList.remove('d-none');
    let pokecard = document.getElementById("overlayStats");  
    pokecard.innerHTML = showOverlayGeneral(index);
    document.body.classList.add("no-scroll");
}   

function formatName(inputName) {
    let toFixed = inputName.charAt(0).toUpperCase() + inputName.slice(1);
    return toFixed;
}

function formatNumbers(inputNumber) {
    let toFixed = inputNumber / 10;
    let replace = toFixed.toString().replace(".",",");
    return replace;
}

async function loadMore() {
    offset = offset + 20;
    OverlaySpinner();
    await fetchPokeDataComplete();   
    OverlaySpinner();
}

function LoadMoreOn () {
    let spinner = document.getElementById('loadMoreContainer');
    setTimeout(function() {
        spinner.classList.toggle("d-none");
    }, 500);        
}

function OverlaySpinner(){
    let spinner = document.getElementById('loadingImageContainer');
    spinner.classList.toggle("d-none");
}

function noBubbling(event) {
    event.stopPropagation();
}    

function toggleOverlay() {
    let overlayRef = document.getElementById('overlay')
    overlayRef.classList.toggle('d-none');  
    document.body.classList.remove("no-scroll");
}

async function next(currentIndex) {
    currentIndex = Number(currentIndex);  
    currentIndex = (currentIndex + 1) % pokemon.length;;
    if (currentIndex + 1 > visiblePokemonCount) {
        try {
            await loadMore();
        } catch (error) {        
        }   
        setTimeout(function() {
            renderOverlay(currentIndex);;
        }, 500)             
    }
    await renderOverlay(currentIndex);
}

async function previous(currentIndex) {
    currentIndex = Number(currentIndex);  
    currentIndex = (currentIndex - 1 + pokemon.length) % pokemon.length;
    await renderOverlay(currentIndex);
}

function renderOverlayEvolution(index){
    let pokecard = document.getElementById("overlayStats");  
    pokecard.innerHTML = "";  
    const value = pokemon[index].evolutionChain
    const pokemonEvolution = pokemon.filter(result => {
    return result.evolutionChain == value;
    })
    for (let evolutionIndex = 0; evolutionIndex < pokemonEvolution.length; evolutionIndex++) {
        let evolution1 = pokemonEvolution[0]?.id || null;  
        let evolution2 = pokemonEvolution[1]?.id || null;  
        let evolution3 = pokemonEvolution[2]?.id || null;  
        pokecard.innerHTML = showOverlayEvolution(evolution1, evolution2, evolution3);
        setActiveTab("categorieEvolution");
        }  
}


