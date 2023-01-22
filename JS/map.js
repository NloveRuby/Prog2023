/*Map is a collection of key-value pairs, where each key is unique and can be of any data type. It can be used to store and retrieve data similar to an object, but with some added features like ability to use non-string keys, ability to iterate over its elements in the order they were added, and the ability to get the size of the map.

Here's an example of creating a Map object and adding some key-value pairs to it:*/

let colors = new Map();
colors.set("red", "#ff0000");
colors.set("green", "#00ff00");
colors.set("blue", "#0000ff");

console.log(colors.get("red")); // Output: "#ff0000"
console.log(colors.size); // Output: 3

/*The Map and Set objects can also be iterated over using the for-of loop, similar to arrays, here's an example of iterating over the key-value pairs of a Map and the values of a Set:*/


for (let [key, value] of colors) {
    console.log(key + ": " + value);
}

for (let num of numbers) {
    console.log(num);
}


/* ap objects in JavaScript:

    new Map(): Creates a new Map object.

    map.set(key, value): Associates a value with a key in the Map object. If the key already exists, it updates the value.

    map.get(key): Returns the value associated with a key in the Map object. If the key does not exist, it returns undefined.

    map.has(key): Returns a boolean indicating whether a key exists in the Map object.

    map.delete(key): Removes a key-value pair from the Map object.

    map.clear(): Removes all key-value pairs from the Map object.

    map.size: Returns the number of key-value pairs in the Map object.

    map.keys(): Returns an iterator of the keys in the Map object.

    map.values(): Returns an iterator of the values in the Map object.

    map.entries(): Returns an iterator of the key-value pairs in the Map object.

    map.forEach(callbackFn): Calls a function for each key-value pair in the Map object.*/

    let map = new Map();
map.set("name", "John");
map.set("age", 30);
console.log(map.get("name")); // Output: "John"
console.log(map.has("age")); // Output: true
console.log(map.size); // Output: 2
map.delete("name");
console.log(map.size); // Output: 1
map.forEach((value, key) => console.log(key + ": " + value));

/*In this example, I created a new Map object and added some key-value pairs to it, then used the get(), has(), delete() and forEach() methods to work with the data.
Please let me know if you have any question or you need more information about these methods and how to use them.*/

