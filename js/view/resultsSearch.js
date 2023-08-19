// Recuperation du Modele
import { RecipesService } from "../service/searchService";
import recipes from '../data/recipes';


export function displayResults() {

// Retour RESULTAT
    const matchingRecipes = searchService.search(searchText, '');
    let newRecipesDatas = matchingRecipes;
    console.log(newRecipesDatas);

    // Création des cartes de recettes
    newRecipesDatas.forEach((recipe) => {
      const recipeModel = recipesFactory(recipe);
      const recipeCardDOM = recipeModel.getRecipeCardDOM();
      zoneResults.appendChild(recipeCardDOM);
    })
}
function init() {
    console.log('test init');

    displayResults();
}

init();