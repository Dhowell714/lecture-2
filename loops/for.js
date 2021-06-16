// For Loop
/*
    *A way to perform mundane, repeatable task quickly. Loops iterate (go over) an interable (something that can be gone over, such as counting from 0-100)

    ! for (start param, stop param, step param) {
        ! code applied to each step of the iteration
    !}
    
*/

//for (let i = 0; i <= 100; i ++){
    // let i = 0 not needed; can use i = 0
    // i++ is the same as i = i + 1
    //console.log(i)
//}    

let myName = "Devin"

console.log(myName.length)
console.log(myName[3])

for (i = 0; i < myName.length; i++){
    console.log(myName[i])
}