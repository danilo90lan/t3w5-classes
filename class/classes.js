class Dog {
    constructor(name, breed, age, color){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.color = color;
    }

    bark() {
        console.log(`Woof! Woof! I am ${this.name}.`);
    }
}

let brockie = new Dog('Brockie', 'German Shepherd', '3', 'Brown');

console.log(brockie.bark());

// create unique BarkError class by inheriting from Error class
class BarkError extends Error {
    constructor(dogName, dogBreed){
        // super() is called to use the Error class's properties/methods
        super(`${dogName} of breed ${dogBreed} failed to bark.`);
    }
}

// let newError = new Error()