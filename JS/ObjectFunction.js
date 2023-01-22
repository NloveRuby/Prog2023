/*in JavaScript, you can create objects using a constructor function. A constructor function is a function that is used to create and initialize objects. It is defined using the function keyword, and it is typically named with a capital letter to indicate that it is a constructor.

Here's an example of a constructor function that creates an object to represent a person:*/

function Person(name, age) {
    this.name = name;
    this.age = age;
}

/*To create a new object using this constructor function, you use the new keyword followed by the constructor function, like this:*/

let person = new Person("John", 30);
console.log(person.name); // Output: "John"
console.log(person.age); // Output: 30


/* In this example, I have created a constructor function called Person which takes two arguments name and age, it assigns these arguments to the properties name and age respectively, then I created a new object called person using this constructor function and passed the values "John" and 30 as arguments.

// You can also add methods to the object created by the constructor by adding them to the constructor's prototype, like this:*/

Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name);
};
person.sayHello(); // Output: "Hello, my name is John"


/*In this example, I have added a method called sayHello to the Person constructor's prototype, then I called this method on the person object.

This is a very basic example of creating objects using a constructor function, you can use this pattern to create more complex objects with many properties and methods.
Please let me know if you have any question or you need more information about this topic.*/



