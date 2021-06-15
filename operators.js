// Operators

/*
    Assignment and Comparison
        - Assignment assigns value to a declaration
        - Comparison compare values
            - Addition +
            - Subtraction -
            - Multiplication *
            - Division /
            - Exponent **
            - Modulus %
            - Math. objects to help with other operations.
        - Comparison Operators compare values
            - Equality and Strict Equality == & ===
            - Inequality and Strict Inequality !==! & !===!
            - Greater than or Less than > <
            - Greater  
*/

let age = 25;

// Modulus - provides remainder of Euclidean division.

console.log(25 % 5);

// Math Object - allows access to more advanced mathmatical computations.

console.log(Math.max(5, 2, 17, 22, 97))

// Equality vs Strict Equality Operators
/*
    Equality & Strict Equality Operators
        - Return truthy or falsey value depending on the given condition
        - Equality performs type coercion on one of the values it's being compared to. For ex. 5 == "5" converts str into int
        - Strict Equality checks if the value and its type are the same
*/

console.log(5 == 5) // returns true

console.log(5 == "5") // returns true because type coersion

console.log(5 === "5") // returns false because checking for values & value type

let x = 5;
let y = "5"

console.log(typeof x, typeof y) // same value different data type

console.log("---------------------------------")
// Inequality and Strick Inequality

console.log(5 !=  7)   // returns true (5 isn't 7)

console.log(5 != 5) // returns false (values the same)

console.log(5 != "5") // returns false (type coercion)

console.log(5 !== "5") 

// AND || Comparison
// Returns true if two boolean values are true
console.log(true && true)
// returns false if either of the value is not the same
console.log(true && false)

// OR || Comparison
// Returns true if either of the values are true

console.log(true || false)
console.log(true || true)
console.log(false || false)

// Strict Inequality & Booleans !=
let flippedBool = !true
console.log(flippedBool)
console.log("-------------------------------")

let date = new Date
let year = date.getFullYear()
let month = date.getMonth()
month += 1
let day = date.getDay()

//console.log(`Today is ${day}` `day of ${month}` `of ${year}`)
console.log(date.toDateString()) 

// Null vs Undefined vs NaN

/*
    Null - empty value; a countainer or space for something to fill it in the future.
    Undefined - default value of a declaration. Does not act as an empty container.
    Not a Number (NaN) - determines if a value is not a number
*/

console.log(isNaN(123)) // returns false (is a number)
console.log(isNaN(0/0)) // returns true (can'tdivide by zero; NaN)
console.log(isNaN(NaN)) // returns true
console.log(isNaN(Math,sqrt(-1))) // returns true because imaginary (i) number is NaN
console.log("-------------------------------------------------------------------")
let firstName = "Devin"
let age = "18"
let cityState = "Indianapolis, Indiana "

//console.log(firstName)
//console.log(age)
//console.log(cityState)


// Platinum - Utilize a method that will make all of your text capitalized and check if you live in Indianapolis, Indiana
console.log(`My name is ${firstName}. I'm {age} years old. I was born and still live in ${cityState}`)

let concat_full = firstName + " " + age + " " + cityState
console.log(concat_full)
let concatFullLength = concat_full.length()
console.log(concatFullLength)

result.toUppercase()

result.includes("Indianapolis, Indiana")

