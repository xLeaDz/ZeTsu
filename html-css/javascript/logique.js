var A = true,
  B = false;
/**
 * l'operateur logique and (et): &&
 * verifie si 2 conditions ou plus sont vrai ou fausse
 */
if (prenomLogin === prenom && agr === monAge) {
  alert("Bienvenue M." + prenomLogin);
} else {
  alert("prenom ou age invalide");
}
if (A && B) {
}
// =>  si A est faux B et vrai => Retourne faux
// =>  si A est vrai B et faux => Retourne faux
// =>  si A est faux B et faux => Retourne faux
// =>  si A est vrai B et vrai => Retourne vrai

/**
 *l'operateur logique or(ou:)
 */
// =>  si A est faux B et faux => Retourne faux
// =>  si A est vrai B et vrai => Retourne vrai
// =>  si A est vrai B et faux => Retourne vrai
// =>  si A est vrai B et vrai => Retourne vrai

/**
 * l'operateur logique not(non)
 *cette operateur rend ce qui est faux et inversement
 */
var user = true;
if(!user){
    //code si l'utilisateurv n'est pas loggé
}
// ce qui revient a ecrire:
if (user == false){}
if(user){}
if(user == true){}
