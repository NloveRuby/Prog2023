/*JavaScript arrays are used to store multiple values in a single variable. They are similar to lists in other programming languages, and can store elements of any data type, including numbers, strings, and objects.

Here are a few examples of working with arrays in JavaScript:*/

// Create an array
let fruits = ["Apple", "Banana", "Cherry"];

// Access an element of an array
console.log(fruits[1]); // Output: "Banana"

// Add an element to the end of an array
fruits.push("Mango");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Mango"]

// Remove an element from the end of an array
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Add an element to the beginning of an array
fruits.unshift("Strawberry");
console.log(fruits); // Output: ["Strawberry", "Apple", "Banana", "Cherry"]

// Remove an element from the beginning of an array
fruits.shift();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Join all elements of an array into a string
console.log(fruits.join(", ")); // Output: "Apple, Banana, Cherry"

/*JavaScript also provide many other array methods like .slice(), .splice(), .reverse(), .sort(), .map(), .filter(), .reduce(), .forEach() and many others.

You can use these methods and properties in combination with arrays to do more complex manipulation and data processing tasks.
Please let me know if you're interested in learning more about any of these topics or if you have any questions about how to use them*/


// Create an array
let numbers = [1, 2, 3, 4, 5];

// Use slice() to extract a part of an array
let part = numbers.slice(1, 3);
console.log(part); // Output: [2, 3]

// Use splice() to add and remove elements from an array
numbers.splice(1, 2, 6, 7);
console.log(numbers); // Output: [1, 6, 7, 4, 5]

// Use reverse() to reverse the order of elements in an array
numbers.reverse();
console.log(numbers); // Output: [5, 4, 7, 6, 1]

// Use sort() to sort the elements of an array
numbers.sort();
console.log(numbers); // Output: [1, 4, 5, 6, 7]

// Use map() to transform the elements of an array
let double = numbers.map(x => x * 2);
console.log(double); // Output: [2, 8, 10, 12, 14]

// Use filter() to filter the elements of an array
let even1 = numbers.filter(x => x % 2 == 0);
console.log(even1); // Output: [4, 6]

// Use reduce() to combine the elements of an array
let sum = numbers.reduce((acc, x) => acc + x, 0);
console.log(sum); // Output: 24

// Use forEach() to iterate over the elements of an array
numbers.forEach(x => console.log(x));
// Output: 1, 4, 5, 6, 7


let words = ["javascript", "programming", "language"];

// Use concat() method to join two arrays
let newWords = words.concat(["computer", "science"]);
console.log(newWords); // Output: ["javascript", "programming", "language", "computer", "science"]

// Use indexOf() method to find the index of an element in an array
console.log(words.indexOf("javascript")); // Output: 0

// Use lastIndexOf() method to find the last occurrence of an element in an array
words.push("javascript");
console.log(words.lastIndexOf("javascript")); // Output: 3

// Use includes() method to check if an element is present in an array
console.log(words.includes("javascript")); // Output: true
console.log(words.includes("python")); // Output: false

// Use find() method to find the first element that match the condition
let nums = [1, 2, 3, 4, 5, 6];
let even = nums.find(x => x % 2 == 0);
console.log(even); // Output: 2

// Use findIndex() method to find the index of the first element that match the condition
let index = nums.findIndex(x => x % 2 == 0);
console.log(index); // Output: 1

// Use every() method to check if all elements in an array match the condition
console.log(nums.every(x => x < 10)); // Output: true

// Use some() method to check if some elements in an array match the condition
console.log(nums.some(x => x > 5)); // Output: true

