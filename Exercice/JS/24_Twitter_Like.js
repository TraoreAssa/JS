// Créer un compteur de caracteres "Twitter Liker"

// L'utilisateur peut saisir un texte de 140 caracteres dans textarear#txeet-content
// Un paragraphe #counter-block affiche les caractereres restants.

// Comment procéder?
// 1- Detecter l'evenement à chaque fois que l'utilisateur presse une touche
// 2- Dans la fonction lancée lorsque l'event est détecter calculer le nb de caractères restants et l'afficher dans le p#counter-block

// INDICATIONS 
// -> Utiliser l'event keyup
// -> Utiliser la propriété elt.value pour récupérer la valeur d'un input ou d'un textarea
// -> Utiliser .length pour compter le nombre de caractères d'une chaîne de caractères
// -> Utiliser elt.textContent='' pour remplacer le contenu d'un élement HTML

// on Selection l'element textarea et l'element p#counterBlock
var textarea = document.querySelector('#tweetContent');
var blockCount = document.getElementById('counterBlock');

function count(){
    // la fonction count calcule la longueur de la chaine de caractère contenue dans le textarea.querySelector
    var count = 140-textarea.value.length;
    // et affiche cette valeur dans la balise p#counterBlock grace a innerHTML
    blockCount.innerHTML = count;

    // si le count descend sous 0 on ajoute la class red à la balise p#counterBlock
    if(count < 0){
        blockCount.classList.add("red");
    }
    else if(count >= 0){
            blockCount.classList.remove("red");
        }
    else{}
}


// on pose un écouteur d'évènement keyup sur le textarea.
// on déclanche la fonction count quand l'évènement se produit et au chagement de la page
textarea.addEventListener('keyup' , count);
count();