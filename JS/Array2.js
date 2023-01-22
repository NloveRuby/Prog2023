let numbers = [1, 2, 3, 4, 5];

// Use fill() method to fill an array with a value
numbers.fill(0);
console.log(numbers); // Output: [0, 0, 0, 0, 0]

// Use copyWithin() method to copy a part of an array to another position
numbers.copyWithin(2, 0, 2);
console.log(numbers); // Output: [0, 0, 0, 0, 0]

// Use entries() method to get an iterator of key-value pairs
let iterator = numbers.entries();
console.log(iterator.next().value); // Output: [0, 0]

// Use keys() method to get an iterator of keys
iterator = numbers.keys();
console.log(iterator.next().value); // Output: 0

// Use values() method to get an iterator of values
iterator = numbers.values();
console.log(iterator.next().value); // Output: 0

// Use of() method to create an array from an object
let array = Array.of(1, 2, 3);
console.log(array); // Output: [1, 2, 3]

// Use from() method to create an array from an object
let arrayLike = {0: "a", 1: "b", 2: "c", length: 3};
let letters = Array.from(arrayLike);
console.log(letters); // Output: ["a", "b", "c"]
