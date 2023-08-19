// Recuperation du Modele
import { RecipesService } from "../service/searchService";
import recipes from '../data/recipes';


// DOM element
const recherchePrincipal = document.getElementById('recherchePrincipal');
const buttonSearch = document.getElementById('buttonSearch');
const zoneResults = document.querySelector('.main-zoneCards');

let searchService = new RecipesService();

// Recherche à la saisie
recherchePrincipal.addEventListener("input", (event) => {
  const searchText = event.target.value.trim().toLowerCase();
  
  if (!searchText) {
    console.log("Rien à signaler");
    // Effacer les résultats si la recherche est vide
    zoneResults.innerHTML = "";
    return;
  }
  else if (searchText.length >= 3) {
    console.log("Supérieur à 3 carcatère OK");
    
    // Retour RESULTAT
    const matchingRecipes = searchService.search(searchText, '');
    let newRecipesDatas = matchingRecipes;
    console.log(newRecipesDatas);
    
    // Remise à zero du contenu
    zoneResults.innerHTML = "";
    
    // Création des cartes de recettes
    newRecipesDatas.forEach((recipe) => {
      const recipeModel = recipesFactory(recipe);
      const recipeCardDOM = recipeModel.getRecipeCardDOM();
      zoneResults.appendChild(recipeCardDOM);
    })

  }
  
});