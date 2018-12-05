// alert("Coucou !");

/* Les Opérateurs ET : && ou AND */

// Si je cumule 2 conditions:

// => premon === prenomLogin
// => monAge === ageLogin
// Pour que les 2 correspondent pour être validés il faut les associer.

if((prenomLogin === prenom) && (ageLogin === monAge)){
    /* ----- Code ----- */
    /* Je ne rentre ici que si les 2 conditions sont vraies */
}

if((A) && (B)){...}
// => si A est FAUX et B est VRAI => FAUX
// => si A est VRAI et B est FAUX => FAUX
// => si A est FAUX et B est FAUX => FAUX
// => si A est VRAI et B est VRAI => VRAI

/* 
L'opérateur OU : || ou OR (| pipe => alt gr + 6)
 */

 var utilisateurLogin = true;
 if(!utilisateurLogin){
     // Si l'utilisateur n'est pas loggé.
 }
 // ce qui revient à écrire: 
 if(utilisateurLogin == false){
     //Si l'utilisateur n'est pas loggé.
 }