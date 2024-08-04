// Create an object named calculator with methods add, subtract, and multiply
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    calculate: function(operation, a, b) {
        switch(operation) {
            case 'add':
                return this.add(a, b);
            case 'subtract':
                return this.subtract(a, b);
            case 'multiply':
                return this.multiply(a, b);
            default:
                return 'Invalid operation';
        }
    }
};

// Use call to perform an addition operation using the calculate method
const additionResult = calculator.calculate.call(calculator, 'add', 5, 3);
console.log('Addition Result:', additionResult);

// Use apply to perform a multiplication operation using the calculate method with arguments as an array
const multiplicationResult = calculator.calculate.apply(calculator, ['multiply', 5, 3]);
console.log('Multiplication Result:', multiplicationResult);

// Create another object named discountCalculator with discount percentage property and a method applyDiscount
const discountCalculator = {
    discountPercentage: 10,
    applyDiscount: function(amount) {
        return amount - (amount * (this.discountPercentage / 100));
    }
};

// Use bind to create a new function calculateDiscount that is bound to the discountCalculator object and can be reused
const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);

// Use the bound function to apply discount
const originalPrice = 100;
const discountedPrice = calculateDiscount(originalPrice);
console.log(`Original Price: $${originalPrice}, Discounted Price: $${discountedPrice}`);
