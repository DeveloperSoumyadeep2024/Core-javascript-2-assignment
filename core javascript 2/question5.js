// Define a Set to store unique numbers
const uniqueNumbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Define a Map to associate each number with its square
const numberSquares = new Map();

// Populate the Map with the squares of the numbers
uniqueNumbers.forEach(number => {
    numberSquares.set(number, number * number);
});

// Print the unique numbers
console.log('Unique numbers:', [...uniqueNumbers]);

// Print the unique numbers and their corresponding squares
console.log('Number and their squares:');
numberSquares.forEach((square, number) => {
    console.log(`Number: ${number}, Square: ${square}`);
});
