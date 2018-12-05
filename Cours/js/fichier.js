function d(arg){
	document.write(arg + "<br>");
}

/*  
-- 01 -- Commentaire, Affichage, Concaténation
-- 02 -- Variables, Constantes, type de donnée

-- 03 -- Opérateurs (logiques et arithmétiques)
-- 04 -- Les conditions

-- 05 -- Les boucles
-- 06 -- Fonctions (utilisateurs et prédéfinies)

-- 07 -- Array (tableaux)
-- 08 -- Object (Objets)
*/

// commentaire sur une ligne

//alert("j'affiches quelque chose");
console.log("Bonjour je suis dans la console");

document.write("<h2>Commentaire, Affichage, Concaténation</h2>");

document.write("Bonjour" + " " + "je m'appelles " + "yassine");

document.write("<h2>Variables, Constantes, type de donnée</h2>");

/*
	Definition : variable est un espace nomée, appelé mémoire,
	qui permet de conserver une valeur le temps d'execution 
	du script.
 */

 // MAVARIABLE Mavariable ma variable ma-variable ma/variable*
 // é è ï â 01maVariable, attention aux noms de variables déjà
 // réservées.

  var maVariable = 1;
  var monTexte = "Du texte";
  var monTableau = [1,2,3];
  var monTableau2 = ["a","b","c"];

  var maVariable2;
  maVariable2 = 3;

  var nom = "Dupont", prenom = "Pierre";

  document.write(monTexte + maVariable);

  //exercice : déclarer une variable qui a pour valeur 15
  //et l'afficher

var nombre = 15;
var valeur = 'valeur';
document.write(valeur + nombre);

	//reprendre la variable que vous avez déclaré, et lui donner
	//une nouvelle valeur (8 par exemple) et l'afficher que ce 
	// passe-t-il ?. 

nombre = 8;
d(nombre);

var fruits = "pomme"; //pomme fraise
d(fruits);

//pomme = pomme + fraise
fruits  = fruits + "fraise";
d(fruits);

fruits += "banane";
d(fruits);

const MA_VARIABLE = 20;
d(MA_VARIABLE);

d(typeof MA_VARIABLE + " " + typeof maVariable + " " + typeof monTableau);
d(typeof monTexte);

//exercice : déclarer 3 variables (nom, prenom, age) et afficher
//une belle presentation "je m'appelles...." ensuite afficher
//le type de vos variables.

var nom = "TRAORE";
var prenom = "Assa";
var age2 = 19;
d("Je m'appelles " + nom + " " + prenom + "j'ai " + age2 + " ans");
d(typeof nom + typeof prenom + typeof age2);


d("<h2>Opérateurs (logiques et arithmétiques)</h2>");

var nbr1 = 2, nbr2 = 3, resultat;
resultat = nbr1 + nbr2;
//2 = 2 + 3 
nbr1 += nbr2;

// 0 = 5
resultat = nbr1;

d(resultat)

resultat = nbr1 - nbr2;
d(resultat);

resultat = nbr1 / nbr2;
d(resultat);

resultat = nbr1 * nbr2;
d(resultat);


//-= /= *= %

/*
> strictement superieur
< strictement inférieur
>= supérieur ou égal
<= infé ou égal
= affectation
== comparaison de valeur
=== comparaison de valeur ET type
!= différent de.
*/

d("<h2>Les conditions</h2>");

var a = 4 , b = 4, c = 8;

if (a == b) {
	d("Oui a est égal à b");
}

if(a > c){
	d("Oui a est plus grand que c");
} else{
	d("Non a n'est pas plus grand que c");
}

// &&
if(a == b && c > b){
	d("True");
} else {
	d("False");
}

// ||
if(a == b || c < b){
	d("True");
} else {
	d("False");
}


/* exercice : j'ai 3 variables 78,45,103 vérifier si 103
est plus grand que 78 ? si c'est le cas afficher la valeur
de la variable la plus grande. Ensuite verifier Si 45 est 
plus grand que 78 ou Si 103 est plus grand que 78 et afficher
la valeur la plus grande. 
*/

var nbr3 = 78, nbr4 = 45, nbr5 = 103;
if(nbr5 > nbr3){
	d(nbr5 + " est plus grand que " + nbr3);
}

if(nbr4 > nbr3 || nbr5 > nbr3){
	d(nbr5 + " est la valeur la plus grande");
}

var nbr6 = 10;

if(nbr6 > 10){
	d("Fait quelque chose");
} else if (nbr6 != 10){
	d("Fait autre chose");
} else if (nbr6 == 10){
	d("Oui 10 est égal à 10");
} else {
	d("Aucunes des conditions n'est vérifiés");
}

switch(nbr6){
	case nbr6 > 10:
		d(nbr6 + " est sup à 10");
	break;
	case nbr6 != 10:
		d(nbr6 + " est différent de 10");
	break;
	case nbr6 == 10:
		d(nbr6 + " est égal à 10");
	break;
	default:
		d("Instruction par défaut");
	break;
}

var couleur = "Jaune";

switch(couleur){
	case "bleu":
		d("J'aime le bleu");
		break;
	case "rouge":
		d("J'aime le rouge");
		break;
	case "jaune":
		d("J'aime le jaune");
		break;
	default:
		d("J'aime aucune de ces couleurs")
		break;
}

// === 

if("1" == 1){
	d("True");
} else {
	d("False");
}

if("1" === 1){
	d("True");
} else {
	d("False");
}




var dutext = "un text";
if(typeof dutext == "string"){
	d("True");
}else {
	d("False");
}

//Si ce n'est pas !
if(!isNaN(nbr6)){
	d("True");
}else{
	d("False");
}

//is not a number
if(isNaN(nbr6)){
	d("True");
}else {
	d("False");
}

//condition ternaire

var voiture = "bmw";

//(voiture == 'bmw') ? 'oui' : 'non'
d((voiture == 'bmw') ? 'oui' : 'non');

//prompt()
//prompt("veuillez saisir votre nom :");

//exercice, demandez l'age de l'utilisateur et ensuite afficher un
// si il est mineur ou majeur. ATTENTION : si l'utilisateur saisi
// autre chose qu'un nombre afficher un message d'erreur.
// parseInt()

/*var x = parseInt(prompt("Veuillez entrer votre age "));

if(x >= 18){
	alert("Bienvenue vous etes majeur");
 } else if(isNaN(x)){
 	alert("Merci de rentrer un nombre");
 } else{
 	alert("Tu es mineur");
 }*/

d("<h2>Boucles</h2>");

//incrémentation
for (var i = 0; i <= 10 ; i++) {
	d("Je suis le message numero " + i);
}

//décrémentation
for(var i = 10 ; i >= 0 ; i--){
	d("Je suis le message numero " + i);
}


var j = 0;

//boucle while
while(j <= 10){
	d("Je suis le message " + j);
	j++;
}


//do while

var k = 0;

do{
	d("Je suis le message " + k);
	k++;
} while(k >= 10)


//exercice : demander à l'utilisateur d'entrer son age, 
//tant que la valeur entré par l'utilisateur est bien un nombre.

/*var age;

console.log(typeof age);

do{
	age = parseInt(prompt("veuillez saisir un age "));

	console.log(typeof age);

	if(age >= 18){
		d("vous etes majeur");
	} 

	if(age < 18 ) {
		d("vous etes mineur");
	}

}while(isNaN(age))*/

d("<h2>Fonctions prédéfinies et utilisateurs</h2>");

document.write("Du texte ");

var unePhrase = "Bonjour comment vas-tu ?";
d(unePhrase.toUpperCase()); // tout en majuscule

function addition(valeur1, valeur2){
	d("J'appelles la fonction addition");
	var resultat = valeur1 + valeur2;
	return resultat;
}

d(addition(1,6));

//exercice faire une fonction qui calcule la TVA d'un prix. (19.6)

function appliquerTVA(prixHT){
	
	var prixTTC = prixHT * (1+0.196);
	return prixTTC;
}

d(appliquerTVA(155));//le prix avec la TVA

//creer une fonction appliquerTVA2 qui permet de calculer le prix TTC
// avec une TVA définie par l'utilisateur par exemple
//appliquerTVA2(155,19.6)

function appliquerTVA2(prixHT,TVA){
	var prixTTC = prixHT * (1+TVA/100);
	return prixTTC.toFixed(2);
}

d(appliquerTVA2(155,5.5));

//amélioration possible, afficher seulement 2 chiffres après la
//virgule :) toFixed()

//function maFuntion(){}

var maFonction = function(){
	document.write("Je suis maFonction <br>");
}

maFonction();


//IIFE = Immediatly Invoked Function Expression
(function(){
	d("Bonjour je suis la fonction anonyme");
})();

//ecrire une fonction qui verifie l'age de l'utilisateur

function verifierAge(age){
		
		if(age >= 18){
			d("Vous etes majeur");
		} 

		if(age < 18 ) {
			d("Vous etes mineur");
		}
}

//faire une fonction qui demande l'age de l'utilisateur et qui verifie son age

function demanderAge(){
	
	do{
		age = parseInt(prompt("Veuillez saisir un age "));

	}while(isNaN(age))
}

//ecrire une fonction qui demande le nom et prenom de l'utilisateur, ensuite
//afficher une présentation de celui-ci.

function informations(){
	var nom, prenom;

	nom = prompt("Veuillez saisir votre nom : ");
	prenom = prompt("Veuillez saisir votre prenom : ");

	d("Bonjour " + nom +" "+ prenom);
}

//ecrire une fonction qui affiche un "Hello world" x fois défini par
//l'utilisateur par exemple afficherPhrase(100);


function afficherPhrase(nombre){
	for (var i = 1; i <= nombre ;  i++) {
			d("Hello world " + i);
	}
}

afficherPhrase(10);

//fonction presentationFinale(), vous demandez l'age de l'utilisateur,
//son nom son prenom, et vous verifier aussi son age (mineur ou majeur)
//ensuite vous afficher une presentation de celui-ci

function presentationFinale(){
	demanderAge();
	informations();
	verifierAge(age)
}

presentationFinale();

//ecrire une fonction qui verifie le type de donnée
//d'une variable par exemple verifie(maVariable)

function verifie(x){
    d(typeof x);
}
verifie(maVariable);

// Ecrire une fonction qui affiche un message pour informer 
// l'utilisateur si la variable qu'il teste 
// est de type "chaine de caracteres" ou "nombre"
// par exemple verifier(maVarible) --->
// "votre variable est de type :  "

function variableType (a){
    
    if(typeof(a) == "string"){
        d("votre variable est de type : chaine de caracteres" /*ou + typeof maVariable */);
    }
    else if( typeof(a) == "number" ){
        d("votre variable est de type : nombre" /* ou + typeof maVariable */);
    }else{
        d("votre variable est de type : " + typeof a)
    }
} 
variableType(maVariable);
variableType(nom);
variableType(monTableau);

// parté global et local d'une variable

var animal = "un chien";
function test(){
    d(animal);
}
test();

function test2(){
    var animal2 = "un chat"; 
    // si la variable est déclaré dans la fonction (avec le mot var) elle peut etre utilisé que pour la fonction, elle devient local
    // sans le var elle devient global
    d(animal2);
}
test2();
// d(animal2);


d("<h2>Array (les tableaux) </h2>");

var liste_fruits = ["fraise", "peches", "banane", "pomme", "banane", "peches", "fraise", "pomme", "banane", "banane","fraise", "pomme", "banane"];
d(liste_fruits);
console.log(liste_fruits);
d(liste_fruits[0]); //fraise s'affichera

for(var i = 0; i < liste_fruits.length; i++){
    d(liste_fruits[i]);
    //.length pour la totalité du tableau
}
for(var i = 0; i < liste_fruits.length; i++){
    //Afficher seulement les bananes.
    if(liste_fruits [i] == "banane"){
        d(liste_fruits[i]);
    }
}

for(var indice in liste_fruits){
    //Afficher seulement les peches.
    if(liste_fruits[indice] == "peches"){
        d(indice + " : " + liste_fruits[indice]);
    }
}
 
document.write("<h3> Multi-dimensionnels </h3><br>");

var liste_contact = [["Jean","Pierre","Paul", "Rachid"],[14,78,47,18,4]];
console.log(liste_contact);
d(liste_contact[0][2]); 


d("Liste de contacts" + "<br />");

//Boucle imbriqué
for (var i = 0; i < liste_contact.length; i++){ //i correspond au tableau complet (paul; rachid .. 14, 78 ...)
    for ( j = 0; j < liste_contact[i].length; j++){ // j correspond au tableaux interieur 
        d("Tableau numero : " + i + " " + "indice numero : " + j + " : " + liste_contact[i][j]);
    }
}

d("<h2>Object </h2>");
// Pour un objet mettre la 1er lettre en majuscule

var monObjet = {};
monObjet.nom = "ESCOBAR";
monObjet.prenom = "Pablo";
monObjet.age = 45;

d(monObjet.prenom + " " + monObjet.age);

var Humain = {
//Attention on met des , dans un objet et des : 
    sexe: "male",
    origine: "x ou y",
    age: 45
}

d(Humain.sexe);
Humain.couleur = "blanc";
d(Humain.couleur);

var Voiture = {
    marque: "Mercedes",
    modele: "Class A",
    couleur:"Noir",
    changerCouleur: function(nouvelleCouleur){ //Fonction dans mon objet
               // Voiture.couleur = "rose";
        return this.couleur = nouvelleCouleur;
    },
    optionDeSerie: ["clim" , "auto-radio", "park-assist"],
    annee: 2017,
    motorisation: { // objet dans un objet! 
        energie : "diesel",
        puissance : "110 cv" 
    }
};
d(Voiture.modele);
d(Voiture.couleur);
Voiture.changerCouleur("violet");
d(Voiture.couleur);
d(Voiture.optionDeSerie[1]); // tableau
d(Voiture.motorisation.energie); //objet

    for(var elements in Voiture){
        d("propriétée : " + elements + " valeur " + Voiture[elements] );
        
        if(typeof Voiture[elements] == "object"){
            for(var elemts in voiture.motorisation){
                d("propriétée : " + elemts + " valeur : " + Voiture.motorisation[elemts]);
            }
        }
	}

	for(var elements in Voiture){
		d("mes propriétés : " + elements + " valeur : " + Voiture[elements]);
	 
		if(typeof Voiture[elements] == "object"){
			for(var elemts in Voiture.motorisation){
				d("propriétés : " + elemts + " valeur : " + Voiture.motorisation[elemts]);
			}
		}
	 }
	
	// var Voiture = {
	// 	marque: "Mercedes",
	// 	modele: "class A",
	// 	couleur: "noir",
	// 	changerCouleur: function(nouvelleCouleur){
	// 				//Voiture.couleur = "rose";
	// 		return this.couleur = nouvelleCouleur;
	// 	},
	// 	optionsDeSerie: ["clim","auto-radio", "park-assist"],
	// 	annee: 2017,
	// 	motorisation: {
	// 		energie: "diesel",
	// 		puissance: "110 cv"
	// 	}
	// };
	
	// d(Voiture.modele);
	// d(Voiture.couleur);
	// Voiture.changerCouleur("violet");
	// d(Voiture.couleur);
	// d(Voiture.optionsDeSerie[1]);
	// d(Voiture.motorisation.energie);
	
	// for(var elements in Voiture){
	// 	d("propriétée : " + elements + " valeur : " + Voiture[elements]);
		
	// 	if(typeof Voiture[elements] == "object"){
	// 		for(var elemts in Voiture.motorisation){
	// 			d("propriétée : " + elemts + " valeur : " + Voiture.motorisation[elemts]);
	// 		}
	// 	}	
	// }

	// Creer un objet Joueur avec 3 caractèristiques ( force, experiences et race)
	// Afficher les.

	var Joueur = {
		force : 10,
		experice : 0,
		race: "Nain"
	}

	d(Joueur.force + " " + Joueur.experice + " " + Joueur.race );

	function Animal(nom, espece, categorie, age){
		this.nom = nom,
		this.espace = espece,
		this.categorie = categorie,
		this.age = age;
	}
	var lion = new Animal("Simba", "lion", "felin", 10);
	var dauphin = new Animal("flipper", "dauphin", "mammifere", 4 );
	d(lion.nom);
	d(dauphin.categorie);

	// Créer une classe Joueur avec experience, force et race.
	// Créer 2 joueurs

	function Joueurs(experience, force, race){
	this.experience = experience;
	this.force = force;
	this.race = race;
}
var joueur1 = new Joueurs("0", "10","elfe");
var joueur2 = new Joueurs("0","30","guerrier");
d(joueur1.force);
d(joueur2.experience);


function Vehicule(marque){
	this.marque = marque;

}
var megan = new Vehicule ('Renault');

megan.demarrer = function(){
	d("Vroum vroum la voiture demarre")
}

megan.demarrer();
	d(megan.marque);
 
megan.freiner = function(){
	d("je freine");
}
 
megan.freiner;