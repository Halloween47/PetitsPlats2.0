import { searchService, searchText, filtres } from '../controlleurs/search';
import { tableauTags, tagsFactory } from '../controlleurs/tags';

export function videLaListeDesRecettes() {
    document.querySelector('.main-zoneCards').innerHTML = "";
}
export function lanceLaRechercheEtFaitLeRendu() {
    let resultat = searchService.search(searchText, filtres);
    console.log(resultat.recettes.length);
    if (resultat.recettes.length === 0) {
        console.log('pas de resultat');
        getNoResultCardDOM();
        
    }
    
    const zoneListeIngredients = document.querySelector('.ingredient-list');
    const zoneListeAppareils = document.querySelector('.appareils-list');
    const zoneListeUstensils = document.querySelector('.ustensils-list');
    zoneListeIngredients.innerHTML = "";
    zoneListeAppareils.innerHTML = "";
    zoneListeUstensils.innerHTML = "";
    
    // const nombreRecette = document.querySelector('.nombreRecette');
    // nombreRecette.textContent = resultat.recettes.length + " recettes";
    nombreRecetteMAJ(resultat)
    
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
            // console.log(JSON.stringify(resultat));
            afficheLaListeDesRecettes(resultat);
            afficheLesFiltres(zoneListeIngredients, resultat, zoneListeUstensils, zoneListeAppareils);
            nombreRecetteMAJ(resultat);
        })
    })
    
    
    document.querySelectorAll('.li-ustensils').forEach((element) => {
        element.addEventListener('click', () => {
            videLaListeDesRecettes();
            
            filtres.ustensils.push(element.textContent)
            
            let resultat = searchService.search(searchText, filtres);
            afficheLaListeDesRecettes(resultat);
            afficheLesFiltres(zoneListeIngredients, resultat, zoneListeUstensils, zoneListeAppareils);
            nombreRecetteMAJ(resultat);
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
            nombreRecetteMAJ(resultat);
            
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
export function afficheLesFiltres(zoneListeIngredients, resultat, zoneListeUstensils, zoneListeAppareils) {
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
export function afficheLaListeDesRecettes(resultat) {
    resultat.recettes.forEach((recipe) => {
        getRecipeCardDOM(recipe);
    });
}
export function afficheLeTag() {
    const zoneTags = document.querySelector('.zoneTags');
    zoneTags.innerHTML = "";
    
    console.log(tableauTags);
    let tableauTagsSansDoublons = [...new Set(tableauTags)];
    tableauTagsSansDoublons.forEach((tag) => {
        tagsFactory.getTagCardDOM(tag);
    })
    
    /********* */
    let croixDeToutLesTags = document.querySelectorAll('.fa-xmark');
    croixDeToutLesTags.forEach((croixTag) => {
        croixTag.addEventListener('click', (event) => {
            fermerTag(event);
            
            const elementParentDuTag = event.target.parentElement;
            const texteDuTagFerme = elementParentDuTag.firstChild.textContent;
            console.log(texteDuTagFerme);
            
            // MAJ des tableaux filtres
            let nouveauTableauIngredients = filtres.ingredients.filter((ingredient) => {
                return ingredient !== texteDuTagFerme;
            })
            filtres.ingredients = nouveauTableauIngredients;
            
            let nouveauTableauAppareils = filtres.appliance.filter((appareil) => {
                return appareil !== texteDuTagFerme;
            })
            filtres.appliance = nouveauTableauAppareils;
            
            let nouveauTableauUstensils = filtres.ustensils.filter((ustensil) => {
                return ustensil !== texteDuTagFerme;
            })
            filtres.ustensils = nouveauTableauUstensils;
            
            console.log(filtres);
            
            let resultat = searchService.search(searchText, filtres);
            console.log(resultat);
            videLaListeDesRecettes();
            afficheLaListeDesRecettes(resultat);
            nombreRecetteMAJ(resultat);
            
        })
    })
    /********* */
}
export function fermerTag(event) {
    // Supprimer le TAG en question
    const tagASupprimer = event.target.parentElement;
    tagASupprimer.remove();
    
    // On prends le texte cliqué
    const texteElementASupprimer = tagASupprimer.firstChild.textContent;
    // on prends le tableau 
    console.log(tableauTags);
    
    const tableauSansElementSupprime = tableauTags.filter(element => element != texteElementASupprimer);
    let tableauSansElementSupprimeEtSansDoublons = [...new Set(tableauSansElementSupprime)];
    console.log(tableauSansElementSupprime);

    // MAJ tableau des TAGS
    tableauTags.splice(0, tableauTags.length);
    tableauSansElementSupprimeEtSansDoublons.forEach(element => {
        tableauTags.push(element);
      });
      
      const zoneListeIngredients = document.querySelector('.ingredient-list');
    const zoneListeAppareils = document.querySelector('.appareils-list');
    const zoneListeUstensils = document.querySelector('.ustensils-list');
    let resultat = searchService.search(searchText, filtres);
    afficheLesFiltres(zoneListeIngredients, resultat, zoneListeUstensils, zoneListeAppareils);
    
    
    
}
export function nombreRecetteMAJ(resultat) {
    const nombreRecette = document.querySelector('.nombreRecette');
    nombreRecette.textContent = resultat.recettes.length + " recettes";
}
export async function rechercheIngredients(motRecherche) {    
    // faire une recherche du mot motRecherche au sein des filtres présents (et donc founi par le retour de service de searchService)
    let resultat = searchService.search(motRecherche);
    console.log(resultat);
    console.log(resultat);
    
}
export function MAJTableauTags(tableauTags, nouveauTableauMAJ) {
    // let tableauTags = []
    console.log(tableauTags);
    nouveauTableauMAJ.forEach((tag) => {
        tableauTags.push(tag)
    })
    console.log(tableauTags);
   return tableauTags 
}
