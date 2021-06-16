// For of loops

/*
    For of loop iterates over property value.
    Better suited for arrays and strings when values are needed.

    for (iterate of iterable) {
        block of code o execute on each iterate run
    }
*/

let classmates = ["Kayce", "Alex", "Jessica", "Jacob", "Freya"]

for (student in classmates) {
    console.log(classmates[student])
}

let myText = "This is my sample text"

for (letters of myText) {
    console.log(letters)
}

let person = {
    name: "Devin",
    age: 18  
}

for (i of Object.entries(person)) {
    // for loop is better suited
    console.log(i)
}

for(let [k, v] of Object.entries(person)) {
    console.log(`${k}:  ${v}`)
}