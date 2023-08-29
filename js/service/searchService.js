import recipes from '../data/recipes';

export class RecipesService {

    constructor() {
        // this.data = require('./assets/data/data.json');
        this.recipes = recipes;
    }

    //doit renvoyer un json avec le résultat et les nouveaux filtres
    /*
    [
        "recettes" : [
            {
                ...
            },
            {
                ...
            }
        ],
        "filtres":[
            "ingredients":[
                ...
            ],
            "appliance":[
                ...
            ],
            "ustensils":[
                ...
            ]
        ]
    ]
    */
    search(motRecherche, filtreRecherche) {
        let resultat = this.recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(motRecherche)
        );

        let recettes = new Array(resultat);
        let filtres = new Array("");
        let retour = new Array(recettes, filtres);

        return retour;
    }


    /*
    // Recherche d'origine
    let recherchePrincipal = this.recipes.filter((recipe) => 
    recipe.name.toLowerCase().includes(motRecherche))
    console.log(recherchePrincipal);
    
    // Tableau de tout les INGREDIENTS
    let tableauIngredients = [];
    this.recipes.filter((recipe) => recipe.ingredients.forEach((ingredient) => tableauIngredients.push(ingredient.ingredient)));
    // console.log(tableauIngredients);
     
    // Tableau de tout les USTENSILS
    let tableauUstensils = [];
    this.recipes.filter((recipe) => recipe.ustensils.forEach((ustensil) => tableauUstensils.push(ustensil)));
    
    if (recherchePrincipal && !filtreRecherche) {
        return recherchePrincipal;
    }
    else if (recherchePrincipal && filtreRecherche) {
        console.log('recherche principa && les filtrress');
        // ////////////////////////////////////////////////////
        // // Filtrage par APPAREILS 
        // let recetteAvecAppareils = recherchePrincipal.filter((recipe) => filtreRecherche.includes(recipe.appliance));
        // console.log(recetteAvecAppareils);
        
        // // Filtrage par USTENSILS 
    // let recetteAvecUstensils = recherchePrincipal.filter(recipe => recipe.ustensils.some(ustensil => filtreRecherche.includes(ustensil)));
        // console.log(recetteAvecUstensils);
        
            // // Filtrage par INGREDIENTS 
        // let recetteAvecIngredients = recherchePrincipal.filter(recipe => recipe.ingredients.some(ingredient => filtreRecherche.includes(ingredient.ingredient   )));
    // console.log(recetteAvecIngredients);
        
        // // return recetteAvecAppareils;
        // // return recetteAvecUstensils;
        // // return recetteAvecIngredients;
    // recetteAvecIngredients.concat(recetteAvecAppareils, recetteAvecUstensils);        }
        // ////////////////////////////////////////////////////
        let recetteAvecAppareils = recherchePrincipal.filter(recipe => filtreRecherche.includes(recipe.appliance));
        let recetteAvecUstensils = recherchePrincipal.filter(recipe => recipe.ustensils.some(ustensil => filtreRecherche.includes(ustensil)));
    let recetteAvecIngredients = recherchePrincipal.filter(recipe => recipe.ingredients.some(ingredient => filtreRecherche.includes(ingredient.ingredient)));
        
        let choixCumule = recetteAvecIngredients.concat(recetteAvecAppareils, recetteAvecUstensils);
        console.log(choixCumule);
        
    return choixCumule;
    
    }*/


    /* searchAdvanced(tableauRecipesEnCours, motRecherche, categorieFiltre) {
         
         // Stockage tableau en cours
    eauTableauRecettes = tableauRecipesEnCours;
         
         if (categorieFiltre === "ingredients") {
    echerche dans le filtre INGREDIENTS
    recetteAvecIngredients = nouveauTableauRecettes.filter((recipe) => recipe.ingredients.some((ingredient) => ingredient.ingredient === motRecherche));
             
    érification
    ole.log(recetteAvecIngredients);
             
             return recetteAvecIngredients
    
    if ( categorieFiltre === "appareils") {
             // Recherche dans le filtre APPAREILS
             let recetteAvecAppareils = nouveauTableauRecettes.filter(recipe => recipe.appliance === motRecherche);
    
    // Vérification
    console.log(recetteAvecAppareils);
    
    return recetteAvecAppareils
    
         else if (categorieFiltre === "ustensils") {
     // Recherche dans le filtre USTENSILS
     let recetteAvecUstensils = nouveauTableauRecettes.filter(recipe => recipe.ustensils.some(ustensil => ustensil === motRecherche));
             
     // Vérification
     console.log(recetteAvecUstensils);
             
     return recetteAvecUstensils
    }
    else {
             // Recherche dans la SEARCHBAR
         let recherchePrincipal = nouveauTableauRecettes.filter((recipe) => 
         recipe.name.toLowerCase().includes(motRecherche));
             
             // Vérification
             console.log(recherchePrincipal);
         
             return recherchePrincipal;
    }
         
    
     
     
    */
    toutesLesInfos() {
        return this.recipes;
    }
    /*
     ingredients() {
    
         const listeIngredients = [];
    
         this.recipes.map(recipe => {
             const ingredientsList = recipe.ingredients.map(ingredient => ingredient.ingredient);
     
             // Affiche la liste des ingrédients de chaque recette
     // console.log(ingredientsList); 
             
         ingredientsList.forEach((test) => listeIngredients.push(test))
             
    });
         
         // Suppression des doublons
         const listeIngredientsSansDoublons = [...new Set(listeIngredients)];
         
         return listeIngredientsSansDoublons;
    
     }
    
     appareils() {
         
         const listeAppareils = [];
         this.recipes.filter(recipe => {
     const appareilsList = recipe.appliance;
             // console.log(appareilsList);
         listeAppareils.push(appareilsList);
             
    });
         
         // Suppression des doublons
    const listeAppareilsSansDoublons = [...new Set(listeAppareils)];
         // console.log(listeAppareilsSansDoublons);
         return listeAppareilsSansDoublons;
         
    
     
     ustensils() {
    
         const listeUstensils = [];
    // console.log(listeUstensils);
         
         this.recipes.map(recipe => {
             const ustensils = recipe.ustensils;
     // console.log(ustensils);
     
     ustensils.forEach(element => listeUstensils.push(element))
         })
         
         // console.log(listeUstensils);
         
    const nouvelleListeUstensils = [];
         listeUstensils.map(unUstensils =>  nouvelleListeUstensils.push(unUstensils))
     // console.log(nouvelleListeUstensils);
         
         
         
         // Suppression des doublons
         const listeUstensilsSansDoublons = [...new Set(nouvelleListeUstensils)];
         // console.log(listeUstensilsSansDoublons);
         return listeUstensilsSansDoublons;
         
     }
     
    }
    */

}