// While Loops

/*
    While statement creates a loop so long as the condition weve specified returns true.

    while (condition) {
        code statement
    }

    To stop a while loop from executing, the condition must at one point return false.
*/

//let count = 0;

//while(count <= 100) {
//    console.log(count)
//    count += 1
//}

// Challenge

// Fizz Buzz + Loops
// Create a loop which will iterate over numbers 100-500
// Utilize standar for loop first


for (i = 100; i < 501; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0 && i % 3 != 0) {
        console.log("Buzz")
    } else {
        console.log(`${i} is not divisible by either number.`)
    }
}