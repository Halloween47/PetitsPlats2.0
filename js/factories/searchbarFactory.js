function recipesFactory(data) {
    const { id, image, name, serving, ingredients, time, description, appliance, ustensils } = data;
    
    const photoRecette = `assets/img/${image}`;
    const nameRecipe = `${name}`;
    const ingredientsRecipe = `${ingredients}`;
    // console.log(nameRecipe);
    // console.log(ingredientsRecipe);
    
    function getRecipeCardDOM(titreRecette, infosRecetteTexte, photoJpg, ingredients) {
        const zoneCards = document.querySelector('.main-zoneCards');
        
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        zoneCards.appendChild(card);
        
        // Creation "zone image"
        const cardZoneImg = document.createElement('div');
        cardZoneImg.setAttribute("class", "card-zoneImage");
        card.appendChild(cardZoneImg);
        
        // Placement Image
        const cardImg = document.createElement('img');
        cardImg.setAttribute('class', 'card-img-top');
        cardImg.setAttribute('src', 'assets/img/' + photoJpg);
        // cardImg.setAttribute('alt', altRecette);
        cardZoneImg.appendChild(cardImg);
        
        // Creation "zone body"
        const cardZoneBody = document.createElement('div');
        cardZoneBody.setAttribute("class", "card-body");
        card.appendChild(cardZoneBody);
        
        // Zone du contenu de la Card
        const cardTitle = document.createElement('h5');
        cardTitle.setAttribute('class', 'card-title');
        cardTitle.textContent = titreRecette;
        cardZoneBody.appendChild(cardTitle);
        
        const motRecette = document.createElement('h6');
        motRecette.setAttribute('class','card-title-section');
        motRecette.textContent = 'Recette';
        cardZoneBody.appendChild(motRecette);
        
        const infosRecette = document.createElement('p');
        infosRecette.setAttribute('class',"card-text");
        infosRecette.textContent= infosRecetteTexte;
        cardZoneBody.appendChild(infosRecette);
        
        // Zone Ingredients
        const zoneIngredients = document.createElement('div');
        zoneIngredients.setAttribute('class', 'zone-ingredients');
        cardZoneBody.appendChild(zoneIngredients);
        
        const zoneIngredientsTitle = document.createElement('h6');
        zoneIngredientsTitle.setAttribute('class','card-title-section');
        zoneIngredientsTitle.textContent = "Ingrédients";
        zoneIngredients.appendChild(zoneIngredientsTitle);
        
        const zoneIngredientsDetails = document.createElement('div');
        zoneIngredientsDetails.setAttribute('class', 'zone-ingredients-details');
        zoneIngredients.appendChild(zoneIngredientsDetails);
        
        // console.log(ingredients);
        ingredients.forEach((ingredient) => {
            // console.log(ingredient);
            
            const zoneNomEtQuantity = document.createElement('div');
            zoneNomEtQuantity.setAttribute('class', 'nom-et-quantity');
            zoneIngredientsDetails.appendChild(zoneNomEtQuantity);
            
            const zoneIngredientsDetailsNom = document.createElement('p');
            zoneIngredientsDetailsNom.setAttribute('class', 'zone-ingredients-details-nom');
            zoneIngredientsDetailsNom.textContent = ingredient.ingredient;
            zoneNomEtQuantity.appendChild(zoneIngredientsDetailsNom);
            
            const zoneIngredientsDetailsQuantity = document.createElement('p');
            zoneIngredientsDetailsQuantity.setAttribute('class', 'zone-ingredients-details-quantity');
            zoneIngredientsDetailsQuantity.textContent = ingredient.quantity;
            zoneNomEtQuantity.appendChild(zoneIngredientsDetailsQuantity);
            
            
        })
        
        // return zoneCards;
        return card;
        
    }
    
    return { getRecipeCardDOM }
    
}