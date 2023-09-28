# je veux filtrer par ingredient --> à faire

J'arrive sur l'interface
Je met un texte dans la zone de recherche #recherchePrincipal
    - je scrute l'input 
    - lorsqu'on entre un mot dans le input, j'appelle le service de recherche (SearchService)
    - je récupère un resultat (liste des recettes + filtres à positionner)
    - je génère la liste de recette
    - je retire les filtres ingredient présent dans les tags
    - je génère la liste de filtres
    - je génère la liste des tags


Le liste de recette et liste de filtres sont affichées.


Je clique sur la zone d'input ingredient #searchbarIngredients
Cet input doit permettre de filtrer sur la liste des filtres à positionner récupérés précédemment.
Je commence à taper un mot dans l'input


 <!-- Tu en es la -->

    - j'appelle une fonction qui recherche dans la liste des ingrédient déjà fournies 
        - une fonction ajouterUnTagIngredient(motRecherche, listeIngredientDejaFournis)
        - cette fonction retourne un resultat (uniquement des ingredients qui commencent par ce mot)
    - je clique sur l'ingrédient en question
        - j'enregistre l'ingredient dans la liste des filtres présent
        - je relance le (SearchService) avec le l'ingredient selectionn
            --> searchService(motRechercheDansLaBarre, {filtres:ingredients:['macaroni']})

    - je récupère un resultat (liste des recettes + filtres à positionner)

 <!-- Action en dessous à faire dans tous les cas -->
    - je génère la liste de recette
    - je retire les filtres ingredient présent dans les tags
    - je génère la liste de filtres
    - je génère la liste des tags
    