let divRecherche = document.getElementById('recherche');

let aCreer = document.createElement("div");

let resultatDuService = SearchService.search("", "");

let text= document.createTextNode();

aCreer.appendChild(text);

divRecherche.appendChild(aCreer);