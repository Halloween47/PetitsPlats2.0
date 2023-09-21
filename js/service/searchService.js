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

    // TODO: a continuer avec Clément
    search(motRecherche, filtresSelectionnes) {
        let resultat = this.recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(motRecherche)
        );

        // Fonctionnement des filtres
        if (filtresSelectionnes.appliance && filtresSelectionnes.appliance.length > 0) {
            resultat = resultat.filter((recette) =>
                filtresSelectionnes.appliance.includes(recette.appliance)
            );
        }

        if (filtresSelectionnes.ingredients && filtresSelectionnes.ingredients.length > 0) {
            resultat = resultat.filter((recette) =>
                filtresSelectionnes.ingredients.every((ingredient) =>
                    recette.ingredients.some((recetteIngredient) =>
                        recetteIngredient.ingredient.includes(ingredient)
                    )
                )
            );
        }

        if (filtresSelectionnes.ustensils && filtresSelectionnes.ustensils.length > 0) {
            resultat = resultat.filter((recette) =>
                filtresSelectionnes.ustensils.every((ustensil) =>
                    recette.ustensils.includes(ustensil)
                )
            );
        }

        const ingredientsSet = new Set();
        const ustensilsSet = new Set();
        const applianceSet = new Set();

        resultat.forEach(recipe => {
            applianceSet.add(recipe.appliance);
            recipe.ingredients.forEach(ingredient => ingredientsSet.add(ingredient.ingredient));
            recipe.ustensils.forEach(ustensil => ustensilsSet.add(ustensil));
        });

        return {
            recettes: resultat,
            filtres: {
                ingredients: Array.from(ingredientsSet),
                ustensils: Array.from(ustensilsSet),
                appliance: Array.from(applianceSet)
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