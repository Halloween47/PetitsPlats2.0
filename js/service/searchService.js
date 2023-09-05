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

   /* TODO: a continuer avec Clément
    search(motRecherche, filtreRecherche) {
        let resultat = this.recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(motRecherche)
        );

        const ingredientsSet = new Set();
        const ustensilsSet = new Set();
        const applianceSet = new Set();

        resultat.forEach(recipe => {
            applianceSet.add(recipe.appliance);
            recipe.ingredients.forEach(ingredient => ingredientsSet.add(ingredient.ingredient));
            recipe.ustensils.forEach(ustensil => ustensilsSet.add(ustensil));
        });
        
        return {
            recettes: new Array(resultat),
            filtres: {
                ingredients: Array.from(ingredientsSet),
                ustensils: Array.from(ustensilsSet),
                appliance: Array.from(applianceSet)
            }
        }
    }
    */
    search(motRecherche, filtreRecherche) {
        return {
            "recettes": [
                [
                    {
                        "id": 26,
                        "image": "Recette26.jpg",
                        "name": "Soupe de tomates",
                        "servings": 2,
                        "ingredients": [
                            {
                                "ingredient": "Tomate",
                                "quantity": 6
                            },
                            {
                                "ingredient": "Pommes de terre",
                                "quantity": 1
                            },
                            {
                                "ingredient": "Huile d'olives"
                            },
                            {
                                "ingredient": "Oignon",
                                "quantity": 1
                            },
                            {
                                "ingredient": "Ail",
                                "quantity": 1,
                                "unit": "gousses"
                            }
                        ],
                        "time": 25,
                        "description": "Verser de l'huile dans une cocotte minute couper les légumes et les verser dans l'huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer aux mixer. Servir.",
                        "appliance": "Mixer",
                        "ustensils": [
                            "cocotte minute",
                            "couteau"
                        ]
                    },
                    {
                        "id": 27,
                        "image": "Recette27.jpg",
                        "name": "Soupe à l'oseille",
                        "servings": 4,
                        "ingredients": [
                            {
                                "ingredient": "Oseille",
                                "quantity": 2
                            },
                            {
                                "ingredient": "Oeuf",
                                "quantity": 1
                            },
                            {
                                "ingredient": "Crème fraîche",
                                "quantity": 4,
                                "unit": "cuillère à soupe"
                            },
                            {
                                "ingredient": "Vermicelles",
                                "quantity": 1,
                                "unit": "verres"
                            },
                            {
                                "ingredient": "Beurre salé",
                                "quantity": 50,
                                "unit": "grammes"
                            }
                        ],
                        "time": 15,
                        "description": "Faire fondre l'oseille avec du beurre demi sel, ajouter un litre d'eau. Ajouter les vermicelles. Laisser cuire. une fois prêt, sortir du feu et après 5 minutes ajouter le jaune d'oeuf et la crème fraîche",
                        "appliance": "Casserole",
                        "ustensils": [
                            "couteau",
                            "cuillère en bois"
                        ]
                    },
                    {
                        "id": 28,
                        "image": "Recette28.jpg",
                        "name": "Soupe de poireaux",
                        "servings": 4,
                        "ingredients": [
                            {
                                "ingredient": "Poireau",
                                "quantity": 3
                            },
                            {
                                "ingredient": "Pommes de terre",
                                "quantity": 400,
                                "unit": "grammes"
                            },
                            {
                                "ingredient": "Oseille",
                                "quantity": 75,
                                "unit": "grammes"
                            },
                            {
                                "ingredient": "Beurre",
                                "quantity": 50,
                                "unit": "grammes"
                            },
                            {
                                "ingredient": "Crème fraîche",
                                "quantity": 10,
                                "unit": "cl"
                            }
                        ],
                        "time": 80,
                        "description": "Émincer les blanc de poireaux et les faire chauffer dans 25 grammes de beurre. AJouter les pommes de terres coupées en morceaux. Ajouter l'eau et laisser mijoter pour 45 minutes. Chauffer l'oseille avec le beurre restant puis incorporer le tout. Mixez. Ajoutez la crème. Bon appetit.",
                        "appliance": "Mixer",
                        "ustensils": [
                            "casserole",
                            "couteau"
                        ]
                    }
                ]
            ],
            "filtres": {
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
                    "Mixer",search
                    "Casserole"
                ]
            }
        }
    }

    toutesLesInfos() {
        return this.recipes;
    }
}