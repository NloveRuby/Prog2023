/*JavaScript has several built-in methods for manipulating strings. Here are a few commonly used ones:

    .length returns the length of a string.
    .indexOf(substring) returns the index of the first occurrence of the specified substring, or -1 if the substring is not found.
    .lastIndexOf(substring) returns the index of the last occurrence of the specified substring, or -1 if the substring is not found.
    .slice(start, end) extracts a part of a string and returns it as a new string. The extracted portion includes the characters from the start index up to, but not including, the end index.
    .substring(start, end) similar to slice but it doesn't accept negative index
    .substr(start, length) returns a specified number of characters from a string, starting at a specified index.
    .replace(oldValue, newValue) replaces the first instance of a specified value in a string with a new value.
    .toUpperCase() returns the calling string value converted to uppercase.
    .toLowerCase() returns the calling string value converted to lowercase.
    .trim() removes whitespace from the beginning and end of a string.
    .split(separator, limit) splits a string into an array of substrings, using a specified separator and return the new array.

These are just a few examples, and there are many more methods available for manipulating strings in JavaScript. If you have a specific question about a method or how to use it, feel free to ask!
Sakalans Now
put the above into an example 

Sure! Here's an example of using some of the string methods I listed above:*/

let str = "Hello, JavaScript!";

// Get the length of the string
console.log(str.length); // Output: 17

// Find the index of the first occurrence of "JavaScript"
console.log(str.indexOf("JavaScript")); // Output: 7

// Extract a part of the string using slice
console.log(str.slice(7, 17)); // Output: "JavaScript"

// Replace the first occurrence of "JavaScript" with "world"
console.log(str.replace("JavaScript", "world")); // Output: "Hello, world!"

// Convert the string to uppercase
console.log(str.toUpperCase()); // Output: "HELLO, JAVASCRIPT!"

// Convert the string to lowercase
console.log(str.toLowerCase()); // Output: "hello, javascript!"

// Split the string into an array of substrings using a comma as the separator
console.log(str.split(",")); // Output: ["Hello", " JavaScript!"]


let str = "   JavaScript is fun!   ";

// Use trim() to remove whitespace from the beginning and end of the string
console.log(str.trim()); // Output: "JavaScript is fun!"

// Use lastIndexOf() to find the last occurrence of "is"
console.log(str.lastIndexOf("is")); // Output: 14

// Use substring() to extract a part of the string
console.log(str.substring(8, 14)); // Output: "script"

// Use substr() to get a specified number of characters from a string
console.log(str.substr(8, 6)); // Output: "script"

// Use split() to split the string into an array of substrings
console.log(str.split(" ")); // Output: ["", "", "", "JavaScript", "is", "fun!", "", ""]

/*JavaScript has many other built-in methods and properties for manipulating and working with data, not just strings.

    Arrays have their own set of methods like .push(), .pop(), .shift(), .unshift(), .join(), .concat(), .slice(), .splice() and many others.
    Numbers have methods like .toFixed(), .toExponential(), .toString()
    Date objects have methods like .getDate(), .getMonth(), .getFullYear(), .getHours(), .getMinutes(), .getSeconds()
    You can also use regular expressions .test(), .exec(), .match(), .search(), .replace()
    And also, JavaScript has many global functions like parseInt(), parseFloat(), isNaN(), isFinite(), decodeURI(), encodeURI(), eval(), setTimeout(), clearTimeout(), setInterval(), clearInterval()*/