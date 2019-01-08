//  var nom = "LeaDz";
//  var email = "ighcdhzh@fff.com";
//  var mdp = "dddd";




//  var leadz = prompt("Quel est votre nom ?");
//  if (leadz == nom) {
//    var zz = prompt("Quel est votre adresse email ?");
//    if (zz == email) {
//      var aa = prompt("Quel est votre mot de passe ?");
//      if (aa == mdp) {
//        alert("Bienvenu" + " " + nom);
//      } else {
//        alert("Mot de passe érroné");
//        location.reload();
//      }
//    } else {
//      alert("Adresse email érroné");
//      location.reload();
//    }
//  } else {
//    alert("Nom érroné");
//    location.reload();
//  }




// var leadz = prompt("Quel est votre nom ?");
// if (leadz == nom) {
//   var zz = prompt("Quel est votre adresse email ?");
//   if (zz == email) {
//     var aa = prompt("Quel est votre mot de passe ?");
//     if (aa == mdp) {
//       alert("Bienvenu" + " " + nom);
//     } else {
//       alert("Mot de passe érroné");
//       location.reload();
//     }
//   } else {
//     alert("Adresse email érroné");
//     location.reload();
//   }
// } else {
//   alert("Nom érroné");
//   location.reload();
// }


// var nb1 = Number(prompt("Entrez un chiffre "));
// var nb2 = Number(prompt("Entrez un chiffre "));
// if (nb1 && nb2){
//     alert(nb1 * nb2);
// }


//  exercice  avant lexo 0
//  var pseudo = prompt("Entrez votre pseudo"), mail = prompt("Entrez votre email");

//  if((pseudo == "samba") && (mail == "samba@gmail.com")){
//      var age = Number(prompt("Quel est votre age")), annee = Number(prompt("Quel est votre année ?"));
//      if ((age > 20) || (annee > 2000))
//      {
//          var vraiFaux = confirm("Vrai ou Faux");
//          if (vraiFaux) {
//              document.location.href = 'https:google.com';
//          } else{
//              location.reload();
//          } 
//      }else {
//              location.reload();
//          } 
//  }else{
//              location.reload();
//          }

// exo 0
// var nb1 = Number(prompt("Saisir un nombre")), nb2 = Number(prompt("Saisir un nombre"));
// if (nb1 && nb2){
//     alert(nb1 * nb2);
// }


// exo 1
//  var couleur = prompt("Entrez une couleur");
//  if (couleur == "noir") {
//  document.body.style.backgroundImage = "#000";    
//  }else if (couleur == "blue") {
//      document.body.style.backgroundColor = "blue";
//  }else if (couleur == "rouge") {
//      document.body.style.backgroundColor = "red";
//  } else if (couleur == "vert"){
//  document.body.style.background = "green";
//  } else {
//      alert("couleur non défini !");
//      location.reload()
//  }

// exo 2

// var imageUrl = prompt("Entrer l'url de l'image");
// if(imageUrl){
//     document.getElementById("img").src = imageUrl;
// } else{
//     location.reload();
// }


// exo3
// var num = Number(prompt("Saisir un nombre"));
// alert("si l'on divise "+ num + " par 5, le reste est de " + num %5);

// exo6
// var confirmation = confirm("change ?? ");
// if (confirmation){
//     document.body.style.backgroundImage = "url(http://www.xgenstudios.com/gameImages/title%20card%20batch/raze-1.gif)";
// }else{
//     alert("false")
// }