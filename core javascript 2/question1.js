const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Arrow function to calculate the square of a number
const square = (num) => num * num;

// Prompt the user for a number
rl.question('Enter a number: ', (input) => {
    // Convert input to a number
    const number = parseFloat(input);

    // Check if input is a valid number
    if (isNaN(number)) {
        console.log('Please enter a valid number.');
    } else {
        // Calculate the square and display the result
        const result = square(number);
        console.log(`The square of ${number} is: ${result}`);
    }

    // Close the readline interface
    rl.close();
});
