function getUstensilCardDOM(ustensil) {
    // Accès à la zone liste
    const zoneListeUstensils = document.querySelector('.ustensils-list');
    
    let unUstensil = document.createElement('li');
    unUstensil.setAttribute('class', 'px-3 py-1')
    unUstensil.textContent = ustensil;
    
    zoneListeUstensils.appendChild(unUstensil);
    
    return zoneListeUstensils;
    
}