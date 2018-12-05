function d(arg){
	document.write(arg + "<br>");
};

/* ------------- Fonction Joueurs ------------- */
function Joueur(pseudo,armes,espece, force){
	this.pseudo = pseudo,
	this.armes = armes,
	this.niveau = 1,
    this.espece = espece,
    this.experience = 0,
    this.force = force,
    this.sante = 100,
    this.classe = 1,
    /* ------------- Fonction Personnage -------------  */
    // this.Personnage = function (){
    //     d("Je vous presente : " +" , "+ this.pseudo + " , c'est un " + this.espece + "<br>");
    // }
    this.Presentation = function(){
        d("Je vous presente : " + this.pseudo + ", c'est un(e) " + this.espece + "avec" + this.sante + " point de vie ,  qui a " + this.force + " de force, avec " + this.experience +  "point d'experiences et au niveau " + this.niveau + '.' );
    }
    this.Presentation3  = function(){
        d(" Apres le combat " + this.pseudo + " : " + " Il vous reste " + this.sante +" point de vie , " + this.force + " de force " +  " avec " + this.experience + " point d'experiences et au niveau " + this.niveau + '.');
    }
/* ------------- Fonction Adversaires ------------- */
    this.AdversairePresentation = function(){
        d("Votre abversaire est : " + this.pseudo + " ,  avec " + this.sante +" point de vie , c'est un(e) " + this.espece + " , il a une force de " + this.force + " avec " + this.experience + " point d'experiences et au niveau " + this.niveau + '.');
    }
/*  ------------- Fonction Combat ------------- */ 
    this.Combat = function(){
        var combat1 = this.pseudo
        var attaquer, defendre;
        this.attaquer = function(){
            if(combat1 == attaquer){
                this.force = this.force + 5;
                d("vous avez choisir d'attaquer votre adversaire! <br> Vous gagnier donc 5 points de force ");
            };
        };
        this.defendre = function(){
            this.sante = this.sante * (1-0.30);
                this.force = this.force - 3;
                d("vous avez choisir de vous défendre face a votre adversaire! <br>  Vous perdez donc 10% de vie et 3 points de force ");
        };
    };

            // if(combat1 == attaquer){
            //     this.force = this.force + 5;
            //     d("vous avez choisir d'attaquer votre adversaire! <br> Vous gagnier donc 5 points de force ");

            // }else if (combat1 == defendre){
            //     this.sante = this.sante * (1-0.30);
            //     this.force = this.force - 3;
            //     d("vous avez choisir de vous défendre face a votre adversaire! <br>  Vous perdez donc 10% de vie et 3 points de force ");
            
            // }else{
            //     d("recommencer!")
           
        
    };
    /*  ------------- Fonction Potion de Vie ------------- */ 
    this.potionVie = function(){
        var prendrePotion = prompt("Souhaitez-vous prendre la potion")
    if(this.sante >= 100){
        d('Votre santé est au maximun, vous ne pouvez pas utilisé la potion');
    }else if (prendrePotion == "oui"){
        var potionV = sante * (1+0.20);
        d(this.pseudo + " a choisir la position de vie, il vous reste donc " + this.sante + " de point de vie " );
    }else{
        d("Continuons le combat!")
    }
    return potionV;
	
    };
    /*  ------------- Fonction Alert ------------- */ 
    this.Alert = function(){
        alert("A votre adversaire de choisir, " + this.pseudo + " êtes-vous prêt");
    }


    /*  ------------- Fonction Potion de Force ------------- */ 
    this.potionForce = function(){
    if(this.force >= 30){
        d('Votre force est au maximun, vous ne pouvez pas utilisé la potion');
    }else{
        var potionF = this.force * (1+0.15);
        d(this.pseudo + " a choisir la position de Force, il vous reste donc " + this.force + " de point de force " );
    }
    return potionF;
    
    };
    this.augmentationExperience = function(){
        for (niveau = 1; this.experience <= 100 ; niveau++) {
                var augmentation = this.experience * (1+0.25);
            d("Vous avez plus que 100 points d'experience vous montez d'un niveau, Bienvenue au niveau" + niveau++)
            return augmentation;
        }
    
    
    };
    /*  ------------- Fonction Magicien ------------- */ 

    this.Magicien = function(){
        if(this.sante <= 20){
            var appelMagicien = prompt("Voulez-vous faire appel au magicien?");
                if(appelMagicien == "oui"){
                    function donMagicien(){
                        this.sante = this.sante + 25 / 100;
                        d("La magicien a souhaité soigner un allié, il vous donne donc 25% de sa vie.")
                        return magicien;
                    };
                    function optionMagicien(){
                        magicien = magicien.sante * (1-0.50);
                        d("La magicien a souhaité soigner un allié, il rendra donc 50% de sa vie." + " Il reste donc " + optionMagicien(magicien.sante) + "% de vie au Magicien et " + donMagicien(this.sante) + "% de vie a " + this.pseudo );
                        return magicien;
                    }
            
            }else{
                d("Vous allez bientot mourrir! si cela est votre choix.. Continuons")
            }
    }
};


    

/* ------------- Fin de ma Fonction Joueurs ------------- */

/* ------------- Joueurs ------------- */

var joueur1 = new Joueur ("Baloo", 'Dents', "Ours", 15 );
var joueur2 = new Joueur ("Bagheera", "Griphe", 'Panthere noir', 20 );
var joueur3 = new Joueur ("Mowgli", 'Main', 'Homme', 10 );
var joueur4 = new Joueur ("Shere Khan", 'Coups de pates', "Tigre", 30);


/* ------------- ------------- */

// joueur1.Personnage();
// joueur2.Personnage();
// joueur3.Personnage();
// joueur4.Personnage();

joueur1.Presentation();
joueur2.Presentation();
joueur3.Presentation();
joueur4.Presentation();

// /* Joueur 1 adversaire 1 // Joueur 2 advesaire 2 */
// var chois = prompt("Choisir un joueur!");
// if(chois == "Baloo" ){
//     joueur1.Presentation(), joueur3.AdversairePresentation();
// }else if( chois == "Bagheera"){
//     joueur2.Presentation(), joueur4.AdversairePresentation();
// }else if( chois == "Mowgli"){
//     joueur3.Presentation(), joueur1.AdversairePresentation();
// }else if( chois == "Shere Khan"){
//     joueur4.Presentation(), joueur2.AdversairePresentation();
// }else{
//         d("Je n'ai pas compris. Merci de recommencer " )
//         prompt("recommencer, Choisir un joueur! ");
// };

/* ------------- Maxi de la force ------------- */
// if(force >= 30){
//     d("vous êtes au max de force")
// }
/* ------------- ------------- */


joueur1.attaquer();
joueur1.Presentation3() + "<br> \n";
// joueur3.Alert();
joueur3.Combat();
joueur3.Presentation3();
Magicien();

joueur3.Combat();
joueur3.Presentation3() + "<br> \n";
// joueur4.Alert();
joueur4.Combat();
joueur4.Presentation3();

joueur2.Combat();
joueur2.Presentation3() + "<br> \n";
// joueur1.Alert();
joueur1.Combat();
joueur1.Presentation3();

joueur3.Combat();
joueur3.Presentation3() + "<br> \n";
// joueur2.Alert();
joueur2.Combat();
joueur2.Presentation3();

joueur4.Combat();
joueur4.Presentation3() + "<br> \n";
// joueur1.Alert();
joueur1.Combat();
joueur1.Presentation3();

var magicien = new Joueur("Magien", "Baguette magique", "humain", 100);
d("Un nouveau personnage est arrivé :") + magicien.Presentation();
joueur2.Combat();
joueur2.Presentation3() + "<br> \n";
// joueur4.Alert();
joueur4.Combat();
joueur4.Presentation3();

/* ------------- Defini la fin de la partie ------------- */

if((this.sante == 0) || (this.force == 0)){
    d("La partie est terminé pour " + this.pseudo + " , Vous n'avez plus de vie / force !");
}else{
    d("la partie continue")
}


// --------------------------------------------------------------------------------------------------------------




// Fonction augmentationExperience : atteindre le niveau suivant l'experience est augmenté de 25%.

// d(augmentationExperience());


// Fonction gagniant : A chaque fois que votre Champion sort vainqueur d'un combat ^_^ il gagne 50 points d'experiences,
// function Gagniant(experience){
//     var resultat = experience + 50;
//     // for (niveau = 0; experience+50) {
    
// 	return resultat;
// };
// joueur1.Gagniant();

// fonction optionMagicien : si il souhaite soigner un allié il le fera et lui rendra 50% de sa santé et accorde 25% a son allié.






// A chaque fois que votre Champion sort vainqueur d'un combat il prend un niveau chaque 100 points d'experiences.
// if(experience >= 100){
//     for(niveau = 1; experience >= 100; niveau ++){
//         d("vous etes au niveau " + niveau ++);
//     };
 /*  ------------- Fonction Magicien ------------- */ 
  