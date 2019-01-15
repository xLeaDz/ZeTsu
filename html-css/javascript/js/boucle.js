/**
 * les boucles
 */
// -- La boucle for
/**
 * la boucle for
 * 1. on initialise un compteur que l'on stock dans une variable
 * 2. On definit la condition qui doit être vrai
 * 3. On incrément ou un décremente
 */
// for (var i = 0; i <= 100; i += 10) {
//   document.write("tour de boucle n°" + i + "<br>");
// }

/**
 * la boucle while
 * très utilisées quand on ne connaît pas le nombre de tours de
 * boucle a l'avance
 */

//  var j = 0;

//  while (j <= 100) {
//    document.write("<hr><p>Tour de boucle while n°" + j + "</p>");j+= 10;
//  }


document.write("hello");

var temperature = 9;
if (temperature <= 9){
  document.write('il fait froid');
}else{
  document.write('il fait chaud');
}

document.write("<table>");
for (var i = 1; i <= 10; i++) {
  document.write("<tr>"); /* début de ligne */

  for (var j = 1; j <= 10; j++) {
    document.write("<td>");
    document.write(i * j);
    document.write("</td>");
  }
  document.write("</tr>"); /* fin de ligne */
}
document.write("</table>");