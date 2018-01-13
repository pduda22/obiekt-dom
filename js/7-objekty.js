
'use strict'
class Ogloszenie {
    constructor(tytul, opis, kategoria, status, cena){
        this.tytul= tytul;
        this.opis = opis;
        this.kategoria = kategoria;
        this.status = status;
        this.cena = cena;
    }
    pobierzTytul(){
        return this.tytul;
    }
}

var ogloszenie1 = new Ogloszenie("Sprzedam Opla", "Kombi w dobrym stanie", "Motoryzacja", "aktywne", 15000);
var ogloszenie2 = new Ogloszenie("Sprzedam VW", "Do kasacji", "Motoryzacja", "nieaktywne", 2000);
var ogloszenie3 = new Ogloszenie("Telefon", "smartphone", "GSM", "aktywne", 100);

//console.log(ogloszenie1);
//console.log(ogloszenie2);
//console.log(ogloszenie3);

console.log(ogloszenie2.tytul);
console.log(ogloszenie2.pobierzTytul());

var arr = [
    {tytul: "w pustyni", stan : true},
    {tytul: "krag", stan : false},
    ];
for ( var i=0; i<arr.length; i++){
   if (arr[i].stan == true){
       console.log("Hurra");}
       else {
           console.log("nie huraa");
       }
   }
