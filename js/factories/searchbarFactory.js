function recipesFactory(data) {
    const { id, image, name, serving, ingredients, time, description, appliance, ustensils } = data;
    
    const photoRecette = `assets/img/${image}`;
    const nameRecipe = `${name}`
    
    function getRecipeCardDOM() {
        // Affichage console des retour de nom
        console.log(nameRecipe);
        const aside = document.createElement( 'aside' );
        
        ////////////////////////////////////////////////////////////////////
        const zoneCardRecipe = document.querySelector('.main-zoneCards');
        zoneCardRecipe.setAttribute('class', 'main-zoneCards container d-flex');
        
        
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('style', 'width: 25rem');
        
        const cardImage = document.createElement('img');
        cardImage.setAttribute('class', 'card-img-top')
        cardImage.setAttribute('src', photoRecette);
        
        
        
        zoneCardRecipe.appendChild(card)
        card.appendChild(cardImage)
        ////////////////////////////////////////////////////////////////////
        
        
        
        return aside;
        
    }
    
    return { getRecipeCardDOM }
    
}