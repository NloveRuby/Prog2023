/*Set is a collection of unique values, which can be of any data type. It can be used to store and retrieve data similar to an array, but with some added features like the ability to check if an element exists, the ability to remove an element, and the ability to get the size of the set.

*/

let numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);

console.log(numbers.has(1)); // Output: true
console.log(numbers.size); // Output: 3
numbers.delete(2);
console.log(numbers.size); // Output: 2


/*The Map and Set objects can also be iterated over using the for-of loop, similar to arrays, here's an example of iterating over the key-value pairs of a Map and the values of a Set:*/

for (let [key, value] of colors) {
    console.log(key + ": " + value);
}

for (let num of numbers) {
    console.log(num);
}


/*Sure! Here are some common methods and properties that you can use when working with Set objects in JavaScript:

    new Set(): Creates a new Set object.

    set.add(value): Adds a value to the Set object.

    set.delete(value): Removes a value from the Set object.

    set.has(value): Returns a boolean indicating whether a value exists in the Set object.

    set.clear(): Removes all values from the Set object.

    set.size: Returns the number of values in the Set object.

    set.values(): Returns an iterator of the values in the Set object.

    set.forEach(callbackFn): Calls a function for each value in the Set object.*/

    let set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set.has(2)); // Output: true
console.log(set.size); // Output: 3
set.delete(2);
console.log(set.size); // Output: 2
set.forEach(value => console.log(value));


/*In this example, I created a new Set object and added some values to it, then used the add(), has(), delete(), size and forEach() methods to work with the data.

Keep in mind that like Map, Set is not supported by older browsers, but you can use transpilers like Babel to convert your code to an older version that is supported by most browsers.
Please let me know if you have any question or you need more information about these methods and how to use them.*/

