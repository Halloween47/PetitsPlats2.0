// Recuperation du Modele
import { RecipesService } from "../service/searchService";

// DOM element
const recherchePrincipal = document.getElementById('recherchePrincipal');

// Utilisation du Modèle
let searchService = new RecipesService();
let searchText = "";
let filtres = {
  ingredients: [],
  ustensils: [],
  appliance: []
}

// ?
let tableauRecettesFiltrer = [];
let tagsFactory = new TagsFactory();

/* Filtre "ingredients" */
const toutLesIngredientsPourLeBoutonFiltre = searchService.toutLesIngredients();
toutLesIngredientsPourLeBoutonFiltre.forEach((ingredient) => {
  tagsFactory.getIngredientCardDOM(ingredient);
});
document.querySelectorAll('.li-ingredients').forEach((element) => {
  element.addEventListener('click', () => {
    filtres.ingredients.push(element.textContent)
    let resultat = searchService.search(searchText, filtres);
    const zoneListeIngredients = document.querySelector('.ingredient-list');
    const zoneListeAppareils = document.querySelector('.appareils-list');
    const zoneListeUstensils = document.querySelector('.ustensils-list');
    afficheLesFiltres(zoneListeIngredients, resultat, zoneListeUstensils, zoneListeAppareils);
  console.log(filtres);
  tagsFactory.getTagCardDOM(element.textContent)
  
  console.log(filtres);
  })
})

/* Filtre "appareils" */
const toutLesAppareilsPourLeBoutonFiltre = searchService.toutLesAppareils();
toutLesAppareilsPourLeBoutonFiltre.forEach((appareil) => {
  tagsFactory.getAppareilCardDOM(appareil);
});
document.querySelectorAll('.li-appareils').forEach((element) => {
  element.addEventListener('click', () => {
    filtres.appliance.push(element.textContent)
    let resultat = searchService.search(searchText, filtres);
    const zoneListeIngredients = document.querySelector('.ingredient-list');
    const zoneListeAppareils = document.querySelector('.appareils-list');
    const zoneListeUstensils = document.querySelector('.ustensils-list');
    afficheLesFiltres(zoneListeIngredients, resultat, zoneListeUstensils, zoneListeAppareils);
    console.log(filtres);
    tagsFactory.getTagCardDOM(element.textContent)

  })
})

/* Filtre "ustensils" */
const toutLesUstensilsPourLeBoutonFiltre = searchService.toutLesUstensils();
toutLesUstensilsPourLeBoutonFiltre.forEach((ustensil) => {
  tagsFactory.getUstensilCardDOM(ustensil);
});
document.querySelectorAll('.li-ustensils').forEach((element) => {
  element.addEventListener('click', () => {
    filtres.ustensils.push(element.textContent)
    let resultat = searchService.search(searchText, filtres);
    const zoneListeIngredients = document.querySelector('.ingredient-list');
    const zoneListeAppareils = document.querySelector('.appareils-list');
    const zoneListeUstensils = document.querySelector('.ustensils-list');
    afficheLesFiltres(zoneListeIngredients, resultat, zoneListeUstensils, zoneListeAppareils);
    tagsFactory.getTagCardDOM(element.textContent)

  })
})

function videLaListeDesRecettes() {
  document.querySelector('.main-zoneCards').innerHTML = "";
}

function lanceLaRechercheEtFaitLeRendu() {
  let resultat = searchService.search(searchText, filtres);
  console.log(filtres);
  
  const zoneListeIngredients = document.querySelector('.ingredient-list');
  const zoneListeAppareils = document.querySelector('.appareils-list');
  const zoneListeUstensils = document.querySelector('.ustensils-list');
  zoneListeIngredients.innerHTML = "";
  zoneListeAppareils.innerHTML = "";
  zoneListeUstensils.innerHTML = "";
  
  // Création cartes recettes
  resultat.recettes.forEach((recipe) => {
    getRecipeCardDOM(recipe);
  });
  
  // MAJ des filtres
  resultat.filtres.ingredients.forEach((ingredient) => {
    tagsFactory.getIngredientCardDOM(ingredient);
  });
  resultat.filtres.appliance.forEach((appareil) => {
    tagsFactory.getAppareilCardDOM(appareil);
  });
  resultat.filtres.ustensils.forEach((ustensil) => {
    tagsFactory.getUstensilCardDOM(ustensil);
  });
  
  
  document.querySelectorAll('.li-ingredients').forEach((element) => {
    element.addEventListener('click', () => {
      videLaListeDesRecettes();
      
      filtres.ingredients.push(element.textContent)
      
      let resultat = searchService.search(searchText, filtres);
      console.log(JSON.stringify(resultat));
      afficheLaListeDesRecettes(resultat);
      afficheLesFiltres(zoneListeIngredients, resultat, zoneListeUstensils, zoneListeAppareils);
    })
  })
  
  
  document.querySelectorAll('.li-ustensils').forEach((element) => {
    element.addEventListener('click', () => {
      videLaListeDesRecettes();
      
      filtres.ustensils.push(element.textContent)
      
      let resultat = searchService.search(searchText, filtres);
      afficheLaListeDesRecettes(resultat);
      afficheLesFiltres(zoneListeIngredients, resultat, zoneListeUstensils, zoneListeAppareils);
    })
  })
  
  
  document.querySelectorAll('.li-appareils').forEach((element) => {
    element.addEventListener('click', () => {
      videLaListeDesRecettes();
      
      filtres.appliance.push(element.textContent)
      
      let resultat = searchService.search(searchText, filtres);
      console.log(resultat);
      afficheLaListeDesRecettes(resultat);
      afficheLesFiltres(zoneListeIngredients, resultat, zoneListeUstensils, zoneListeAppareils);
      
      tagsFactory.getTagCardDOM(element.textContent)
    })
    
  })
  
  
  
  /*
  // Création nouvelle liste des boutons filtres
  resultat.filtres.forEach((filtre) => {
    tagsFactory.getIngredientCardDOM(filtre.ingredients)
    tagsFactory.getAppareilCardDOM(filtre.appliance)
    tagsFactory.getUstensilCardDOM(filtre.ustensils)
  })
  */
  
}

recherchePrincipal.addEventListener("input", (event) => {
  searchText = event.target.value.trim().toLowerCase();
  
  if (searchText.length >= 3) {
    const zoneCards = document.querySelector('.main-zoneCards');
    
    // Remise à zéro de la zone de résultat
    zoneCards.innerHTML = "";
    
    lanceLaRechercheEtFaitLeRendu();
    
  }
  
  
});





function afficheLesFiltres(zoneListeIngredients, resultat, zoneListeUstensils, zoneListeAppareils) {
  zoneListeIngredients.innerHTML = "";
  resultat.filtres.ingredients.forEach((ingredient) => {
    tagsFactory.getIngredientCardDOM(ingredient);
  });
  
  zoneListeUstensils.innerHTML = "";
  resultat.filtres.ustensils.forEach((ustensil) => {
    tagsFactory.getUstensilCardDOM(ustensil);
  });
  
  zoneListeAppareils.innerHTML = "";
  resultat.filtres.appliance.forEach((appareil) => {
    tagsFactory.getAppareilCardDOM(appareil);
  });
}

function afficheLaListeDesRecettes(resultat) {
  resultat.recettes.forEach((recipe) => {
    getRecipeCardDOM(recipe);
  });
}
function clicFiltres(elementClique) {
  elementClique.addEventListener('click', () => {
    console.log('clic fonctionne encore');
  })
}
/*
// Bouton filtre fonctionnement recherche

appareilsList.addEventListener("input", (event) => {
  filtres.appliance.push(ceQuiAEteSelectionne) ;
  lanceLaRechercheEtFaitLeRendu();
});

ustensilsList.addEventListener("input", (event) => {
  filtres.ustensils.push(ceQuiAEteSelectionne) ;
  lanceLaRechercheEtFaitLeRendu();
});

ingredientsList.addEventListener("input", (event) => {
  filtres.ingredients.push(ceQuiAEteSelectionne) ;
  lanceLaRechercheEtFaitLeRendu();
});
*/

// lanceLaRechercheEtFaitLeRendu();