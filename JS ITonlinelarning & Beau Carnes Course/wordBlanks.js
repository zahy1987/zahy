/*
    FUNCȚIA wordBlanks - Construirea de propoziții din părți de vorbire
    
    Această funcție primește 4 parametri și construiește o propoziție
    folosind concatenarea string-urilor.
    
    Parametrii funcției:
    1. myNoun - substantiv (ex: "dog", "cat", "bike")
    2. myAdjective - adjectiv (ex: "big", "small", "red")
    3. myVerb - verb (ex: "ran", "walked", "flew")
    4. myAdverb - adverb (ex: "quickly", "slowly", "happily")
*/

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // You code below this line
    // Inițializăm un string gol unde vom construi propoziția
    var result = "";
    
    // Construim propoziția prin concatenarea parametrilor cu texte fixe
    // Operatorul += adaugă la string-ul existent
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    
    // You code above this line
    // Returnăm propoziția finală
    return result;
}

// Testarea funcției cu diferite combinații de cuvinte

// Test 1: Propoziție cu animale
console.log(wordBlanks("dog", "big", "ran", "quickly"));
// Rezultat: "The big dog ran to the store quickly"

// Test 2: Propoziție absurdă (creativă)
console.log(wordBlanks("bike", "slow", "flew", "slowly"));
// Rezultat: "The slow bike flew to the store slowly"

/*
    EXPLICAȚII DETALIATE:
    
    1. STRUCTURA FUNCȚIEI:
       - function wordBlanks(param1, param2, param3, param4) { ... }
       - Parametrii sunt variabile locale disponibile doar în funcție
       - Fiecare parametru primește o valoare când funcția este apelată
    
    2. CONCATENAREA STRING-URILOR:
       - "The " + myAdjective + " " + myNoun + " " + myVerb + ...
       - Trebuie să adăugăm spații (" ") între cuvinte
       - Părțile fixe: "The ", " to the store "
       - Părțile variabile: parametrii funcției
    
    3. TESTAREA:
       - Apelăm funcția cu diferite argumente
       - Funcția returnează rezultatul
       - console.log() afișează rezultatul în consolă
    
    4. EXEMPLE ADIȚIONALE:
*/
console.log("\n=== EXEMPLE ADIȚIONALE ===");

// Test 3: Cu alte cuvinte
console.log(wordBlanks("cat", "fluffy", "jumped", "gracefully"));
// "The fluffy cat jumped to the store gracefully"

// Test 4: Cu nume de persoană ca substantiv
console.log(wordBlanks("John", "happy", "drove", "carefully"));
// "The happy John drove to the store carefully"

/*
    EXERCIȚIU DE ÎMBUNĂTĂȚIRE:
    Cum am putea face funcția mai flexibilă?
    
    1. Adăugarea mai multor parametri
    2. Folosirea template literals (backticks)
    3. Adăugarea punctuației finale
*/

// VERSIUNE ÎMBUNĂTĂȚITĂ:
function wordBlanksImproved(myNoun, myAdjective, myVerb, myAdverb, destination) {
    // Folosim template literals pentru o sintaxă mai clară
    var result = `The ${myAdjective} ${myNoun} ${myVerb} to the ${destination} ${myAdverb}.`;
    return result;
}

console.log("\n=== VERSIUNE ÎMBUNĂTĂȚITĂ ===");
console.log(wordBlanksImproved("dog", "big", "ran", "quickly", "park"));
// "The big dog ran to the park quickly."

console.log(wordBlanksImproved("bird", "small", "flew", "swiftly", "forest"));
// "The small bird flew to the forest swiftly."

/*
    CE AI ÎNVĂȚAT ASTĂZI:
    
    1. Cum să definești o funcție cu parametri
    2. Cum să concatenezi string-uri în interiorul unei funcții
    3. Cum să testezi o funcție cu diferite valori
    4. Cum să folosești operatorul += pentru a adăuga la un string existent
    5. Importanța spațiilor în concatenarea string-urilor
    
    CONCEPTE CHEIE:
    - Funcții cu parametri
    - Concatenare string-uri
    - Testare și debugging cu console.log()
    - Reutilizarea codului prin funcții
*/

