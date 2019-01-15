var chiffre = prompt("Saisir une moyenne"),
chiffre2 = 10
chiffre3 = 10
chiffre4 = 12;
if (chiffre < 10) {
  alert(" récalé " );
  location.reload();
} else if (chiffre == 10) {
  alert(" reçu ");
  location.reload();
} else if (chiffre >= 12){
  alert(" reçu avec mention ");
  location.reload();
}
