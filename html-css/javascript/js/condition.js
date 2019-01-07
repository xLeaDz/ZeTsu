// -- Structure de base IF
// if(maCondition){
//     // Par défaut la condition va vérifier si la condition à vérifier est vrai.
//     // Code à executer si la condition est vérifier.
// }

var nb1 = 10;

//Si
// if (nb1 < 50) {
//     document.write("nb1 est inférieur à 50.");
// }

// Si, Sinon
// if (nb1 > 50) {
//     document.write("nb1 est supérieur à 50");
// }

// else {
//     document.write("nb1 est inférieur à 50");
// }

//EXERCICE
//On utilise le IF pour vérifier l'âge de l'internaute.
// => s'il est majeur je lui souhaite la bienvenue
// => s'il est mineur je [1] lui signale et [2] le renvoie vers un autre site

if ([1] > [2]) {
  document.write("je lui signale");
} else {
  document.write("le renvoie vers un autre site");
}

var majorite = 18;
var age = Number(prompt("Quel est votre âge ?"));

if (age >= majorite) {
  alert("Bienvenue sur le site");
  document.write("Vous êtes majeur");
} else {
  alert("Casse-toi t'a pas l'âge");
  document.location.href = "https://google.com";
}

var heure = Number(prompt("quel heure est il"));

if (heure < 12) {
  alert("C'est le matin");
} else if (heure == 12) {
  alert("il est midi");
} else if (heure <= 18) {
  alert("Cest l'aprem");
} else {
  alert("C'est le soir");
}
