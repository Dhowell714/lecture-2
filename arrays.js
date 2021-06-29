let list = [`orange`, `banana`, `oreos`];

console.log(list[1]);

let students = [`Tony`, `Marshall`, `Rhys`, `Ray`, 23, true, [`Ryan`, `Will`, `Amira`]];

console.log(typeof students);
console.log(students instanceof Array);

console.log(students[2]);
console.log(students[0]);

/*
CHALLENGE

! - dive into nested array and pull value `will`
! - print out "Hello Will!"
*/

console.log(students[6][1])
let student = students[6][1];
console.log(`Hello ${student}!`);

let food = [`Pecan pie`, `Shrimp`, `Quesadilla`, `Cheese cake`, `Hotdog`];

food.push(`Pizza`); //Appends `Pizza` to end of array
console.log(`push:`, food);

food.splice(1, 1, `Bananas`);
console.log(`splice:`, food);

food.pop();
console.log(`pop:`, food)

/*

*/

let movies = ["My neighbor totoro", "Spirited Away", "Kiki's Delivery Dervice", "Grave of the Fireflies"];

movies.push("Princess Mononoke");
movies.splice(3, 1, "Howl's Moving Castle");

movies.forEach((movie, index) =>{
    console.log(movie);
    //console.log(index);
}) 

/*
    !- check if using array
    !- using a method, flip values within the array (what wasin index 4 is now in 0, 3 to 1, etc)
    !- using a method, print values of newly arranged array
*/

let arr = [1, 2, 3, 4, 5];

console.log(arr instanceof Array)
arr.reverse()


