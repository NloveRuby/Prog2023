/*There are several ways to loop through an array in JavaScript, the most common ways are for loop, forEach method, and for-of loop.

Here's an example of using a for loop to iterate over the elements of an array:*/

let fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Output: "Apple", "Banana", "Cherry"

/*In this example, the loop starts with a variable i equal to 0 and continues while i is less than the length of the array. The value of i is incremented by 1 in each iteration. The element of the array can be accessed using the current value of i as the index.

Another way is to use the forEach method, which is available for arrays in JavaScript, this method takes a callback function as an argument that will be called for each element in the array:*/

fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Output: "Apple", "Banana", "Cherry"

/*You can also use for-of loop introduced in ECMAScript 6 (ES6) to iterate over the elements of an array:*/

for (let fruit of fruits) {
    console.log(fruit);
}

// Output: "Apple", "Banana", "Cherry"

/*for-of loop is similar to forEach method but it can be used to iterate over any iterable not only arrays, it can also be used to iterate over the elements of a string, Map, Set and any other object that implements the iterable protocol.

All of the above methods will iterate over all the elements of the array and perform some action on each element. you can choose the method that fit best with your use case and the one that you feel comfortable with.
Please let me know if you have any question or you need more information about any of these methods*/

/*he for-of loop is a new way of iterating over an array or any other iterable object introduced in ECMAScript 6 (ES6). It is similar to the for-in loop, but it only iterates over the values of an object, not its properties. This makes it particularly useful for iterating over arrays, as it allows you to access each element of the array directly, without having to use the array's index.

Here's an example of using the for-of loop to iterate over the elements of an array:*/

let numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
    console.log(num);
}

// Output: 1, 2, 3, 4, 5


/*In this example, the loop starts with the variable num and assigns to it the first value of the numbers array, then it will run the code block inside the loop, then it will assign the next value to the variable num and so on. It will stop iterating when all the elements have been visited.

You can also use the for-of loop to iterate over the characters of a string:*/

let word = "javascript";

for (let char of word) {
    console.log(char);
}

// Output: j, a, v, a, s, c, r, i, p, t
