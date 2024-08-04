// Define the objects person1 and person2
const person1 = {
    name: 'Alice',
    age: 25
};

const person2 = {
    name: 'Bob',
    age: 30
};

// Define the introduce function
function introduce() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}

// Use the call method to make person2 introduce itself
introduce.call(person2);
