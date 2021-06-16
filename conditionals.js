// Conditionals

/*
    JS Conditionals allow us to make decisions and carry out actions according to those decisions.
        - Traditional if; else; and else if statements.
        - Ternary operator
        - Switch statement
    Conditionals execute a piece of it if a condition is true by default.
*/

let myNumber ;
// console.log(Boolean(myNumber))
//if (!myNumber) {
//    console.log("There's something in myNumber variable")
//}

/*
if (conditional) {
    fire off this block of code if above condition is true
}
 */

// If Else

if (myNumber) {
    console.log(`My number is ${myNumber}`)
} else {
    console.log(`The condition appears to be false`)
}

/*
if (conditional) {
    fire off this block of code if above condition is true.
} else {
    Fire off this block of code if above condition is false.
}
 */

// Else if & chaining multiple statements



let name = "Mingus";
let age = 5;

if (name == "Mingus" && age == 5){
    console.log(`Mingus is older than his sister!`)
} else if (name == "Luna" && age == 4){
    console.log(`Luna is way taller and more bossy than her brother`)
} else {
    console.log(`I don't even know who you are, ${name}!`)
}

//Ternaries
/*
    A conditional statement which takes three operands:
        - a condition followed by a question mark (?)
        - truthy expression followed by a colon (:)
        - falsey expression
    Shortcut to the if statement
*/

let lightswitch = true;

// condition ? block of code if true

//if (lightswitch){
//    console.log("Lights are on")
//} else {
//    console.log("Lights are off")
//}

lightswitch ? console.log("lights are on") : console.log("Lights are off")

temp = 100;

temp >= 100 ? console.log("Am I in Florida?")
: temp >= 80 ? console.log("Fine summer day")
: temp >= 60 ? console.log("Spring or Fall?")
: temp >= 40 ? console.log("What's next, the ice age?!")
: console.log("What are you even saying, bud?")

//let temp = 168;

//if(temp > 100) {
//    console.log("Global warming, yo!")
//} else if (temp > 80) {
//    console.log("Nice summer day")
//} else if (temp > 60) {
//    console.log("Spring or Fall?")
//} else if (temp < 60) {
//    console.log("What's next, snow plows?!")
//} else {
//    console.log("This is a weather app!!!!")
//}

// Switch Statements

/*
    Switches evaluate expressions matching their expression value to a
    case clause. Switch then executes that case statement until it is "Broken"
*/
console.log("-------------------------------------------------------------------------------")
switch(false) {
    case temp >= 100:
        console.log("Am I in Florida?")
        break; // prevents tall through into another "if" switch
    case temp >= 80:
        console.log("Fine summer day")
        break;
    default:
        console.log("lol")
        break;
}

switch(new Date().getDay()) {
    case 0:
        console.log("Sunday")
        break
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5: 
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
}

// Challenge

// Create a variable with any number between 0-100.
// For multiples of 3, print "Fizz"
// For multiples of 5, print "Buzz"
// For multiples of 3 and 5, print the number itself.


let myChallenge = 10;

myChallenge % 15 == 0 ? console.log("Fizz Buzz!")
: myChallenge % 5 == 0 ? console.log("Buzz")
: myChallenge % 3 == 0 ? console.log("Fizz")

: console.log(myChallenge)