// Variables

/*

    - Primitive data type which can hold any type of value (object)
    - Begin with a declaration and can have values assigned, but not required.
    - Declarations are case sensitive. Student =/ student
    - Preferrable variable naming convention is camelCase.
    - Variables may not begin with a number. They can begin with _ or $.
*/

let student; // Variable declaration

student = "Jessica"

console.log(student)

let homework = "Never" // Var declaration of homework with str value of "never"

var teacher; // Variable Declaration
// Old Keyword. Causes lots of headaches with scope and hoisting

const classroom = "Web Dev"; // Variable declaration
// Declares a variable that may not be reassigned. 
// Cannot be redefined by itself
console.log(classroom)

// console.log(classroom= "Math") wont work.

console.log(classroom = "Math")