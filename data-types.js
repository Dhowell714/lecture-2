// Data Types

/*
    There are 6 primitive data types in JS.
        - string
        - number
        - boolean
        - null
        - undefined
*/

// String

let myString = 'this is a string';
// Can use ' ', " ", or ` ` to encompass your string. Just be consistent.

console.log(myString)

// String Concatenation

let san = "San";
let diego = "Diego";

console.log(san + " " + diego)

let concat_full = san.concat(diego) 

console.log(concat_full)

let LongString = "This is a long string \n and I would like it on multiple lines"

console.log(LongString)

// Strings can be accessed by their index, using [] notation.

console.log(LongString[4])

// Temple literal or Template String
/*
    - Utilizes back ticks ` ` to allow us to contain placeholders.
    - Syntax for it is `string and a ${value}`
*/

let firstName = "Paul"

console.log(`Hello, my name is ${firstName}`)

// Numbers

let integer = 90;
console.log(integer)

let float = 5.6
console.log(float)


let rounded = 0.2 + 0.1
console.log(rounded) // Returns 0.3000000000000000000004

let strNumber = "125"
let strConvertedNumber = Number(strNumber)
console.log(strConvertedNumber)

// Literals
// Hardcoded values

let literalString = "literal string";
console.log(literalString)

//Booleans

/*
    True of False values
        - Booleans have six primitive falsey values.
            - 0
            - Empty string " "
            - False
            - Undefined
            - Null
            - NaN (Not a Number)
        - Any other values in JS is considered truthy

*/

let trueValue = true
console.log(trueValue)
let falseValue = false
console.log(falseValue)

let truthy = Boolean(5)
console.log(truthy)

console.log(Boolean(0))