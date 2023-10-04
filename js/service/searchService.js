import recipes from '../data/recipes';

export class RecipesService {
    
    constructor() {
        this.recipes = recipes;
    }
    
    /*
    "filtreRecherche": {
        "ingredients": [
            "Tomate",
            "Pommes de terre",
            "Huile d'olives",
            "Oignon",
            "Ail",
            "Oseille",
            "Oeuf",
            "Crème fraîche",
            "Vermicelles",
            "Beurre salé",
            "Poireau",
            "Beurre"
        ],
        "ustensils": [
            "cocotte minute",
            "couteau",
            "cuillère en bois",
            "casserole"
        ],
        "appliance": [
            "Mixer",
            "Casserole"
        ]
    }*/
    
    search(motRecherche, filtresSelectionnes) {
        let resultat = [];
        for (let i = 0; i < this.recipes.length; i++) {
            const recipe = this.recipes[i];
            if (
                recipe.name.toLowerCase().includes(motRecherche) ||
                recipe.appliance.toLowerCase().includes(motRecherche) ||
                recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(motRecherche)) ||
                recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(motRecherche))
                ) {
                    resultat.push(recipe);
                }
            }
            
            
            // Fonctionnement des filtres
            if (filtresSelectionnes.appliance && filtresSelectionnes.appliance.length > 0) {
                let filteredResult = [];
                let i = 0;
                while (i < resultat.length) {
                    const recette = resultat[i];
                    if (filtresSelectionnes.appliance.includes(recette.appliance)) {
                        filteredResult.push(recette);
                    }
                    i++;
                }
                resultat = filteredResult;
            }
            
            
            if (filtresSelectionnes.ingredients && filtresSelectionnes.ingredients.length > 0) {
                let filteredResult = [];
                let i = 0;
                while (i < resultat.length) {
                    const recette = resultat[i];
                    if (filtresSelectionnes.ingredients.every(ingredient =>
                        recette.ingredients.some(recetteIngredient =>
                            recetteIngredient.ingredient.includes(ingredient)
                            )
                            )) {
                                filteredResult.push(recette);
                            }
                            i++;
                        }
                        resultat = filteredResult;
                    }
                    
                    
                    if (filtresSelectionnes.ustensils && filtresSelectionnes.ustensils.length > 0) {
                        let filteredResult = [];
                        let i = 0;
                        while (i < resultat.length) {
                            const recette = resultat[i];
                            if (filtresSelectionnes.ustensils.every(ustensil =>
                                recette.ustensils.includes(ustensil)
                                )) {
                                    filteredResult.push(recette);
                                }
                                i++;
                            }
                            resultat = filteredResult;
                        }
                        
                        
                        const ingredientsSet = new Set();
                        const ustensilsSet = new Set();
                        const applianceSet = new Set();
                        
                        for (let i = 0; i < resultat.length; i++) {
                            const recipe = resultat[i];
                            applianceSet.add(recipe.appliance);
                            
                            for (let j = 0; j < recipe.ingredients.length; j++) {
                                const ingredient = recipe.ingredients[j].ingredient;
                                ingredientsSet.add(ingredient);
                            }
                            
                            for (let k = 0; k < recipe.ustensils.length; k++) {
                                const ustensil = recipe.ustensils[k];
                                ustensilsSet.add(ustensil);
                            }
                        }
                        
                        
                        return {
                            recettes: resultat,
                            filtres: {
                                ingredients: Array.from(ingredientsSet),
                                ustensils: Array.from(ustensilsSet),
                                appliance: Array.from(applianceSet)
                            }
                        }
                    }
                    
                    searchFiltres(event, motRecherche, tableauEnCours) {
                        // console.log(motRecherche);
                        
                        if (event.target.id === "searchbarIngredients") {
                            console.log('Je suis dans la barre de recherche Ingredient');
                            
                            if ( tableauEnCours === undefined) {
                                console.log('aucun tableau en cours');
                                const listeDeToutLesIngredients = [];
                                this.recipes.forEach((recipe) => {
                                    recipe.ingredients.forEach((ingredient) => {
                                        listeDeToutLesIngredients.push(ingredient.ingredient.toLowerCase());
                                    })
                                })
                                const listeDeToutLesIngredientsSansDoublons = [...new Set(listeDeToutLesIngredients)];
                                const ingredientRecherche = listeDeToutLesIngredientsSansDoublons.filter(ingredient => ingredient.includes(motRecherche));
                                
                                return ingredientRecherche
                            }
                        }
                        if (event.target.id === "searchbarAppareils") {
                            console.log('Je suis dans appareils');
                            
                            if ( tableauEnCours === undefined) {
                                console.log('aucun tableau en cours');
                                const listeDeToutLesAppareils = [];
                                this.recipes.forEach(recipe => listeDeToutLesAppareils.push(recipe.appliance.toLowerCase())
                                )
                                const listeDeToutLesAppareilsSansDoublons = [...new Set(listeDeToutLesAppareils)];
                                const appareilRecherche = listeDeToutLesAppareilsSansDoublons.filter(appareil => appareil.includes(motRecherche));
                                
                                return appareilRecherche
                            }
                        }
                        
                        if (event.target.id === "searchbarUstensils") {
                            console.log('Je suis dans ustensils');
                            
                            if ( tableauEnCours === undefined) {
                                console.log('aucun tableau en cours');
                                const listeDeToutLesUstensils = [];
                                this.recipes.forEach(recipe => recipe.ustensils.forEach(ustensil => listeDeToutLesUstensils.push(ustensil.toLowerCase()))
                                )
                                const listeDeToutLesUstensilsSansDoublons = [...new Set(listeDeToutLesUstensils)];
                                const ustensilRecherche = listeDeToutLesUstensilsSansDoublons.filter(ustensil => ustensil.includes(motRecherche));
                                
                                return ustensilRecherche
                            }
                        }
                        
                    }
                    
                    toutesLesInfos() {
                        return this.recipes;
                    }
                    
                    toutLesIngredients() {
                        const toutLesIngredients = [];
                        this.recipes.forEach((recipe) => {
                            recipe.ingredients.forEach((ingredient) => {
                                toutLesIngredients.push(ingredient.ingredient)
                            })
                        })
                        const toutLesIngredientsSansRepetition = [...new Set(toutLesIngredients)]
                        
                        return toutLesIngredientsSansRepetition;
                    }
                    
                    toutLesAppareils() {
                        const toutLesAppareils = [];
                        this.recipes.forEach((recipe) => {
                            toutLesAppareils.push(recipe.appliance);
                        })
                        const toutLesAppareilsSansRepetition = [...new Set(toutLesAppareils)]
                        
                        return toutLesAppareilsSansRepetition;
                    }
                    
                    toutLesUstensils() {
                        const toutLesUstensils = [];
                        this.recipes.forEach((recipe) => {
                            recipe.ustensils.forEach((ustensil) => {
                                toutLesUstensils.push(ustensil)
                            })
                        })
                        const toutLesUstensilsSansRepetition = [...new Set(toutLesUstensils)]
                        
                        return toutLesUstensilsSansRepetition;
                    }
                }