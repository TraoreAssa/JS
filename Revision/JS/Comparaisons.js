// alert("Coucou")

// L'operateur de comparaison == signifie 'égal à'
// il permet de vérifier que les VALEURS DE 2 variables sont identiques
var nb1 = 123;
var nb2 = "123";
console.log(nb1 == nb2); //retourne TRUE

// L'operateur de comparaison === signifie 'strictement égale à'
// il permet de vérifier que les VALEURS et le type
console.log(nb1 === nb2); //retourne FALSE

// L'operateur de comparaison != signifie 'Différent de ... en VALEUR '
console.log(nb1 != nb2); //retourne FALSE

// L'operateur de comparaison !== signifie 'strictement différent de ... en VALEUR et en TYPE'
console.log(nb1 !== nb2); //true

/* ------------------------------ 
EXERCICE
J'arrive sur un Espace Sécurisé au moyen du prénom et de l'âge.
Je dois saisir mon prénom et mon âge pour être authentifié sur le site (les infos sont en BBD, ici dans mes variables prénom et âge).
En cas d'échec une alerte m'informe du problème.
Si tout se passe bien, un message de bienvenue m'accueille. 
------------------------------*/


var prenom, monAge;
prenom = "Houda";
monAge = 22;

// 1 --Demander son prénom à l'utilisateur avec un prompt
var prenomLogin = prompt("Quel est votre prénom ?");
// 2 -- Je vérifie si le prénom saisi (prenomLogin) correspond à celui en base de donnée (prenom)
if(prenomLogin === prenom) {
    // 2a. Si tout est ok, je continue la vérification avec l'âge
   // 2a1. Demande a mon utilisateur son âge via un PROMPT

   var ageLogin = parseInt(prompt("Votre âge ?"));
   if (ageLogin === monAge) {
       alert("bienvenue" + " " + prenomLogin);
   } else {
       // 2a2. Si les AGEs ne correspondent pas, je lance une ALERT.
       alert("Erreur d'âge");
   }
   } else {
         // 2b. Sinon, les prénoms ne correspondent pas, je lance une ALERT.
         alert("Attention, prénom non reconnu");
   }
   
   var prenom, monAge;
   prenom = "Sandra";
   monAge = 999;
   mdp = "bibi";

   var prenomLogin = prompt("Quel est votre prénom ?");
   if ( prenomLogin === prenom){
       var ageLogin = parseInt(prompt("Votre âge ?"));
       if(ageLogin === monAge) {
           var mpdLogin = prompt("Le mot de passe ?");
           if(mpdLogin === mdp){
               alert("Bienvenue" + " " + prenomLogin);
           }else{
               alert("pb de mot de passe !");
           }
       }else{
           alert("Erreur d'âge");
       }
   }else{
       alert("Attention, Prénom non reconnu");
   }



