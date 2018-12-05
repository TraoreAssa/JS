// alert("Hi")

// Structure de base IF

if(true){ /*par défaut la condition à verifier le IF vérifie si elle est vrai*/
    /* ................ Votre condition ................ */
}

var nb1 = 10;

if(nb1 < 50){
    console.log("nb1 est bien inférieur à 50");
}

if(true){
    /* ... code si VRAI ... */
} else{
    /* ... code si FAUX ... */
}

if(nb1 > 50){
    console.log("nb1 est bien supérieur à 50");
}else{
    console.log("nb1 n'est pas supérieur à 50");
}



/* EXERCICE
On utilise le IF pour vérifier l'âge de l'internaute.
=> s'il est majeur je lui souhaite la bienvenue 
=> s'il est mineur je [1] lui signale et [2] le revoie vers un autre site*/



var MajoriteFR = 18;

// demander l'âge en s'asssurant que nous avons bien un NUMBER

var age = parseInt(prompt("Indiquez votre âge")); // parseInt = Number

if(age >= MajoriteFR){
    alert("Bienvenue dans notre site")
}else{
    alert("Vous etes mineur") 
    document.location.href= "http://google.com" 
}