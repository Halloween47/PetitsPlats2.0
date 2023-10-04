// Recuperation du Modele
import { RecipesService } from "../service/searchService";
import { searchText, filtres } from "./search";
import { videLaListeDesRecettes,afficheLesFiltres, afficheLaListeDesRecettes, afficheLeTag, nombreRecetteMAJ } from "../controlleurs/functions";

let searchService = new RecipesService();
export let tagsFactory = new TagsFactory();
export let tableauTags = [];
console.log(tableauTags);

// DOM
const searchbarIngredients = document.querySelector('#searchbarIngredients');
const zoneListeIngredients = document.querySelector('.ingredient-list');
const searchbarAppareils = document.querySelector('#searchbarAppareils');
const zoneListeAppareils = document.querySelector('.appareils-list');
const searchbarUstensils = document.querySelector('#searchbarUstensils');
const zoneListeUstensils = document.querySelector('.ustensils-list');


/***************************************************/
/*OUVERTURE DES DROPDOWN FILTRES*/
/***************************************************/
const filtre = document.querySelector('.filters');
// Gestion ouverture du bouton filtre "INGREDIENTS"
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

// Gestion ouverture du bouton filtre "APPAREILS"
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

// Gestion ouverture du bouton filtre "USTENSILS"
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


/***************************************************/
/*BARRE DE RECHERCHE DES FILTRES*/
/***************************************************/
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

searchbarAppareils.addEventListener("input", (event) => {
    
    const searchTextAppareils = event.target.value.trim().toLowerCase();

    zoneListeAppareils.innerHTML = "";

    const appareils = searchService.searchFiltres(event, searchTextAppareils);
    appareils.forEach((appareil) => {
        tagsFactory.getAppareilCardDOM(appareil);
    });


});

searchbarUstensils.addEventListener("input", (event) => {
    
    const searchTextUstensils = event.target.value.trim().toLowerCase();

    zoneListeUstensils.innerHTML = "";

    const ustensils = searchService.searchFiltres(event, searchTextUstensils);
    ustensils.forEach((ustensil) => {
        tagsFactory.getUstensilCardDOM(ustensil);
    });


});


/***************************************************/
/*GESTION DES LISTES DE FILTRES*/
/***************************************************/
/* Filtre "ingredients" */
export const toutLesIngredientsPourLeBoutonFiltre = searchService.toutLesIngredients();
toutLesIngredientsPourLeBoutonFiltre.forEach((ingredient) => {
  tagsFactory.getIngredientCardDOM(ingredient);
});

/* Filtre "appareils" */
const toutLesAppareilsPourLeBoutonFiltre = searchService.toutLesAppareils();
toutLesAppareilsPourLeBoutonFiltre.forEach((appareil) => {
  tagsFactory.getAppareilCardDOM(appareil);
});

/* Filtre "ustensils" */
const toutLesUstensilsPourLeBoutonFiltre = searchService.toutLesUstensils();
toutLesUstensilsPourLeBoutonFiltre.forEach((ustensil) => {
  tagsFactory.getUstensilCardDOM(ustensil);
});


/***************************************************/
/*GESTION DES TAGS*/
/***************************************************/
const containerIngredients = document.querySelector('.ingredient-list');
containerIngredients.addEventListener('click', (event) => {
  if (event.target.classList.contains('li-ingredients')) {
    const element = event.target;
    filtres.ingredients.push(element.textContent)
    let resultat = searchService.search(searchText, filtres);
    videLaListeDesRecettes();
    afficheLaListeDesRecettes(resultat);
    nombreRecetteMAJ(resultat);
    const zoneListeIngredients = document.querySelector('.ingredient-list');
    const zoneListeAppareils = document.querySelector('.appareils-list');
    const zoneListeUstensils = document.querySelector('.ustensils-list');
    afficheLesFiltres(zoneListeIngredients, resultat, zoneListeUstensils, zoneListeAppareils);
    
    tableauTags.push(element.textContent);
    afficheLeTag()
  }
  
})
const containerAppareils = document.querySelector('.appareils-list');
containerAppareils.addEventListener('click', (event) => {
  if (event.target.classList.contains('li-appareils')) {
    const element = event.target;
    filtres.appliance.push(element.textContent)
    let resultat = searchService.search(searchText, filtres);
    videLaListeDesRecettes();
    
    afficheLaListeDesRecettes(resultat);
    nombreRecetteMAJ(resultat);
    
    const zoneListeIngredients = document.querySelector('.ingredient-list');
    const zoneListeAppareils = document.querySelector('.appareils-list');
    const zoneListeUstensils = document.querySelector('.ustensils-list');
    afficheLesFiltres(zoneListeIngredients, resultat, zoneListeUstensils, zoneListeAppareils);
    tableauTags.push(element.textContent);
    afficheLeTag(tableauTags);    
  }
  
})
const containerUstensils = document.querySelector('.ustensils-list');
containerUstensils.addEventListener('click', (event) => {
  if (event.target.classList.contains('li-ustensils')) {
    const element = event.target;
    filtres.ustensils.push(element.textContent)
    let resultat = searchService.search(searchText, filtres);
    videLaListeDesRecettes();
    
    afficheLaListeDesRecettes(resultat);
    nombreRecetteMAJ(resultat);
    
    const zoneListeIngredients = document.querySelector('.ingredient-list');
    const zoneListeAppareils = document.querySelector('.appareils-list');
    const zoneListeUstensils = document.querySelector('.ustensils-list');
    afficheLesFiltres(zoneListeIngredients, resultat, zoneListeUstensils, zoneListeAppareils);
    tableauTags.push(element.textContent);
    afficheLeTag(tableauTags);    
  }
  
})

