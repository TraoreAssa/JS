// alert("Coucou toi!!")

/* Les Boucles */

// --La boucles FOR

/* for (3 arguments){
     /* Code*/ 
// } */ 

/*
1. initialise un compteur à partir de combien je compte (par défaut le compteur est la valeur "i")
2. la condition à verifier qui doit donc etre VRAI (TRUE)
3. le 'pas' d'incrémentation (combien j'ajoute a chaque tour, généralement donc i++) 
 */

for(var i = 1; i <=10; i+=2){
    document.write("<p>Instruction éxécutée : " + i + "</p>");
}

//  --la boucle WHILE (tant que)
//  très utilisée qd on ne connait pas le nombre de tours de la boucle à l'avance
var j = 1;
while (j <= 10){
    document.write("<hr/> <p> Instruction éxécutée : " + j + "</p>")
}

/* ------------------------------ 
            EXERCICE
j'ai 1000€ sur mon compte
chaque mois j'ajoute 50€
combien de temps me faut-il pour avoir 2000€ sur mon compte ?
------------------------------*/
var monCompte =  1000;
var temps = 0;
while( monCompte < 2000){
    monCompte += 50;
    temps++;
}
document.write("<h3>Sous sur mon compte : " + monCompte + "</h3>");
document.write("<h3>Jusqu'à 2000€, il me faut : " + temps + " mois</h3>");


vartps = 0
for(var mesSous = 1000; mesSous <=2000; mesSous +=50){
    document.write("<h3>Le mois suivant j'ai " + mesSous + "</h3>");
}
document.write("<h3>Il aura fallu : " + tps + "</h3>");

