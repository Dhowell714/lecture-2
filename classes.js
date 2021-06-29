// Classes

/*
    Templates for creating objects. They encapsulate data with code. JS is a heavily prototype-based OOP language.

    Classes are considered special functions and therefore can be defined as:
        - Class Expression
        - Class Declaration
*/

// Class Declaration
// Classname should always be capitalized
// Function declarations are hoisted. Class declarations are NOT.

class Teacher {
    // constructor - a class method for creation and initialization of a class object.
    constructor(name, subject, tenure, isPolyglot) {
        this.name = name;
        this.subject = subject;
        this.tenure = tenure;
        this.isPolyglot = isPolyglot
    }
}

// Instantiating a Class

let Mingus = new Teacher("Mingus", "coding", 1, true)
Mingus.subject = "music" 
console.log(Mingus)

let teacher = {
    name: "Mingus",
    subject: "coding",
    tenure: 1,
    isPolyglot: true
}

//console.log(teacher.name)

// Class Expression

let House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address = address
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
    }
}

//console.log(House)

// Creating instance of class expression
let parkAve401 = new House("401 N Park Ave", 2, 2)

console.log(parkAve401)

// Class Methods
/*
    Method is a function that lives inside of a class that can be reused on any class instances.
*/

class Car {
    constructor(make, model, year, transmission) {
        this.make = make
        this.model = model
        this.year = year
        this.transmission = transmission
    }

    // Method
    greetDriver() {
        console.log('Welcome to your ${this.year} ${this.make} ${this.model}')
    }

    age(currentYear) {
        return currentYear - this.year
    }
}

let porsche = new Car("Porsche", "911", 2018, "manual")

console.log(porsche.greetDriver())
console.log(porsche.age(2021))

// Challenge
// Create a class object called Avengers. Avengers will have properties of name, superpower, age, isDead, keyMovie. Create an instance of that object with the superhero name and it's properties.
/*

? Create a method that console logs the name and keyMovie together.

! SPICE GIRLS MODE
! Create a method that takes the name of the superhero and checks it against two arrays. One with team cap and one with team tony and returns which team the superhero was part of during civil war
*/

class Avengers {
    constructor(name, superpower, age, isDead, keyMovie) {
        this.name = name
        this.superpower = superpower
        this.age = age
        this.isDead = isDead
        this.keyMovie = keyMovie
    }
    movieStarred() {
        return `${this.name} starred in ${this.keyMovie}`
    }
}



let hulk = new Avengers("hulk", "superStrength", "idk", false, "infinityWar")

console.log(hulk)





/* 
    Challenge
    extend the house class with one called sale. Sale should have properties of appraisalValue (int), listPrice (int), agent (str), and isListed (bool)

    Create a method which calculates the difference between appraisalValue and the listPrice. Add a conditional that will check if list in 20% higher than appraisal. If it is, say, it's north it. If it isn't, say it's a good value.

    The return should also include the difference between the two values
*/

class Sale extends House {
    constructor(address, bedrooms, bathrooms, appraisalValue, listPrice, agent, isListed) {
        super(address, bedrooms, bathrooms)
        this.appraisalValue = appraisalValue
        this.agent = agent
        this.isListed = isListed
    }

    valueDifference() {
        let difference = this.listPrice - this.appraisalValue
        let percentage = this.listPrice/this.appraisalValue
        if (percentage >= 0.2) {
            return `The difference is ${difference} and it's 20% higher than appraisal.`
        } else if (percentage < 0.2) {
            return `The difference is ${difference} and it's within range.`
        }
    }
}

let myHouse = new Sale("", 2, 2, 250000, 300000)

console.log(myHouse.valueDifference())