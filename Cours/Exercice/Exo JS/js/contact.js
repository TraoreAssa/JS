var td = document.getElementsByTagName('td');
console.log(td);
// var nom = document.getElementById('nom');
// console.log(nom);

// var prenom = document.getElementById('prenom');
// console.log(prenom);

// var email = document.getElementById('email');
// console.log(email);

// var tel = document.getElementById('tel');
// console.log(tel);

var input = document.querySelectorAll('input');
var button = document.querySelector('button');
var tr = document.querySelector('tr');
var ajout = document.getElementsByTagName('p');
var tbody =  document.getElementsByTagName('tbody');



button.onclick = function (e){
    td[0].innerHTML = input[0].value;
    td[1].innerHTML = input[1].value;
    td[2].innerHTML = input[2].value;
    td[3].innerHTML = input[3].value;
    e.preventDefault();
    alert('vous avez ajouter un contact !');
    ajout();
}

function ajout(i){
    return '<td>' + input[i].value + '</td>';
}







