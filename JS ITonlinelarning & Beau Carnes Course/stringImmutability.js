// Setup - Configurare inițială
var myStr = "Aharia";  // Inițializare cu primul string

// Only change code below this line
// Doar schimbă codul de aici în jos

myStr = "Zaharia";  // Reatribuirea variabilei cu un nou string

console.log(myStr);  // Afișează: "Zaharia"

/*
    EXPLICAȚIE IMPORTANTĂ: STRING IMMUTABILITY
    
    Deși pare că am schimbat string-ul original, de fapt am creat un NOU string.
    
    În JavaScript, string-urile sunt IMMUTABLE (imutabile) - adică NU pot fi modificate
    după ce au fost create.
    
    Ce se întâmplă de fapt:
    1. Inițial: myStr → "Aharia" (string creat în memorie)
    2. După atribuire: myStr → "Zaharia" (un NOU string creat în memorie)
    3. String-ul "Aharia" încă există în memorie, dar nu mai este referit de myStr
*/

// --- DEMONSTRAȚIE PRACTICĂ ---

console.log("\n=== DEMONSTRAȚIE STRING IMMUTABILITY ===");

// Exemplul 1: Încercare de modificare directă (NU funcționează)
var str1 = "Hello";
str1[0] = "J";  // Încerc să schimb primul caracter
console.log("str1 după str1[0] = 'J':", str1);  // Tot "Hello"! Caracterele nu se schimbă

// Exemplul 2: Crearea unui nou string prin concatenare
var str2 = "Hello";
var str3 = "J" + str2.substring(1);  // Creare NOU string
console.log("str2 original:", str2);  // "Hello" - neschimbat
console.log("str3 nou:", str3);       // "Jello" - string nou

// Exemplul 3: Metode care returnează string-uri noi
var str4 = "  text cu spatii  ";
var str5 = str4.trim();  // .trim() returnează un NOU string
console.log("str4 original:", "'" + str4 + "'");  // '  text cu spatii  '
console.log("str5 după trim:", "'" + str5 + "'"); // 'text cu spatii'
console.log("str4 este tot același?", str4 === "  text cu spatii  "); // true

// Exemplul 4: Comparație de referințe
var original = "test";
var modificat = "test";  // Același conținut, dar string nou
var altaReferinta = original;  // Aceeași referință

console.log("\nComparații:");
console.log("original === modificat:", original === modificat); // true (conținut egal)
console.log("original === altaReferinta:", original === altaReferinta); // true (aceeași referință)

// ATENȚIE: chiar dacă conținutul e același, fiecare string literal creează un nou string