// For in loop

/*
    For in loops work by looping over enumerable property names of an object.

    for (iterate in iterable) {
        code block to execute over each iterate
    }
*/

let teacher = "Paul Niemczyk";
let randomNums = [8,7,4,5]

let person = {
    name: "Devin",
    age: 18
}

for (i in randomNums) {
    console.log(i, randomNums[i])
}

for (property in person) {
    //             (key     , value) of our object
    console.log(property, person[property])
}