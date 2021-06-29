let myArray 
myArray = ["Devin", "Mingus", "Daphne"] 
console.log(myArray)
function loopOver(x) {
    for (i of x ) {
        console.log(i)
    }

} 
loopOver(myArray)