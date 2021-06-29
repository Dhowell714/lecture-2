
/*
    Array Destructuring & Spread Operator

    Spread Operator

        Spread operator pulls out all elements of an array and gives you a standalone list of them.
            * Denoted by ...
            * Must be inserted into new array [...]
            * Spread operator unpacks the values from one array or object into another.
*/

//let fullName = ["Luna", "Silver"]
// This causes fulName array to benested inside of a tempArr array.
//let tempArr = [fullName]

//console.log(tempArr)

//let tempArr = [...fullName]

//console.log(tempArr)

// We can use multiple spread operators to unpack multiple arrays into a new array.

//let birthPlace = ["Indianapolis", "Indiana"]

//let nameBirth = [...fullName, ...birthPlace]
//console.log(nameBirth)

//... & Numbers

//console.log(Math.min(1, 5, -3))

//let prices = [10.99, 2.99, 5.83, 27.99, 6.58]
// This fails because an array is NaN
//console.log(Math.min(prices), typeof prices)

//console.log(Math.min(...prices))

// ... & Objects
//let persons = [{name: "Mingus", age: 35}, {name: "Daphne", age: 0}]
//console.log(persons)
//persons.push({name: "Freya", age: 21})
//let copiedPersons = [...persons]
//console.log(copiedPersons)

//let newPersons = persons.map(person => ({
//    name: person.name,
//    age: person.age
//}))
//console.log(persons)
//console.log("--------------")
//console.log(copiedPersons)

/*
    JavaScript has 5 primitive data types:
        * boolean
        * null
        * undefined
        * string
        * number
    These data types are assigned to a value

    Three data types passed by reference:
        * array
        * function
        * object
*/

//let x = 10; // MEMORY: Variable x Value 10
//let y = "abc" //MEMORY: Variable y Value "abc"

//let a = x
//let b = y

//console.log(x, y, a, b)

//let arr = [] // create an array memory. Arr receives address location of that array somewhere in memory.

//arr.push(1)

/*
    Variable                   Value              Address              Object
    arr                        <#001>             #001                 []
    arr                        <#001>             #001                 [1]
*/

//let reference = [1];
//let refCopy = reference

/*
    Variable                   Value              Address              Object
    arr                        <#001>             #001                 []
    arr                        <#001>             #001                 [1]
*/



//Utilize object constructor

//let copiedObject = new Object(ourObject)
//console.log(copiedObject)

//Utilize spread operator
//let copiedUsingSpread = {...ourObject}
//console.log(copiedUsingSpread)
//copiedUsingSpread.name = "Testing"
//console.log(copiedUsingSpread)
//console.log(ourObject)

// Array Destructuring

/*
    array destructuring allows you to unpack values from arras, or properties from objects -> into distinct variables.
        * Similar syntax as array literal
        * Left hand side of assignment operator
        * Used to unpack array/object into distinct variables
*/

//let cities = ["Boston", "New York", "Chicago", "LA"]

/*
    JS unpacks the values from cities array and assigns each value it's own variable based on their original position in the array.
*/
//let [boston, newYork, chicago, la] = cities
//console.log(boston)
//console.log(newYork)
//console.log(chicago)
//console.log(la)

/*
Rest Syntax

    Rest looks like spread syntax. Spread expands an array. 
    Rest collects multiple elements and condenses them into one.
*/

//let cars = ["Porsche", "BMW", "Mserati", "Aston Martin", {transmission: "manual", year: 2012, wheelsDriven: "rwd"}]

//let [porsche, bmw, ...otherinfo] = cars
//console.log(porsche,bmw)
// otherInfo becomes an array of the rest of the elements of cars.
//console.log(otherinfo)

// How to skip values using rest operator.
// Rest operator must be the last element defined.
//let [brand, , , ...features] = cars

//console.log(brand, features)

//console.log("---------------------------------")

// Challenge
/*
    Create an array called statesVisited wih a list of states you’ve been to.
    Create an instance of that array called statesCountries and unpack all of the array values of statesVisited inside it. Now add additional countries to which you have been (if none, add ones that you intend on visiting).
    Now unpack each individual state into its own variable, and unpack all of the countries into its own ‘countries’ variable.
    Now take each individual country and use rest operator to pack up all of the countries into one variable and leave all of the states unpacked in an array.
*/

/*
let statesVisited = ['tennesse', 'indiana', 'kentucky', 'florida', 'georgia', 'wisconsin', 'michigan', 'southDakota', 'ohio']

let statesCountries = [...statesVisited, "Japan", "Finnland"]
statesCountries.push("England")
console.table(statesCountries)

let [tennesse, indiana, kentucky, florida, georgia, wisconsin, michigan, southDakota, ohio, ...countries] = statesCountries

console.table(tennesse, indiana, kentucky, florida, georgia, wisconsin, michigan, southDakota, ohio, countries)

let result = [tennesse, indiana, kentucky, florida, georgia, wisconsin, michigan, southDakota, ohio, ...countries]
console.log(result)
*/



let family = {
    familyName: "Niemczyk",
    parents: [
        {name: "Hannah", age: 65},
        {name: "Zbigniew", age: 78}
    ],
    country: ["Germany", "England", "Poland"]
}

//Challenge
// access last name, mom's name, and poland out of object using respective variables.

//let challengeName = (family.familyName[0], family.parents.name, family.country[2])

//console.log(challengeName)

let {
    familyName: lastName,
    parents: [
        {name: momName}
    ],
    country: birthHome
} = family;

console.log(lastName, momName, birthHome)