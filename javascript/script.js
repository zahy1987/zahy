//Variables declared with var, let , and const
var thisIsVar ="This is a var variabke"; //var variable
let letVariable = [1, 2, 3,]; // const varable

// Named fuction
function learning() {  //named fuction
    console.log("This is a named function.");
}

learning();

//Anonimous fuction assigned to a variable
let myDreamsRemote = function() {
    console.log("This is an anonymous dream fuction.");
};

myDreamsRemote();

// Built-in fuction  (exemple: preseInt)
let numberString = "123";
let parsedNumber = parseInt(numberString);
console.log("Parsed number using parseInt:", parsedNumber);

// if/else conditional statement
let condition = true;
if (condition) {
    console.log("Condition is true.");
}
else {
    console.log("condition is false.");
}

//Switch conditional statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 1:
        console.log("Wednesday");
        break;
    case 1:
        console.log("Thursday");
        break;
    case 1:
        console.log("Friday");
        break;
        default:
            console.log("Weekend");
}

//Array of different data types
let stringArray = ["apple" , "banana" , "cherry"]; //Array of strings
let numberArray = [1, 2, 3, 4, 5, 66, 999]; //array of numbers
let mixedArray = [ 1, 30, "bla", true];
console.log("bla bla bla", mixedArray);

// Loop through an array
for ( let i =0; i < numberArray.length; i++) {
        console.log("String array element:", numberArray[i]);
    }

    // Creating and using objects
    let person = {
        firstname: "zahy",
        lastName: "yhaz",
        age: 38,
        fullname: function() {
            return this.firstname + "" + this.lastName;
        }
    };

    // Accessing object properties
    console.log(`Person"s first name:`, person.firstname); //Access firstName property
    console.log("Person`s full name:", person.fullname()); // call fullName method