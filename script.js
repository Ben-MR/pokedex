let pokemon = [];
let pokemonSearch = [];
let evolutionData = [];
let allNames = [];
let offset = 0; 
let limit = 20;
let visiblePokemonCount = 20; 
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const BASE_URL_SPECIES = "https://pokeapi.co/api/v2/pokemon-species/"

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

function siteReload() {
    location.reload();
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
        backButton();      
        return
    }   
    const pokemonResult = pokemon.filter(result => {
        return result.name.toLowerCase().includes(value.toLowerCase()) || result.id == value;});       
    pokemonSearch = pokemonResult;
    if (pokemonResult.length == 0) {
        noResult();      
    }else
    renderSearchResults();  
}

function noResult() {
    let noResult = document.getElementById('pokeContainer');
    noResult.innerHTML = showNoResult();
    document.getElementById('loadMoreContainer').classList.add('d-none');
}

function renderSearchResults() {
    let pokecard = document.getElementById("pokeContainer");
    pokecard.innerHTML = "";     
    for (let index = 0; index < pokemonSearch.length; index++) {
        pokecard.innerHTML += showPokeCard(pokemonSearch[index], index);
    }    
    document.getElementById('loadMoreContainer').classList.add('d-none');
    document.getElementById('backButtonContainer').classList.remove('d-none');
}

function backButton() {
    document.getElementById("pokeContainer").innerHTML = "";
    document.getElementById('searchField').value = "";
    pokemonSearch = [];
    for (let index = 0; index < pokemon.length; index++) {
        document.getElementById("pokeContainer").innerHTML += showPokeCard(pokemon[index], index);
    }
    document.getElementById('backButtonContainer').classList.add('d-none');
    document.getElementById('loadMoreContainer').classList.remove('d-none');
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

function showSearchOverlay(index) {
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
    let button = document.getElementById('loadMoreContainer'); 
    button.disabled = true;
    offset = offset + 20;
    OverlaySpinner();
    await fetchPokeDataComplete();   
    OverlaySpinner();
    button.disabled = false; 
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

function renderOverlayEvolution(index) {
    let pokecard = document.getElementById("overlayStats");
    pokecard.innerHTML = "";
    let data = pokemonSearch.length > 0 ? pokemonSearch : pokemon;
    let selectedPokemon = data[index];
    let evolutionPokemon = pokemon.filter(p => p.evolutionChain === selectedPokemon.evolutionChain);
    if (evolutionPokemon.length === 1) {
        evolutionPokemon = pokemon.filter(p => p.evolutionChain.includes(selectedPokemon.evolutionChain));
    }
    let evolution1 = evolutionPokemon[0]?.id || null;
    let evolution2 = evolutionPokemon[1]?.id || null;
    let evolution3 = evolutionPokemon[2]?.id || null;
    pokecard.innerHTML = showOverlayEvolution(evolution1, evolution2, evolution3);
    setActiveTab("categorieEvolution");
}


