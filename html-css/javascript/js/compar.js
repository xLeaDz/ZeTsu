var chiffre = prompt("Saisir un chiffre"),
  chiffre2 = prompt("Saisir un chiffre");
if (chiffre > chiffre2) {
  alert(chiffre + " est plus grand que " + chiffre2);
  location.reload();
} else if (chiffre < chiffre2) {
  alert(chiffre + " est petit que " + chiffre2);
  location.reload();
} else {
  alert(chiffre + " est egale à " + chiffre2);
  location.reload();
}
