// Functions

/*
    Function is a block of code that can take in parameters (door), perform an action, and return the result of that action.
    There are two types of functions:
        - function declaration
        - function expression
            - arrow functions
    Functions have a default return statement of undefined unless otherwise specified
*/

// Function Declaration

/*
    Declarations are hoisted. This is their template.
    function(parameter) {
        block of code to be run
        return statement (not needed)
    }
*/

function funDeclaration() {
    //console.log("This is a function declaration.")
    return "This is a function declaration"
}

// Function will not run until it is called. calling === invoking
// Parantheses immediately invoke the function.

//funDeclaration()

//console.log(funDeclaration())

let result = funDeclaration()

console.log(result)
// Functions can have a 0 - infinite amount of parameters.
// Parameters act as doors to let arguements inside of the function
function greetUser(name) {
    return `Hello ${name}`
}
let userName1 = "Kinsey"
console.log(greetUser(userName1))

// Function expression
/*
    Function expression utilizes a variable as a placeholder.
    Function expression is not hoisted.
*/

let myDog = function (name, breed) {
    console.log(`${name} is a ${breed}`)
}

console.log(myDog("Mingus", "Mini Dachshund"))

// Arrow Function
/*
    Introduced in ES6
    More concise way of writing functions
    Arrow functions using function expression ONLY
*/

// Concise Body Function
// Can only have one parameter if it's not enclosed by ( )
//let greeting = () => console.log("Hello bud.")

//greeting()

// Block Body Arrow Function

//let sendEmail = (email, name) => {
//    return `Hello ${name}:
    
//    We have been trying to reach you about your car's extended warranty.
    
//    Is this email the correct email for you? ${email}
    
//    Sincerely,
    
//   Annoying scammer.`
//}

//console.log(sendEmail("SpecBoya@gmail.com", "Spec"))

// Immediately Invoked Function Execution
/*
    Function declarations that have no name and are immediately invoked.
*/

//(function () {
//console.log("lol")
//})();

// Function return statements
// Must always return only one value

//function returnFun(x, y) {
//    return [2, 5]
//}

//console.log(returnFun(2, 5))

/*
    Challenge
    Create a function named tipCalculator which takes the bill, the sales tax, and the tip percentage and returns the tip amount

    
*/
console.log("------------------------------------------")

/*
let tipCalculator = (bill, salesTax, tipPercentage) => {

}
let bill = (70)
let salesTax = (0.7)
let tipPercentage = 20 */

//function tipCalculator(bill, salesTax, tipPercentage) {
//    let taxAmt = bill * (salesTax/100)
//    let totalBill = bill + taxAmt
//    let totalTip = totalBill * (tipPercentage/100)
//    return totalTip
//}

//console.log(tipCalculator(100, 7, 20))

// Extra spicy challenge
/*
    create a function of your own choice (Declaration or Expression) named capitalizeName which takes our parameter. It then capitalizes the first letter of the name and returns the full name to you.
*/

//function capitalizeName(name) {
//    let lowerName = name.toLowerCase()
//    let fletter = lowerName[0].toUpperCase() 
//    return fletter + lowerName.slice(1)
//}
//console.log(capitalizeName("DEVIN"))

//console.log(upperName)

// Create a function which reverses a string using recursion

//function revStr(str) {
//    return (str === "") ? "" : revStr(str.substr(1)) + str.charAt(0);
//}

//console.log(revStr("mingus"))

let firstLast = (firstname, lastname) => {
    return firstname, lastname
}

console.log(firstLast("Devin", "Howell"))