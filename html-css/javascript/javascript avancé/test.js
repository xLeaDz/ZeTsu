// document.getElementById("txt").innerText="SALUT TOUT LE MONDE !!!";
// console.log('Noubliez pas dactiver js')


//declaration avec affectation
// var i = 0;//number
// var i = "0";//string
// var done = false;//boolean
//affectation a une variable deja initialisée²

// i = [];//on le transforme en tableau (array)
// i = {};//on le transforme en objet (object)


// var tabPrenoms = ["Rosita","Bob",'Gaston'];
var tabNoms = [];

// tabPrenoms.push("Roberto");

var d = new Date();
var y = d.getFullYear();
var m = d.getMonth();
var dStr = d.toLocaleDateString();
var time = d.toLocaleTimeString();
var tabPrenoms = ["Rosita", "Bob", 'Gaston', 'LeeJocker'];
for (var i = 0; i <tabPrenoms.length; i++) {
    document.write("<tr>");
    window.alert(tabPrenoms[i])}