// Function to display information
function displayInfo(name, role) {
    console.log(`Name: ${name}, Role: ${role}`);
}

// Using call to invoke displayInfo
displayInfo.call(null, 'Alice', 'Developer');

// Using apply to invoke displayInfo
displayInfo.apply(null, ['Bob', 'Designer']);

// Function to greet using this context
function greet() {
    console.log(`Hello, I'm ${this.name} and I'm a ${this.role}`);
}

// Create an object with name and role properties
const person = {
    name: 'Charlie',
    role: 'Manager'
};

// Using bind to create a new function boundGreet
const boundGreet = greet.bind(person);

// Log the greeting using boundGreet
boundGreet();
