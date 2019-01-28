var nbr;
do {
  nbr = Number(prompt("saisir un nombre obligatoire ?"));
} while (isNaN(nbr));
 document.write(nbr);
