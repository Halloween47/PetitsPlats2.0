// Recuperation du Modele
import { RecipesService } from "../service/searchService";
import { lanceLaRechercheEtFaitLeRendu } from "../controlleurs/functions";

// Utilisation du Modèle
export let searchService = new RecipesService();

export let searchText = "";
export let filtres = {
  ingredients: [],
  ustensils: [],
  appliance: []
}

// DOM element
const recherchePrincipal = document.getElementById('recherchePrincipal');

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

const boutonRecherche = document.querySelector('#buttonSearch');
boutonRecherche.addEventListener('click', (event) => {
  
  searchText = event.target.value.trim().toLowerCase();
  const zoneCards = document.querySelector('.main-zoneCards');
    
  // Remise à zéro de la zone de résultat
  zoneCards.innerHTML = "";
  
  lanceLaRechercheEtFaitLeRendu();
})

