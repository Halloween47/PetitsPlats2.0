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
        return this.recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(motRecherche)
        );
        
        
    }
    
    toutesLesInfos() {
        return this.recipes;
    }
    
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
        
    }
    
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