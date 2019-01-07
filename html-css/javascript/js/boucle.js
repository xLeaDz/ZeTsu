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
for (var i = 1; i <= 10; i += 2) {
  document.write("tour de boucle n°" + i + "<br>");
}

/**
 * la boucle while
 * très utilisées quand on ne connaît pas le nombre de tours de
 * boucle a l'avance
 */

var j = 1;

while (j <= 10) {
  document.write("<hr><p>Tour de boucle while n°" + j + "</p>");j++;
}
