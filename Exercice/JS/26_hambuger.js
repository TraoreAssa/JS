
//     "use strict";

//     // 1- VARIABLES

(function(){

// on cible le bouton
   var toggle = document.querySelector(".c-hamburger");
// on cible le panneau glissant avec l'ID #menu-panel
   var menu = document.querySelector('#menu-panel');

            // 2- FONCTION

    // Au clicc de l'utilistauer sur le bouton hamburger, on déclanche 2 actions:
    // - animation du menu Hamburger
    // - glissement du panneau menu vers la droite


   toggle.addEventListener("click", function(e){
       e.preventDefault();
       this.classList.toggle('is-active');

       // on ajoute ici la class .show à la div#menu-panel
       // (et en CSS on fait un transform: translatex(0);)
       // écriture ternaire '? :'
       (this.classList.contains("is-active") === true) ? menu.classList.toggle("show") :menu.classList.remove("show");
       
   });
})();