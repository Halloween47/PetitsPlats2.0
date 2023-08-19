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


// Affichage des ingredients
const listeIngredients = searchService.ingredients();
listeIngredients.forEach((ingredient) => {
    // Remise à zero du contenu
    const tagModel = tagsFactory();
    const ingredientCardDOM = tagModel.getIngredientCardDOM(ingredient);
});
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

// Affichage des appareils
const listeAppareils = searchService.appareils();
listeAppareils.forEach((appareil) => {
    // Remise à zero du contenu
    const tagModel = tagsFactory();
    const appareilCardDOM = tagModel.getAppareilCardDOM(appareil);
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

// Affichage des ustensils
const listeUstensils = searchService.ustensils();
listeUstensils.forEach((ustensil) => {
    const tagModel = tagsFactory();
    const ustensilCardDOM = tagModel.getUstensilCardDOM(ustensil);
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

// Selection element TAGS
document.addEventListener('DOMContentLoaded', () => {
    const liElements = document.querySelectorAll('.tagsList');
    
    liElements.forEach(li => {
        li.addEventListener('click', () => {
            console.log('Élément li cliqué :', li.textContent);
            let texteTag = li.textContent;
            /////////////////////////////////
            // Apparition du tag
            const tagModel = tagsFactory();
            const tagCardDOM = tagModel.getTagCardDOM(texteTag);
            /////////////////////////////////
        });
    });
});