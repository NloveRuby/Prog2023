/*The conditional (ternary) operator is a shorthand way to write an if-else statement in JavaScript. It takes the form of a question followed by a colon and then two expressions, separated by a comma. The question is evaluated as either true or false, and if it is true, the first expression is executed, otherwise, the second expression is executed.

The syntax for the ternary operator is:*/

condition ? expression1 : expression2

//For example, the following if-else statement:

if (x > y) {
    result = "x is greater than y";
  } else {
    result = "x is not greater than y";
  }

  
  //can be written using the ternary operator as:

  result = (x > y) ? "x is greater than y" : "x is not greater than y";


  //instanceof operator:

  /*The instanceof operator in JavaScript is used to check if an object is an instance of a specific constructor or class. The operator returns true if the object is an instance of the specified constructor or class, and false otherwise.

The syntax for the instanceof operator is*/

// object instanceof constructor

let myArray = [1,2,3];
console.log(myArray instanceof Array); // true
console.log(myArray instanceof Object); // true
console.log(myArray instanceof String); // false


/*It is important to note that the instanceof operator only works with objects and constructors that are in the same realm, which means that it will not work with objects from a different frame or window. Additionally, the instanceof operator does not work with primitive values, only objects can be used with instanceof.*/

/*The spread operator (...) in JavaScript allows an expression to be expanded in places where multiple arguments are expected. It can be used to spread the elements of an array or the properties of an object into a new array or object, respectively.

For example, the spread operator can be used to merge two arrays into a new one:*/

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1, ...arr2];
console.log(newArr); // [1, 2, 3, 4, 5, 6]

/*The spread operator can also be used to spread the properties of an object into a new one:*/

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let newObj = { ...obj1, ...obj2 };
console.log(newObj); // { a: 1, b: 2, c: 3, d: 4 }


/*The delete operator in JavaScript is used to delete a property from an object. The property is removed from the object, and the object is modified in place.*/

let myObj = { a: 1, b: 2, c: 3 };
delete myObj.b;
console.log(myObj); // { a: 1, c: 3 }


/*It is important to note that the delete operator only works on object properties and does not work on variables or function arguments. Additionally, it only removes the property from an object, not the value of the property, which can still be accessed if it is stored in a variable.*/


