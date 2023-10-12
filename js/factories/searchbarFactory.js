function getRecipeCardDOM(recette) {
    
    const zoneCards = document.querySelector('.main-zoneCards');
    
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    
    const span = document.createElement('span');
    // span.textContent = JSON.stringify(recette);
    
    
    
    /* Creation "zone image" */
    const cardZoneImg = document.createElement('div');
    cardZoneImg.setAttribute("class", "card-zoneImage");
    card.appendChild(cardZoneImg);
    // Placement Image
    const cardImg = document.createElement('img');
    cardImg.setAttribute('class', 'card-img-top');
    cardImg.setAttribute('src', 'assets/img/' + recette.image);
    cardZoneImg.appendChild(cardImg);
    
    // Creation "zone body"
    const cardZoneBody = document.createElement('div');
    cardZoneBody.setAttribute("class", "card-body");
    card.appendChild(cardZoneBody);
    
    // Zone du contenu de la Card
    const cardTitle = document.createElement('h5');
    cardTitle.setAttribute('class', 'card-title');
    cardTitle.textContent = recette.name;
    cardZoneBody.appendChild(cardTitle);
    
    const motRecette = document.createElement('h6');
    motRecette.setAttribute('class', 'card-title-section');
    motRecette.textContent = 'Recette';
    cardZoneBody.appendChild(motRecette);
    
    const recetteTexte = document.createElement('p');
    recetteTexte.setAttribute('class', 'card-text');
    recetteTexte.textContent = recette.description;
    cardZoneBody.appendChild(recetteTexte);
    
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
    
    const zoneIngredientsDetailsTexte = document.createElement('p');
    zoneIngredients.appendChild(zoneIngredientsDetailsTexte);
    
    let ingredients = recette.ingredients;
    
    
    ingredients.forEach((ingredient) => {
        
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
    
    
    
    zoneCards.appendChild(card);
    zoneCards.appendChild(span);

    return card;
}

function getNoResultCardDOM(searchText) {
    const zoneCards = document.querySelector('.main-zoneCards');
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    zoneCards.appendChild(card);

    // Creation "zone body"
    const cardZoneBody = document.createElement('div');
    cardZoneBody.setAttribute("class", "card-body");
    card.appendChild(cardZoneBody);

    // Zone du contenu de la Card
    const cardTitle = document.createElement('h5');
    cardTitle.setAttribute('class', 'card-title');
    cardTitle.textContent = 'Aucune recette ne contient le mot "'  + searchText + '"';
    cardZoneBody.appendChild(cardTitle);

    return card;
}