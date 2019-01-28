// var a = "Bonjour à tous";
// console.log(a);
// var z = Number(prompt("Saisir un nombre"));
// if (z == b) {
//   alert("Gagné !!!");
// } else {
//   alert("Perdu");
//  }

// expected output: 0, 1 or 2

// console.log(getRandomInt(100));
// expected output: 0

// console.log(Math.random());
// expected output: a number between 0 and 1

var b = Math.floor(Math.random() * 100) + 1;
 console.log(b);
var nombre = Number(prompt("Entrez un nombre :"));
var tentative = 1;

while (nombre !== b && tentative < 6) {
  if (nombre >= b) console.log(nombre + " est trop grand");
  else if (nombre <= b)
  console.log(nombre + " est trop petit");
  tentative++;
  var nombre = Number(prompt("Entrez un nombre:"));
}

if (nombre == b) console.log("Bravo ! La solution est " + b);
else alert("Vous avez perdu! la solution est "+ b);
