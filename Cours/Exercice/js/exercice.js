function d(arg){
	document.write(arg + "<br>");
}


function joueurs(race){
    this.pseudo = prompt("Veuillez saisir votre pseudo : "),
    this.personnage = prompt("Veuillez saisir votre personnage (monstres, guerriers, mages, chasseurs, voleurs) : "),
    this.combat = prompt("Voulez-vous Attaquer ou Defendre")
    this.arme = prompt("Avec quelle armes souhaitez-vous combatre : épee, couteau ou ciseau ?");
	this.sante = 100;
	this.experience = 0;
	this.force = 100;
    this.niveau = 1;
    this.race = race;
    this.Presentation = function(){
        d("Je vous presente  : " + this.pseudo +" , un "+ this.personnage + " avec " + this.sante +" points de vie , de race des " + this.race + " , et une force de " + this.force + " avec " + this.experience + " points d'experiences et au niveau " + this.niveau);
    };
    //fonction presentation!!!
    this.choixArme = function(){

        
    }
}
var hero1 = new joueurs('loup');
var hero2 = new joueurs("chien");



hero1.Presentation() + hero1.choixArme();
// hero2.Presentation() + hero2.choixArme();
for(var i = 100 ; i >= 0 ; i--){

if (hero1 <= 0.33) {
    hero2 = 'épee';
}
else if (hero1 <= 0.66) {
    hero2 = 'couteau';
}
else {
    hero2 = 'ciseau'
}
d("<p>Choix de " + this.pseudo + " : "+ this.combat + " avec " + this.arme + '</p>');
if (hero1 == hero2) {
    document.write('<p>Vous avez choisi la même chose : égalité !</p>');
}
else {
    // le joueur et l'ordinateur n'ont pas choisi la même chose la bataille commence !
    switch (hero1) {
        case 'ciseau':
            if (hero2 == 'épée') {
                document.write("<p> L'épée est plus forte que le ciseau : vous gagnez 5 point de force !</p>")
            }
            else // hero2 == 'couteau'
            {
                document.write("<p> Le couteau est  plus forte que le ciseau : vous gagnez 3 point de force !</p>")
            }
            break;

        case 'épée':
            if (hero2 == 'couteau') {
                document.write("<p> Le couteau est moins fort que l'épée : vous perdez 3 point de force !</p>" hero2.force + i)
            }
            else // hero2 == 'ciseau'
            {
                document.write("<p> le ciseau est moins fort que l'épée : vous perdez 1 point de force !</p>")
            }
            break;

        case 'couteau':
            if (hero2 == 'épée') {
                document.write("<p> L'épée est  plus forte que le couteau : vous gagnez 5 point de force  ! !</p>")
            }
            else // hero2 == 'ciseau'
            {
                document.write("<p> le ciseau est moins fort que le couteau : vous perdez 1 point de force !</p>")
            }
            break;
        }
    }
}



    















