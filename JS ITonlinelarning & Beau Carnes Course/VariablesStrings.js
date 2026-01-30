// Exemplu de concatenare folosind operatorul +=

// Definim un adjectiv
var anAdjective = "awesome!";

// Inițializăm un șir de caractere care descrie pe cineva
var ourStr = "Zahy is ";

// Adăugăm (concatenăm) adjectivul la șirul existent folosind +=
ourStr += anAdjective;

// Afișăm rezultatul în consolă
console.log(ourStr); // Va afișa: Zahy is awesome!

// Acum facem același lucru pentru un alt mesaj

// Definim un alt adjectiv
var someAdjective = "worthwhile";

// Inițializăm un alt șir de caractere
var myStr = "Learning to code is ";

// Concatenăm noul adjectiv
myStr += someAdjective;

// Afișăm al doilea rezultat
console.log(myStr); // Va afișa: Learning to code is worthwhile

var nume = "Zaharia";
var varsta = 39;
var ocupatie = "programator";
var oras = "Nottingham";

var prezentare = `${nume} are ${varsta} de ani, este ${ocupatie} și locuiește în ${oras}.`;
// Rezultat: "Zaharia are 39 de ani, este programator și locuiește în Nottingham."

console.log(prezentare)