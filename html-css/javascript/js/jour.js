var jour = prompt("saisir un jour");
// if (jour == "lundi")
// {
//     alert("mardi")
// }
// if (jour == "mardi")
// {
//     alert("mercredi")
// }
// if (jour == "mercredi")
// {
//     alert("jeudi")
// }
// if (jour == "jeudi")
// {
//     alert("vendredi")
// }
// if (jour == "vendredi")
// {
//     alert("samedi")
// }
// if (jour == "samedi")
// {
//     alert("dimanche")
// }
// if (jour == "dimanche")
// {
//     alert("lundi")
// }

switch (jour) {
  case "lundi":
    console.log("mardi");
    break;
  case "mardi":
    console.log("mercredi");
    break;
  case "mercredi":
    console.log("jeudi");
    break;
  case "jeudi":
    console.log("vendredi");
    break;
  case "vendredi":
    console.log ("samedi");
    break;
  case "samedi":
    console.log("dimanche");
    break;
  case "dimanche":
    console.log("lundi");
    break;
  default:
    console.log("ceci n'est pas un jour");
}
