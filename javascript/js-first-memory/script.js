

/* JS BASICS
│
├─ VARIABLES
│   ├─ var -> veche, globală
│   ├─ let -> bloc-scoped
│   └─ const -> nu se reatribui, dar modifici interiorul
│
├─ FUNCTIONS
│   ├─ Named Function
│   │    learning() -> pornește când apeși butonul
│   └─ Anonymous Function
│        stocată într-o variabilă -> myDreamsRemote()
│
├─ BUILT-IN FUNCTIONS
│   └─ parseInt() -> transformă text în număr
│
├─ CONDITIONS
│   ├─ if/else -> decizii simple
│   └─ switch -> multiple cazuri
│
├─ ARRAYS
│   ├─ stringArray = ["apple","banana","cherry"]
│   ├─ numberArray = [1,2,3,4,5]
│   ├─ mixedArray = [1,"bla",true]
│   ├─ array.length -> câte elemente sunt
│ 
├─ LOOPS
│   └─ for (let z=0; z<array.length; z++) -> repetă elementele
│
└─ OBJECTS
    ├─ proprietăți: firstName, lastName, age
    ├─ metodă: fullName() -> returnează full name
    └─ this -> referință la obiectul curent
*/

//Variables declared with var, let , and const
var thisIsVar = "This is a var variable"; // var variable
let letVariable = [1, 2, 3]; // let variable
const constVariable = [10, 20, 30]; // const variable


/*------------------------------------------
FUNCȚII
- asta e o funcție cu nume
- codul din interior nu se execută singur
- doar când apeși numele funcției, rulează
------------------------------------------*/
function learning() {  //named function
    
    // ia elementul cu id="learning"
    let headingElement = document.getElementById("learning");

    // schimbă textul lui
    headingElement.textContent = "Ha ha ha ha !";

    console.log("This is a named function.");
}

//apelezi funcția aici
learning();


/*------------------------------------------
FUNCȚIE ANONIMĂ
- nu are nume, e stocată într-o variabilă
- variabila devine „butonul” care pornește codul
------------------------------------------*/
let myDreamsRemote = function() {
    console.log("This is a anonymous dream function.");
};

//apelezi funcția
myDreamsRemote();


/*------------------------------------------
BUILT-IN FUNCTION
- JavaScript are deja funcții gata făcute
- parseInt transformă text în număr
------------------------------------------*/
let numberString = "123";
let parsedNumber = parseInt(numberString);
console.log("Parsed number using parseInt:", parsedNumber);


/*------------------------------------------
IF / ELSE
- verifică o condiție și alege ce să facă
- true = dacă e adevărat, else = dacă e fals
------------------------------------------*/
let condition = true;

if (condition) {
    console.log("Condition is true.");
} else {
    console.log("Condition is false.");
}


/*------------------------------------------
SWITCH
- când ai mai multe opțiuni și vrei să alegi una
- default = dacă nu se potrivește niciun caz
------------------------------------------*/
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
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
}


/*------------------------------------------
ARRAY-URI
- liste de chestii
- pot fi doar text, doar numere sau mix
------------------------------------------*/
let stringArray = ["apple", "banana", "cherry"]; // array of strings
let numberArray = [1, 2, 3, 4, 5, 66, 999]; // array of numbers
let mixedArray = [1, 30, "bla", true]; // mixed data types

console.log("Mixed array:", mixedArray);


/*------------------------------------------
FOR LOOP
- rulează codul pentru fiecare element din listă
- i începe de la 0 și merge până la lungimea array-ului
------------------------------------------*/
for (let i = 0; i < numberArray.length; i++) {
    console.log("Number array element:", numberArray[i]);
}


/*------------------------------------------
OBIECTE
- grup de chestii: proprietăți + funcții
- this = se referă la obiectul curent
------------------------------------------*/
let person = {
    firstName: "zahy",
    lastName: "yhaz",
    age: 38,
    fullName: function() {
        // returnează numele complet
        return this.firstName + " " + this.lastName;
    }
};


/*------------------------------------------
ACCESAREA PROPRIETĂȚILOR OBIECTULUI
- pun console.log ca să văd ce e în interior
------------------------------------------*/
console.log(`Person's first name:`, person.firstName); // Access firstName property
console.log("Person`s full name:", person.fullName()); // Call fullName method
