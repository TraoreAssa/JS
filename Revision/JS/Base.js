// Syntaxe de base 

// commentaire sur une ligne

/* Ici, je fais un com sur plusieur ligne*/

// --1: Déclarer une varible en JS
var prenom;

// --2 Affecter une valeur à une variable
premon = "Assa";
// var premon ="Assa";

// --3 Une instruction se termine TOUJOURS par un point-virgule, aussi il est possible d'écrire plusieur instruction sur une seul ligne.
// inst-1;
// inst-2; inst_3;

// --4 Afficher une boite de dialogue (2 facons)
alert("Super, tu es arrivé sur mon site!");
// window alert("Super, tu es arrivé sur mon site!");

// --5 Afficher dans la console (ici, la valeur de ma varible premon)
console.log(premon);

// --6 Afficher dans la page Web
document.write(" A la pause vous aurez des Haribos Pik!");

//  --7 Demander à l'utilisateur une valeur (2 facons)
// window.prompt("Question: on est quel jour?" , "jour de la semaine");
prompt("Question: on est quel jour?" , "jour de la semaine");

//  et pour manipuler cette valeur, je n'oublie pas de stocker.
var jour = prompt("Question: on est quel jour?" , "jour de la semaine");
console.log(jour)

//  --8 Attention le JS est sensible a la casse.
// mavarible =/= maVariable =/= ma_variable
//               camel case      snake case

//  --9 Une variable ne peut pas commencer par un chiffre, ne doit contenir sue des caractères ap=lphanumériques, et ne peut pas être unmot réservé (var, for,... des élément natifs du language JS).

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s

//  --10 Une Variable peut être déclarée de façon explicite:
// var fruit;
var fruit = "fraise";
// ou implicite:
var fruit_2 = "coco";
haribo = "Tagada";


/*--------------------------------------------------------------------------------
/ ~~~~~~~~~~~~~~~~~~~~~~~     LES TYPES DE VARIABLES       ~~~~~~~~~~~~~~~~~~~~~~~
--------------------------------------------------------------------------------*/

//  --1. Chaine de caractères (STRING)
var vacances = "2018";
var destination = "Nice";

//  --2. Un nombre entier (integer ou int)
var annee = 2018;

//  --3. Un nombre décimal (float)
var nombre_a_virgule = 5.35;

//  --4. Un booléen (boolean = VRAI / FAUX = TRUE / FALSE)
var unBooleen = false; // -- true;

//  --5. Les Constantes

/*La déclaration const permet de créer un constante accessible
umiquement en lecture. Contrairement à une varible sa valeur ne peut 
plus être modifiée par réaffectation plus bas dans le code. une
constante ne peut pas être décalée à nouveau dans le même script*/

//  -- Par convention les constantes seront en majuscules
const PAYS = "France"; //string
const AN = "2020"; //string
const BIRTH = "2020"; //nombre

// --6. typeof permet de connaitre le type de ma variable
console.log(vacances);
console.log(typeof vacances);
console.log(annee);
console.log(typeof annee);

// En JS les variables seront auto-typées
// on peut convertir une variable de type NUMBER en STRING et aussi STRING en NUMBER avec les fonction natives de JS.

//  -- la fontion parseInt() renvoie un entier à partir d'une chaine de caracteres
var unChiffre = "12";
console.log(unChiffre);
console.log(typeof unChiffre);

// STRING => NUMBER
var unChiffre = parseInt (unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// Je ré-affecte une valeur
unChiffre = "12.22";
console.log(unChiffre);
console.log(typeof unChiffre);

// STRING => FLOAT
unChiffre = parseFloat(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// NUMBER => STRING
var nb_en_lettres = 258;
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);

var nb_en_lettres = nb_en_lettres.toString();
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);


/// FIN ///