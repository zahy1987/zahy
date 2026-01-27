
//=====================================================
// JS BASICS – explicat pas cu pas
//=====================================================

// Variables declared with var, let , and const
var thisIsVar = "This is a var variable"; // var variable
/* 
var = vechea formă de variabilă, poate fi schimbată și accesată oriunde în fișier
nu e recomandat în cod modern, dar e bine să știi cum funcționează
*/

let letVariable = [1, 2, 3]; // let variable
/*
let = variabilă care poate fi schimbată, dar e bloc-scoped
adică există doar în blocul unde ai definit-o ({} sau funcție)
*/

const constVariable = [10, 20, 30]; // const variable
/*
const = valoare care nu se poate reatribui
atenție: array sau obiect const se poate modifica la interior, doar nu poți să pui alt array
*/


/*------------------------------------------
FUNCȚII CU NUME
------------------------------------------*/
function learning() {  // named function
    console.log("This is a named function.");
}
/*
Funcția asta are nume = learning
Codul din interior nu rulează decât când apelăm funcția
- ca să o pornești, scrii: learning()
- dacă nu o apelezi, JS trece peste ea
*/
learning(); // apelarea funcției – abia aici rulează


/*------------------------------------------
FUNCȚIE ANONIMĂ
------------------------------------------*/
let myDreamsRemote = function() {
    console.log("This is a anonymous dream function.");
};
/*
Funcția nu are nume, dar e stocată într-o variabilă
Variabila devine „butonul” care pornește codul
Poți să o apelezi oricând cu myDreamsRemote()
*/
myDreamsRemote(); // rulează funcția anonimă


/*------------------------------------------
BUILT-IN FUNCTION (funcții deja făcute de JS)
------------------------------------------*/
let numberString = "123";
let parsedNumber = parseInt(numberString);
console.log("Parsed number using parseInt:", parsedNumber);
/*
parseInt = transformă text în număr întreg
dacă textul nu e număr valid, returnează NaN (not a number)
*/


/*------------------------------------------
IF / ELSE (verificare condiții)
------------------------------------------*/
let condition = true;
if (condition) {
    console.log("Condition is true.");
} else {
    console.log("Condition is false.");
}
/*
if = dacă condiția e adevărată, rulează blocul din interior
else = dacă nu e adevărată, rulează alt bloc
Poți folosi și else if pentru mai multe cazuri
*/


/*------------------------------------------
SWITCH (când ai mai multe cazuri posibile)
------------------------------------------*/
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break; // break = oprește switch-ul aici
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
        break;
}
/*
switch = verifică valoarea unei variabile și alege blocul potrivit
case = fiecare caz posibil
default = dacă nu se potrivește niciun caz
break = oprește executarea altor case-uri după ce se potrivește unul
*/


/*------------------------------------------
ARRAY-URI
------------------------------------------*/
let stringArray = ["apple", "banana", "cherry"]; // array of strings
let numberArray = [1, 2, 3, 4, 5, 66, 999]; // array of numbers
let mixedArray = [1, 30, "bla", true]; // array cu tipuri diferite

console.log("Mixed array:", mixedArray);
/*
Array = listă de valori
- pot fi toate de același tip sau mixte
- se accesează cu index: array[0] = primul element
- array.length = câte elemente sunt
*/


/*------------------------------------------
FOR LOOP (bucle)
------------------------------------------*/
for (let i = 0; i < numberArray.length; i++) {
    console.log("Number array element:", numberArray[i]);
}
/*
for = repetă codul pentru fiecare element din array
- i = indexul curent, începe de la 0
- condiția i < numberArray.length = cât timp să ruleze bucla
- i++ = trece la următorul index
*/


/*------------------------------------------
OBIECTE
------------------------------------------*/
let person = {
    firstName: "zahy",
    lastName: "yhaz",
    age: 38,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
/*
Obiect = grup de proprietăți + funcții
- firstName, lastName, age = date
- fullName() = metodă care returnează numele complet
- this = face referire la obiectul curent (person)
*/


/*------------------------------------------
ACCESAREA PROPRIETĂȚILOR
------------------------------------------*/
console.log(`Person's first name:`, person.firstName); // Access firstName property
console.log("Person`s full name:", person.fullName()); // Call fullName method
/*
Accesez proprietățile obiectului folosind .
- person.firstName = accesează firstName
- person.fullName() = rulează funcția fullName
*/
