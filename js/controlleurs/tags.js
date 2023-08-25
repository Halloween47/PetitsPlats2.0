// Recuperation du Modele
import { RecipesService } from "../service/searchService";

let searchService = new RecipesService();

// DOM
const searchbarIngredients = document.querySelector('#searchbarIngredients');
const zoneListeIngredients = document.querySelector('.ingredient-list');

const searchbarAppareils = document.querySelector('#searchbarAppareils');
const zoneListeAppareils = document.querySelector('.appareils-list');

const searchbarUstensils = document.querySelector('#searchbarUstensils');
const zoneListeUstensils = document.querySelector('.ustensils-list');

// EVENT sur la recherche d'ingredients
searchbarIngredients.addEventListener("input", (event) => {
    const searchText = event.target.value.trim().toLowerCase();
    
    console.log(searchText); 
    
    ///////////////////////////////
    ///////////////////////////////
    const listeIngredients = searchService.ingredients();
    
    const nouvelleListeDIngredients = listeIngredients.filter(aliment => aliment.toLowerCase().includes(searchText));
    
    console.log(nouvelleListeDIngredients);
    zoneListeIngredients.innerHTML = "";
    
    nouvelleListeDIngredients.forEach((ingredient) => {
        // Remise à zero du contenu
        const tagModel = tagsFactory();
        const ingredientCardDOM = tagModel.getIngredientCardDOM(ingredient);
    });
    
    ///////////////////////////////
    ///////////////////////////////
});

// EVENT sur la recherche des appareils
searchbarAppareils.addEventListener("input", (event) => {
    const searchText = event.target.value.trim().toLowerCase();
    
    console.log(searchText); 
    
    ///////////////////////////////
    ///////////////////////////////
    const listeAppareils = searchService.appareils();
    
    const nouvelleListeDesAppareils = listeAppareils.filter(appareil => appareil.toLowerCase().includes(searchText));
    
    console.log(nouvelleListeDesAppareils);
    zoneListeAppareils.innerHTML = "";
    
    nouvelleListeDesAppareils.forEach((appareil) => {
        // Remise à zero du contenu
        const tagModel = tagsFactory();
        const appareilCardDOM = tagModel.getAppareilCardDOM(appareil);
    });
    
    ///////////////////////////////
    ///////////////////////////////
});

// EVENT sur la recherche des ustensils
searchbarUstensils.addEventListener("input", (event) => {
    const searchText = event.target.value.trim().toLowerCase();
    
    console.log(searchText); 
    
    ///////////////////////////////
    ///////////////////////////////
    const listeUstensils = searchService.ustensils();
    
    const nouvelleListeDesUstensils = listeUstensils.filter(ustensil => ustensil.toLowerCase().includes(searchText));
    
    console.log(nouvelleListeDesUstensils);
    zoneListeUstensils.innerHTML = "";
    
    nouvelleListeDesUstensils.forEach((ustensil) => {
        const tagModel = tagsFactory();
        const ustensilCardDOM = tagModel.getUstensilCardDOM(ustensil);
    });
    
    ///////////////////////////////
    ///////////////////////////////
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

