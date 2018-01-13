'use strict';
var pierwszyDiv = document.getElementById("parFirst");
//to samo
//var pierwszyDiv = document.querySelector("#parFirst");

//pobiera rodzica
//var rodzicDiva = pierwszyDiv.parentElement;
//console.log(rodzicDiva);


//pobiera dziecko
//var pierwszyDiv = document.querySelector("#parFirst");
//
//var dzieciDiva = pierwszyDiv.children;
//console.log(dzieciDiva);


//pobiera ostatnie dziecko
//var pierwszyDiv = document.querySelector("#parFirst");
//
//var dzieciDiva = pierwszyDiv.lastChild;
//console.log(dzieciDiva);

//var rodzenstwoNastepne = pierwszyDiv.nextElementSibling;
//console.log(rodzenstwoNastepne);

//var rodzenstwoPoprzednie = pierwszyDiv.previousElementSibling;
//console.log(rodzenstwoPoprzednie);

var dzieciElementu = pierwszyDiv.childNodes;
dzieciElementu.forEach( function( element ){
    console.log( "nodeType = " + element.nodeType);
});

//var dzieciElementu2 = pierwszyDiv.children;
// for (var i =0; i<dzieciElementu2.length; i++){
//     console.log(dzieciElementu2[i]);
// }