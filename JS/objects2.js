/*ere are some more examples of creating and working with objects in JavaScript:

    Objects can be created with factory functions:*/

function createPerson(name, age) {
  return {
    name,
    age,
    sayHello: function() {
      console.log(`Hello, my name is ${this.name}`)
    }
  }
}
let person_ = createPerson("John", 30)
console.log(person_.name) // Output: "John"
console.log(person_.age) // Output: 30
person_.sayHello() // Output: "Hello, my name is John"

/*Object destructuring is a way to extract values from an object and assign them to variables:*/

let person9 = { name: "John", age: 30, gender: "male" };
let { name, age } = person;
console.log(name); // Output: "John"
console.log(age); // Output: 30

/*You can use the spread operator to copy properties from one object to another:*/

let person1 = { name: "John", age: 30 };
let person2 = { ...person1, gender: "male" };
console.log(person2.name); // Output: "John"
console.log(person2.age); // Output: 30
console.log(person2.gender); // Output: "male"


/*Object.assign() method is used to merge properties of two or more objects into a new object:*/

let person10 = { name: "John", age: 30 };
let person20 = { gender: "male" };
let person30 = Object.assign({}, person10, person20);
console.log(person30.name); // Output: "John"
console.log(person30.age); // Output: 30
console.log(person30.gender); // Output: "male"

/*You can use the Object.keys() method to get an array of the keys of an object:*/
let person12 = { name: "John", age: 30, gender: "male" };

let keys = Object.keys(person12);
console.log(keys); // Output: ["name", "age", "gender"]

/*In this example, I have used the Object.keys() method to get an array of the keys of the person object.*/

/*You can use the Object.values() method to get an array of the values of an object:*/

let values = Object.values(person);
console.log(values); // Output: ["John", 30, "male"]

/*In this example, I have used the Object.values() method to get an array of the values of the person object.*/

/*In this example, I have used the Object.values() method to get an array of the values of the person object.*/

let entries = Object.entries(person);
console.log(entries); // Output: [["name", "John"], ["age", 30], ["gender", "male"]]
/*In this example, I have used the Object.entries() method to get an array of the key-value pairs of the person object.

These are just a few examples of the many ways you can create and work with objects in JavaScript. Understanding the basics of objects is essential to becoming proficient in JavaScript and will help you write more efficient and expressive code.*/

/*

some of the most commonly used ones include:

    Object.keys(obj): Returns an array of the keys of the object.

    Object.values(obj): Returns an array of the values of the object.

    Object.entries(obj): Returns an array of the key-value pairs of the object.

    Object.assign(target, ...sources): Copies the properties from one or more source objects to a target object.

    Object.freeze(obj): Freezes an object, making it immutable.

    Object.seal(obj): Seals an object, making it non-extensible.

    Object.getOwnPropertyNames(obj): Returns an array of the names of the object's own properties.

    Object.getOwnPropertyDescriptor(obj, prop): Returns the property descriptor of the specified property of the object.

    Object.defineProperty(obj, prop, descriptor): Defines a new property or modifies an existing property on an object.

    Object.create(proto, [descriptors]): Creates a new object with the specified prototype and property descriptors.

Here's an example of using some of these methods:

let person = { name: "John", age: 30 };
console.log(Object.keys(person)); // Output: ["name

Sakalans Now
incompelete

I apologize for the incomplete response. Here's the continuation of the example:

let person = { name: "John", age: 30 };
console.log(Object.keys(person)); // Output: ["name", "age"]
console.log(Object.values(person)); // Output: ["John", 30]
console.log(Object.entries(person)); // Output: [["name", "John"], ["age", 30]]

Object.freeze(person);
person.gender = "male";
console.log(person); // Output: {name: "John", age: 30}

let person2 = Object.create(person);
console.log(Object.getPrototypeOf(person2) === person); // Output: true

Object.defineProperty(person2, 'gender', {
  value: 'male',
  writable: true
});
console.log(person2.gender); // Output: "male"

In this example, I have used the Object.keys(obj), Object.values(obj), Object.entries(obj), Object.freeze(obj), Object.create(proto), Object.getPrototypeOf(obj) and Object.defineProperty(obj, prop, descriptor) to work with person object.

It is worth noting that these methods are not supported by older browsers, but you can use transpilers like Babel to convert your code to an older version that is supported by most browsers.
Please let me know if you have any question or you need more information about these methods and how to use them.
*/

