// ********************************************
// Recuperation du Modele
// ********************************************
import { RecipesService } from "../service/searchService";
import recipes from '../data/recipes';

// ********************************************
// DOM element
// ********************************************
const recherchePrincipal = document.getElementById('recherchePrincipal');
const buttonSearch = document.getElementById('buttonSearch');
let mainHeader = document.querySelector('.main-header');
const zoneResults = document.querySelector('.main-zoneCards');
let ingredientsList = document.querySelector('.ingredient-list');
let appareilsList = document.querySelector('.appareils-list');
let ustensilsList = document.querySelector('.ustensils-list');

let searchService = new RecipesService();
let searchText = "";

// ********************************************
// Recherche à la saisie
// ********************************************
recherchePrincipal.addEventListener("input", (event) => {
  searchText = event.target.value.trim().toLowerCase();
  
  if (!searchText) {
    console.log("Rien à signaler");
    // Effacer les résultats si la recherche est vide
    zoneResults.innerHTML = "";
    return;
  }
  else if (searchText.length >= 3) {
    
    let boutonIngredientsListe = [];
    let boutonAppareilsListe = [];
    let boutonUstensilsListe = [];
    let tableauFiltres = [];
    console.log(tableauFiltres);

    // Retour nouveau tableau en fonction de la recherche
    // ********************************************
    const matchingRecipes = searchService.search(searchText, '');
    let newRecipesDatas = matchingRecipes;
    console.log(newRecipesDatas);

    // Remise à zero du contenu
    // ********************************************
    zoneResults.innerHTML = "";

    // Création des cartes de recettes
    // ********************************************
    newRecipesDatas.forEach((recipe) => {
      
      // console.log(recipe);
      let nameRecipe = recipe.name;
      let infosRecette = recipe.description;
      let imageJpg = recipe.image;
      let ingredients = recipe.ingredients;
      let appareils = recipe.appliance;
      let ustensils = recipe.ustensils;
      
      //MAJ liste des boutons filtres
      ingredientsList.innerHTML = "";
      appareilsList.innerHTML = "";
      ustensilsList.innerHTML = "";
      ingredients.forEach((ingredient) => boutonIngredientsListe.push(ingredient.ingredient));
      boutonAppareilsListe.push(appareils);
      ustensils.forEach((ustensil) =>boutonUstensilsListe.push(ustensil) )
      
      const recipeModel = recipesFactory(recipe);
      const recipeCardDOM = recipeModel.getRecipeCardDOM(nameRecipe, infosRecette, imageJpg, ingredients);
      zoneResults.appendChild(recipeCardDOM);
    })

    // Construction de la liste du bouton "ingredients"
    // ********************************************
    // console.log(`Les ingrédients sont : ${boutonIngredientsListe}`);
    boutonIngredientsListe.forEach((ingredient) => {
      let tagModel = new tagsFactory();
      tagModel.getIngredientCardDOM(ingredient);
      
    })
    
    // Selection element TAGS "ingredients"
    // ********************************************
    let liIngredients = document.querySelectorAll('.li-ingredients');
    liIngredients.forEach(li => {
      li.addEventListener('click', () => {
        console.log('Élément li cliqué :', li.textContent);
        let texteTag = li.textContent;

tableauFiltres.push(texteTag);
        
        // Apparition du tag
        const tagModel = tagsFactory();
        const tagCardDOM = tagModel.getTagCardDOM(texteTag);
      });
    });
    
    // Construction de la liste du bouton "appareils"
    // ********************************************
    console.log(`Les appareils sont : ${boutonAppareilsListe}`);
    boutonAppareilsListe.forEach((appareil) => {
      let tagModel = new tagsFactory();
      tagModel.getAppareilCardDOM(appareil)
    })
    let liAppareils = document.querySelectorAll('.li-appareils');
    
    liAppareils.forEach(li => {
      li.addEventListener('click', () => {
        console.log('Élément li cliqué :', li.textContent);
        let texteTag = li.textContent;

        tableauFiltres.push(texteTag);
        let motRechercheEnCours = recherchePrincipal.value;
        console.log(motRechercheEnCours);
        console.log(tableauFiltres);

        let tableauAvecAppareil = searchService.search(motRechercheEnCours,tableauFiltres)
        console.log(tableauAvecAppareil);

        // Apparition du tag
        const tagModel = tagsFactory();
        const tagCardDOM = tagModel.getTagCardDOM(texteTag);
      });
    });
    
    // Construction de la liste du bouton "ustensils"
    // ********************************************
    console.log(`Les appareils sont : ${boutonUstensilsListe}`);
    boutonUstensilsListe.forEach((ustensil) => {
      let tagModel = new tagsFactory();
      tagModel.getUstensilCardDOM(ustensil)
    })
    let liUstensils = document.querySelectorAll('.li-ustensils');
    
    liUstensils.forEach(li => {
      li.addEventListener('click', () => {
        console.log('Élément li cliqué :', li.textContent);
        let texteTag = li.textContent;
        tableauFiltres.push(texteTag);

        // Apparition du tag
        const tagModel = tagsFactory();
        const tagCardDOM = tagModel.getTagCardDOM(texteTag);
      });
    });
    
  }
  

});



