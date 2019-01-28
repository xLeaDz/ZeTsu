var choixUtilisateur = prompt("Choisissez vous pierre, feuille, ou ciseau?");
console.log(choixUtilisateur);

var choixOrdi = Math.random();
console.log(choixOrdi);

if (choixOrdi === 0) {
  alert("pierre");
} else if (choixOrdi <= 0.33) {
  alert("pierre");
} else if (choixOrdi === 0.34) {
  alert("feuille");
} else if (choixOrdi <= 0.66) {
  alert("feuille");
} else if (choixOrdi === 0.67) {
  alert("ciseaux");
} else {
  alert("ciseaux");
}