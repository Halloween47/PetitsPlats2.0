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

/////////////////////////////////////////////////////
const tableauRecettesPrincipal = searchService.toutesLesInfos();
let tableauRecettesFiltrer = [];
console.log(tableauRecettesFiltrer);
/////////////////////////////////////////////////////

// ********************************************
// Recherche à la saisie
// ********************************************
recherchePrincipal.addEventListener("input", (event) => {
  searchText = event.target.value.trim().toLowerCase();

  let resultat = searchService.search(searchText, "");

  console.log(JSON.stringify(resultat));

  /*


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
        let motRechercheEnCours = recherchePrincipal.value;
  
        // Noub=veau tableau avec filtrage par appareils
        let tableauAvecIngredients = searchService.search(motRechercheEnCours,tableauFiltres)
  
        // Apparition du tag
        const tagModel = tagsFactory();
        const tagCardDOM = tagModel.getTagCardDOM(texteTag);
  
         // Remise à zero du contenu
        // ********************************************
        zoneResults.innerHTML = "";
  
        // Création des cartes de recettes
        // ********************************************
        tableauAvecIngredients.forEach((recipe) => {
  
          // console.log(recipe);
          let nameRecipe = recipe.name;
          let infosRecette = recipe.description;
          let imageJpg = recipe.image;
          let ingredients = recipe.ingredients;
          let appareils = recipe.appliance;
          let ustensils = recipe.ustensils;
  
          // //MAJ liste des boutons filtres
          // ingredientsList.innerHTML = "";
          ingredientsList.innerHTML = "";
          // ustensilsList.innerHTML = "";
          // ingredients.forEach((ingredient) => boutonIngredientsListe.push(ingredient.ingredient));
          boutonIngredientsListe.push(ingredients);
          // ustensils.forEach((ustensil) =>boutonUstensilsListe.push(ustensil) )
  
          const recipeModel = recipesFactory(recipe);
          const recipeCardDOM = recipeModel.getRecipeCardDOM(nameRecipe, infosRecette, imageJpg, ingredients);
          zoneResults.appendChild(recipeCardDOM);
        })
      });
    });
  
    // Construction de la liste du bouton "appareils"
    // ********************************************
    console.log(`Les appareils sont : ${boutonAppareilsListe}`);
    boutonAppareilsListe.forEach((appareil) => {
      let tagModel = new tagsFactory();
      tagModel.getAppareilCardDOM(appareil)
    })
    // au click sur element li "APPAREILS"
    let liAppareils = document.querySelectorAll('.li-appareils');
  
    liAppareils.forEach(li => {
      li.addEventListener('click', () => {
        console.log('Élément li cliqué :', li.textContent);
        let texteTag = li.textContent;
  
        tableauFiltres.push(texteTag);
        let motRechercheEnCours = recherchePrincipal.value;
        console.log(motRechercheEnCours);
        console.log(tableauFiltres);
  
        // Noub=veau tableau avec filtrage par appareils
        let tableauAvecAppareil = searchService.search(motRechercheEnCours,tableauFiltres)
        console.log(tableauAvecAppareil);
  
        // Apparition du tag
        const tagModel = tagsFactory();
        const tagCardDOM = tagModel.getTagCardDOM(texteTag);
  
        // Remise à zero du contenu
        // ********************************************
        zoneResults.innerHTML = "";
  
        // Création des cartes de recettes
        // ********************************************
        tableauAvecAppareil.forEach((recipe) => {
  
          // console.log(recipe);
          let nameRecipe = recipe.name;
          let infosRecette = recipe.description;
          let imageJpg = recipe.image;
          let ingredients = recipe.ingredients;
          let appareils = recipe.appliance;
          let ustensils = recipe.ustensils;
  
          // //MAJ liste des boutons filtres
          // ingredientsList.innerHTML = "";
          appareilsList.innerHTML = "";
          // ustensilsList.innerHTML = "";
          // ingredients.forEach((ingredient) => boutonIngredientsListe.push(ingredient.ingredient));
          boutonAppareilsListe.push(appareils);
          // ustensils.forEach((ustensil) =>boutonUstensilsListe.push(ustensil) )
  
          const recipeModel = recipesFactory(recipe);
          const recipeCardDOM = recipeModel.getRecipeCardDOM(nameRecipe, infosRecette, imageJpg, ingredients);
          zoneResults.appendChild(recipeCardDOM);
        })
  
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
  
    // liUstensils.forEach(li => {
    //   li.addEventListener('click', () => {
    //     console.log('Élément li cliqué :', li.textContent);
    //     let texteTag = li.textContent;
  
    //     tableauFiltres.push(texteTag);
    //     let motRechercheEnCours = recherchePrincipal.value;
    //     let tableauAvecUstensil = searchService.search(motRechercheEnCours,tableauFiltres)
  
  
    //     // Apparition du tag
    //     const tagModel = tagsFactory();
    //     const tagCardDOM = tagModel.getTagCardDOM(texteTag);
  
    //     // Remise à zero du contenu
    //     // ********************************************
    //     zoneResults.innerHTML = "";
  
    //     // Création des cartes de recettes
    //     // ********************************************
    //     tableauAvecUstensil.forEach((recipe) => {
  
    //       // console.log(recipe);
    //       let nameRecipe = recipe.name;
    //       let infosRecette = recipe.description;
    //       let imageJpg = recipe.image;
    //       let ingredients = recipe.ingredients;
    //       let appareils = recipe.appliance;
    //       let ustensils = recipe.ustensils;
  
    //       // //MAJ liste des boutons filtres
    //       // ingredientsList.innerHTML = "";
    //       ustensilsList.innerHTML = "";
    //       // ustensilsList.innerHTML = "";
    //       // ingredients.forEach((ingredient) => boutonIngredientsListe.push(ingredient.ingredient));
    //       boutonUstensilsListe.push(ustensils);
    //       // ustensils.forEach((ustensil) =>boutonUstensilsListe.push(ustensil) )
  
    //       const recipeModel = recipesFactory(recipe);
    //       const recipeCardDOM = recipeModel.getRecipeCardDOM(nameRecipe, infosRecette, imageJpg, ingredients);
    //       zoneResults.appendChild(recipeCardDOM);
    //     })
    //   });
    // });
  
  }
  */

  // else if (searchText.length >= 3) {

  //   let boutonIngredientsListe = [];
  //   let boutonAppareilsListe = [];
  //   let boutonUstensilsListe = [];

  //   // Filtrage en fonction de la rechercher principal
  //   let nouveauTabAvecSearchbar = searchService.searchAdvanced(tableauRecettesPrincipal, searchText);

  //   // Création des cartes de recettes
  //   nouveauTabAvecSearchbar.forEach((recipe) => {

  //     let nameRecipe = recipe.name;
  //     let infosRecette = recipe.description;
  //     let imageJpg = recipe.image;
  //     let ingredients = recipe.ingredients;
  //     let appareils = recipe.appliance;
  //     let ustensils = recipe.ustensils;

  //     //MAJ liste des boutons filtres
  //     ingredientsList.innerHTML = "";
  //     appareilsList.innerHTML = "";
  //     ustensilsList.innerHTML = "";

  //     ingredients.forEach((ingredient) => boutonIngredientsListe.push(ingredient.ingredient));

  //     boutonAppareilsListe.push(appareils);
  //     ustensils.forEach((ustensil) =>boutonUstensilsListe.push(ustensil) )

  //     // J'envoi les données dans le tableau des filtres
  //     tableauRecettesFiltrer.push(recipe);

  //     const recipeModel = recipesFactory(recipe);
  //     const recipeCardDOM = recipeModel.getRecipeCardDOM(nameRecipe, infosRecette, imageJpg, ingredients);
  //     zoneResults.appendChild(recipeCardDOM);
  //   })

  //   //______Gestion du filtre INGREDIENTS______//
  //   // Construction de la liste du bouton "ingredients"
  //   let boutonIngredientsListeSansDoublons = [...new Set(boutonIngredientsListe)]
  //   // console.log(`Les ingrédients sont : ${boutonIngredientsListe}`);
  //   boutonIngredientsListeSansDoublons.forEach((ingredient) => {
  //     let tagModel = new tagsFactory();
  //     tagModel.getIngredientCardDOM(ingredient);
  //   })
  //   // Selection element TAGS "ingredients"
  //   let liIngredients = document.querySelectorAll('.li-ingredients');
  //   liIngredients.forEach(li => {
  //     li.addEventListener('click', () => {
  //       console.log('Élément li cliqué :', li.textContent);

  //       // Initialisation de la recherche
  //       let elementDeRecherche = li.textContent;
  //       let categorieFiltre = 'ingredients';
  //       let nouveauTabAvecIngredients = searchService.searchAdvanced(tableauRecettesFiltrer, elementDeRecherche, categorieFiltre);
  //       tableauRecettesFiltrer= nouveauTabAvecIngredients;
  //       console.log(tableauRecettesFiltrer);

  //       tableauRecettesFiltrer.forEach((recipe) => {

  //         let ingredients = recipe.ingredients;

  //         //MAJ liste des boutons filtres
  //         ingredientsList.innerHTML = "";

  //         ingredients.forEach((ingredient) => boutonIngredientsListe.push(ingredient.ingredient));

  //         // Construction de la liste du bouton "ingredients"
  //   let boutonIngredientsListeSansDoublons = [...new Set(boutonIngredientsListe)]
  //   // console.log(`Les ingrédients sont : ${boutonIngredientsListe}`);
  //   boutonIngredientsListeSansDoublons.forEach((ingredient) => {
  //     let tagModel = new tagsFactory();
  //     tagModel.getIngredientCardDOM(ingredient);
  //   })

  //       })

  //     });
  //   });

  //   //______Gestion du filtre APPAREILS______//
  //   // Construction de la liste du bouton "appareils"
  //   let boutonAppareilsListeSansDoublons = [...new Set(boutonAppareilsListe)]
  //   // console.log(`Les appareils sont : ${boutonAppareilsListe}`);
  //   boutonAppareilsListeSansDoublons.forEach((appareil) => {
  //     let tagModel = new tagsFactory();
  //     tagModel.getAppareilCardDOM(appareil);
  //   })
  //   // Selection element TAGS "appareils"
  //   let liAppareils = document.querySelectorAll('.li-appareils');
  //   liAppareils.forEach(li => {
  //     li.addEventListener('click', () => {
  //       console.log('Élément li cliqué :', li.textContent);

  //       console.log(tableauRecettesFiltrer);

  //       let elementDeRecherche = li.textContent;
  //       let categorieFiltre = 'appareils';
  //       let nouveauTabAvecAppareils = searchService.searchAdvanced(tableauRecettesFiltrer, elementDeRecherche, categorieFiltre);
  //       console.log(nouveauTabAvecAppareils);

  //       // tableauRecettesFiltrer= nouveauTabAvecAppareils;
  //       console.log(tableauRecettesFiltrer);



  //       // let texteTag = li.textContent;

  //       // tableauFiltres.push(texteTag);
  //       // let motRechercheEnCours = recherchePrincipal.value;

  //       // // Noub=veau tableau avec filtrage par appareils
  //       // let tableauAvecIngredients = searchService.search(motRechercheEnCours,tableauFiltres)

  //       // // Apparition du tag
  //       // const tagModel = tagsFactory();
  //       // const tagCardDOM = tagModel.getTagCardDOM(texteTag);

  //       //  // Remise à zero du contenu
  //       // // ********************************************
  //       // zoneResults.innerHTML = "";

  //       // // Création des cartes de recettes
  //       // // ********************************************
  //       // tableauAvecIngredients.forEach((recipe) => {

  //       //   // console.log(recipe);
  //       //   let nameRecipe = recipe.name;
  //       //   let infosRecette = recipe.description;
  //       //   let imageJpg = recipe.image;
  //       //   let ingredients = recipe.ingredients;
  //       //   let appareils = recipe.appliance;
  //       //   let ustensils = recipe.ustensils;

  //       //   // //MAJ liste des boutons filtres
  //       //   // ingredientsList.innerHTML = "";
  //       //   ingredientsList.innerHTML = "";
  //       //   // ustensilsList.innerHTML = "";
  //       //   // ingredients.forEach((ingredient) => boutonIngredientsListe.push(ingredient.ingredient));
  //       //   boutonIngredientsListe.push(ingredients);
  //       //   // ustensils.forEach((ustensil) =>boutonUstensilsListe.push(ustensil) )

  //       //   const recipeModel = recipesFactory(recipe);
  //       //   const recipeCardDOM = recipeModel.getRecipeCardDOM(nameRecipe, infosRecette, imageJpg, ingredients);
  //       //   zoneResults.appendChild(recipeCardDOM);
  //       // })
  //     });
  //   })

  //   //______Gestion du filtre USTENSILS______//
  //   // Construction de la liste du bouton "ustensils"
  //   let boutonUstensilsListeSansDoublons = [...new Set(boutonUstensilsListe)]
  //   // console.log(`Les ustensils sont : ${boutonUstensilsListe}`);
  //   boutonUstensilsListeSansDoublons.forEach((ustensil) => {
  //     let tagModel = new tagsFactory();
  //     tagModel.getUstensilCardDOM(ustensil);
  //   })
  //   // Selection element TAGS "ustensils"
  //   let liUstensils = document.querySelectorAll('.li-ustensils');
  //   liUstensils.forEach(li => {
  //     li.addEventListener('click', () => {
  //       console.log('Élément li cliqué :', li.textContent);

  //       // Initialisation de la recherche
  //       let elementDeRecherche = li.textContent;
  //       let categorieFiltre = 'ustensils';
  //       let nouveauTabAvecUstensils = searchService.searchAdvanced(tableauRecettesFiltrer, elementDeRecherche, categorieFiltre);
  //       tableauRecettesFiltrer= nouveauTabAvecUstensils;
  //       console.log(tableauRecettesFiltrer);

  //     });
  //   });
  //   ;

  // }


});

