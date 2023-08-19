function tagsFactory() {
    
    function getIngredientCardDOM(ingredient) {
        // Accès à la zone liste
        const zoneListeIngredients = document.querySelector('.ingredient-list');
        
        let unIngredient = document.createElement('li');
        unIngredient.setAttribute('class', 'px-3 py-1 tagsList');
        unIngredient.textContent = ingredient;
        
        zoneListeIngredients.appendChild(unIngredient);
        
        return zoneListeIngredients;
        
    }
    
    function getAppareilCardDOM(appareil) {
        // Accès à la zone liste
        const zoneListeAppareils = document.querySelector('.appareils-list');
        
        let unAppareil = document.createElement('li');
        unAppareil.setAttribute('class', 'px-3 py-1 tagsList')
        unAppareil.textContent = appareil;
        
        zoneListeAppareils.appendChild(unAppareil);
        
        return zoneListeAppareils;
        
    }
    
    function getUstensilCardDOM(ustensil) {
        // Accès à la zone liste
        const zoneListeUstensils = document.querySelector('.ustensils-list');
        
        let unUstensil = document.createElement('li');
        unUstensil.setAttribute('class', 'px-3 py-1 tagsList')
        unUstensil.textContent = ustensil;
        
        zoneListeUstensils.appendChild(unUstensil);
        
        return zoneListeUstensils;
        
    }
    
    function getTagCardDOM(elementClique) {
        // Accès à la zone des TAGS
        const zoneTags = document.querySelector('.zoneTags');
        
        let unTag = document.createElement('div');
        unTag.setAttribute('class', 'tag d-flex justify-content-between align-items-center mx-3 p-3');
        
        let tagTexte  = document.createElement('div');
        tagTexte.textContent = elementClique;
        unTag.appendChild(tagTexte);

        // Croix de fermeture
        let fermetureTag = document.createElement('i');
        fermetureTag.setAttribute('class', 'fa-solid fa-xmark');
        unTag.appendChild(fermetureTag);


        zoneTags.appendChild(unTag);

        return zoneTags;
    }
    
    return { getIngredientCardDOM, getAppareilCardDOM, getUstensilCardDOM, getTagCardDOM }
    
}