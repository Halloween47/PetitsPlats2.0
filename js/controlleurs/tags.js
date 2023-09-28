// Recuperation du Modele
import { RecipesService } from "../service/searchService";
import { afficheLeTag, lanceLaRechercheEtFaitLeRendu, toutLesIngredientsPourLeBoutonFiltre } from "./search";
import { filtres } from "./search";

let searchService = new RecipesService();
let tagsFactory = new TagsFactory();


// DOM
const searchbarIngredients = document.querySelector('#searchbarIngredients');
const zoneListeIngredients = document.querySelector('.ingredient-list');

const searchbarAppareils = document.querySelector('#searchbarAppareils');
const zoneListeAppareils = document.querySelector('.appareils-list');

const searchbarUstensils = document.querySelector('#searchbarUstensils');
const zoneListeUstensils = document.querySelector('.ustensils-list');

async function rechercheIngredients(motRecherche) {



    // faire une recherche du mot motRecherche au sein des filtres présents (et donc founi par le retour de service de searchService)
let resultat = searchService.search(motRecherche);
console.log(resultat);
console.log(resultat);


}

// EVENT sur la recherche d'ingredients
searchbarIngredients.addEventListener("input", (event) => {
    const searchTextIngredient = event.target.value.trim().toLowerCase();

    // console.log(searchTextIngredient); 
    // console.log(toutLesIngredientsPourLeBoutonFiltre); 

    // rechercheIngredients(searchTextIngredient, );
    zoneListeIngredients.innerHTML = "";

    const ingredients = searchService.searchFiltres(event, searchTextIngredient);
    ingredients.forEach((ingredient) => {
        tagsFactory.getIngredientCardDOM(ingredient);
    });


});

// EVENT sur la recherche des appareils
searchbarAppareils.addEventListener("input", (event) => {
    
    const searchTextAppareils = event.target.value.trim().toLowerCase();

    zoneListeAppareils.innerHTML = "";

    const appareils = searchService.searchFiltres(event, searchTextAppareils);
    appareils.forEach((appareil) => {
        tagsFactory.getAppareilCardDOM(appareil);
    });


});

// EVENT sur la recherche des ustensils
searchbarUstensils.addEventListener("input", (event) => {
    
    const searchTextUstensils = event.target.value.trim().toLowerCase();

    zoneListeUstensils.innerHTML = "";

    const ustensils = searchService.searchFiltres(event, searchTextUstensils);
    ustensils.forEach((ustensil) => {
        tagsFactory.getUstensilCardDOM(ustensil);
    });


});

const filtre = document.querySelector('.filters');
// Gestion ouverture du bouton filtre "ingredients"
const filtreIngredients = document.querySelector('.filters-ingredients');
const boutonFiltreIngredients = document.querySelector('.zone-filterButton-ingredients');
const boutonFiltreDropdownIngredients = document.querySelector('.dropdown-content-ingredients');
let isButtonIngredientExpanded = false;

// Ajout d'un gestionnaire d'événement au bouton
boutonFiltreIngredients.addEventListener('click', function() {
    if (isButtonIngredientExpanded) {
        filtreIngredients.style.height = 'auto';
        boutonFiltreDropdownIngredients.style.display = 'none';
        
    } else {
        // filtreIngredients.style.height = '300px';
        boutonFiltreDropdownIngredients.style.display = 'block';
    }
    isButtonIngredientExpanded = !isButtonIngredientExpanded;
});

//////////////////////////////////////////////////////////////
// Gestion ouverture du bouton filtre "appareils"
const filtreAppareils = document.querySelector('.filters-appareils');
const boutonFiltreAppareils = document.querySelector('.zone-filterButton-appareils');
const boutonFiltreDropdownAppareils = document.querySelector('.dropdown-content-appareils');
let isButtonAppareilsExpanded = false;
// Ajout d'un gestionnaire d'événement au bouton
boutonFiltreAppareils.addEventListener('click', function() {
    if (isButtonAppareilsExpanded) {
        filtreAppareils.style.height = 'auto';
        boutonFiltreDropdownAppareils.style.display = 'none';
        
    } else {
        filtreAppareils.style.height = '300px';
        boutonFiltreDropdownAppareils.style.display = 'block';
    }
    isButtonAppareilsExpanded = !isButtonAppareilsExpanded;
});

////////////////////////////////////////////////////
// Gestion ouverture du bouton filtre "ustensils"
const filtreUstensils = document.querySelector('.filters-ustensils');
const boutonFiltreUstensils = document.querySelector('.zone-filterButton-ustensils');
const boutonFiltreDropdownUstensils = document.querySelector('.dropdown-content-ustensils');
let isButtonUstensilsExpanded = false;
// Ajout d'un gestionnaire d'événement au bouton
boutonFiltreUstensils.addEventListener('click', function() {
    if (isButtonUstensilsExpanded) {
        filtreUstensils.style.height = 'auto';
        boutonFiltreDropdownUstensils.style.display = 'none';
        
    } else {
        filtreUstensils.style.height = '300px';
        boutonFiltreDropdownUstensils.style.display = 'block';
    }
    isButtonUstensilsExpanded = !isButtonUstensilsExpanded;
});

