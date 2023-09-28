// Recuperation du Modele
import { RecipesService } from "../service/searchService";

// DOM element
const recherchePrincipal = document.getElementById('recherchePrincipal');
const ingredientList = document.querySelector('.ingredient-list');

// Utilisation du Modèle
let searchService = new RecipesService();
let searchText = "";
export let filtres = {
  ingredients: [],
  ustensils: [],
  appliance: []
}

// ?
let tableauRecettesFiltrer = [];
let tagsFactory = new TagsFactory();
export let tableauTags = [];
MAJTableauTags();
/***************************************************/
/*FONCTIONS*/
/***************************************************/
function videLaListeDesRecettes() {
  document.querySelector('.main-zoneCards').innerHTML = "";
}

export function lanceLaRechercheEtFaitLeRendu() {
  let resultat = searchService.search(searchText, filtres);
  console.log(resultat.recettes.length);
  
  const zoneListeIngredients = document.querySelector('.ingredient-list');
  const zoneListeAppareils = document.querySelector('.appareils-list');
  const zoneListeUstensils = document.querySelector('.ustensils-list');
  zoneListeIngredients.innerHTML = "";
  zoneListeAppareils.innerHTML = "";
  zoneListeUstensils.innerHTML = "";

  const nombreRecette = document.querySelector('.nombreRecette');
  nombreRecette.textContent = resultat.recettes.length + " recettes";
  
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

export function afficheLeTag(tableauTags, texteTag) {
  const zoneTags = document.querySelector('.zoneTags');
  zoneTags.innerHTML = "";

  let tableauTagsSansDoublons = [...new Set(tableauTags)];
  tableauTagsSansDoublons.forEach((tag) => {
    tagsFactory.getTagCardDOM(tag);
  })
  
  /********* */
  let croixDeToutLesTags = document.querySelectorAll('.fa-xmark');
  croixDeToutLesTags.forEach((croixTag) => {
    croixTag.addEventListener('click', (event) => {
      // MAJTableauTags();
      fermerTag(tableauTags, texteTag, event);

      let resultat = searchService.search(searchText, filtres);
      afficheLaListeDesRecettes(resultat)
    })
  })
  /********* */
}

function fermerTag(tableauTag, texteTag, event) {
  const tagASupprimer = event.target.parentElement;
  tagASupprimer.remove();

  // On prends le texte cliqué
  const texteElementASupprimer = tagASupprimer.firstChild.textContent;
  // on prends le tableau 
  const tableauSansElementSupprime = tableauTags.filter(element => element != texteElementASupprimer);
  tableauTags = [...new Set(tableauSansElementSupprime)] ;
  console.log(tableauTags);

  
}

function MAJTableauTags( nouveauTableauMAJ, nouvelleElement) {
  
  
  // tableauTags.push(nouvelleElement);
  // tableauTags = tableauTags.filter(element => element != undefined)
  // console.log(tableauTags);

  // let tableauTagsSansDoublons = [...new Set(tableauTags)];
  // console.log(tableauTagsSansDoublons);

  // return tableauTagsSansDoublons

  return tableauTags
}
/***************************************************/
/*GESTION DES FILTRES*/
/***************************************************/
/* Filtre "ingredients" */
export const toutLesIngredientsPourLeBoutonFiltre = searchService.toutLesIngredients();
toutLesIngredientsPourLeBoutonFiltre.forEach((ingredient) => {
  tagsFactory.getIngredientCardDOM(ingredient);
});

/* Filtre "appareils" */
const toutLesAppareilsPourLeBoutonFiltre = searchService.toutLesAppareils();
toutLesAppareilsPourLeBoutonFiltre.forEach((appareil) => {
  tagsFactory.getAppareilCardDOM(appareil);
});

/* Filtre "ustensils" */
const toutLesUstensilsPourLeBoutonFiltre = searchService.toutLesUstensils();
toutLesUstensilsPourLeBoutonFiltre.forEach((ustensil) => {
  tagsFactory.getUstensilCardDOM(ustensil);
});

/***************************************************/
/*GESTION DES TAGS*/
/***************************************************/
const containerIngredients = document.querySelector('.ingredient-list');
containerIngredients.addEventListener('click', (event) => {
  if (event.target.classList.contains('li-ingredients')) {
    const element = event.target;
    filtres.ingredients.push(element.textContent)
    let resultat = searchService.search(searchText, filtres);
    videLaListeDesRecettes();
    afficheLaListeDesRecettes(resultat);
    const zoneListeIngredients = document.querySelector('.ingredient-list');
    const zoneListeAppareils = document.querySelector('.appareils-list');
    const zoneListeUstensils = document.querySelector('.ustensils-list');
    afficheLesFiltres(zoneListeIngredients, resultat, zoneListeUstensils, zoneListeAppareils);

    // MAJTableauTags(element.textContent);
// const tabTagsMAJ = MAJTableauTags();
// console.log(tabTagsMAJ);
//     afficheLeTag(tabTagsMAJ, element.textContent);
// const nouveauTabTagsMAJ = MAJTableauTags(element.textContent)
//     afficheLeTag(nouveauTabTagsMAJ, element.textContent);
    
    tableauTags.push(element.textContent);
    afficheLeTag(tableauTags)
  }
  
})
const containerAppareils = document.querySelector('.appareils-list');
containerAppareils.addEventListener('click', (event) => {
  if (event.target.classList.contains('li-appareils')) {
    const element = event.target;
    filtres.appliance.push(element.textContent)
    let resultat = searchService.search(searchText, filtres);
    videLaListeDesRecettes();
    
    afficheLaListeDesRecettes(resultat);
    
    const zoneListeIngredients = document.querySelector('.ingredient-list');
    const zoneListeAppareils = document.querySelector('.appareils-list');
    const zoneListeUstensils = document.querySelector('.ustensils-list');
    afficheLesFiltres(zoneListeIngredients, resultat, zoneListeUstensils, zoneListeAppareils);
    tableauTags.push(element.textContent);
    afficheLeTag(tableauTags);    
  }
  
})
const containerUstensils = document.querySelector('.ustensils-list');
containerUstensils.addEventListener('click', (event) => {
  if (event.target.classList.contains('li-ustensils')) {
    const element = event.target;
    filtres.ustensils.push(element.textContent)
    let resultat = searchService.search(searchText, filtres);
    videLaListeDesRecettes();
    
    afficheLaListeDesRecettes(resultat);
    
    const zoneListeIngredients = document.querySelector('.ingredient-list');
    const zoneListeAppareils = document.querySelector('.appareils-list');
    const zoneListeUstensils = document.querySelector('.ustensils-list');
    afficheLesFiltres(zoneListeIngredients, resultat, zoneListeUstensils, zoneListeAppareils);
    tableauTags.push(element.textContent);
    afficheLeTag(tableauTags);    
  }
  
})

/***************************************************/
/*BARRE DE RECHERCHE*/
/***************************************************/
recherchePrincipal.addEventListener("input", (event) => {
  searchText = event.target.value.trim().toLowerCase();
  
  if (searchText.length >= 3) {
    const zoneCards = document.querySelector('.main-zoneCards');
    
    // Remise à zéro de la zone de résultat
    zoneCards.innerHTML = "";
    
    lanceLaRechercheEtFaitLeRendu();
    
  }
  
  
});



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