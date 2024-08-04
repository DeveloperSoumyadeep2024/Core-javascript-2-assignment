const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// 1. Sort the array
ages.sort((a, b) => a - b);
console.log('Sorted ages:', ages);

// 2. Find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log('Min age:', minAge);
console.log('Max age:', maxAge);

// 3. Find the median age
let medianAge;
const middle = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    medianAge = (ages[middle - 1] + ages[middle]) / 2;
} else {
    medianAge = ages[middle];
}
console.log('Median age:', medianAge);

// 4. Find the average age
const total = ages.reduce((sum, age) => sum + age, 0);
const averageAge = total / ages.length;
console.log('Average age:', averageAge.toFixed(2));

// 5. Find the range of the ages
const range = maxAge - minAge;
console.log('Range of ages:', range);

// 6. Compare the value of (min-average) and (max-average) using abs() method
const minAverageDiff = Math.abs(minAge - averageAge);
const maxAverageDiff = Math.abs(maxAge - averageAge);
console.log('Difference between min and average:', minAverageDiff.toFixed(2));
console.log('Difference between max and average:', maxAverageDiff.toFixed(2));
