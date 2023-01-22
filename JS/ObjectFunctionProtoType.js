/*Sure! The prototype is an object that is associated with a constructor function and is used to extend the properties and methods of the objects created by that constructor.

When you create an object using a constructor function, the object inherits the properties and methods of the constructor's prototype. This allows you to add properties and methods to all objects created by that constructor without modifying the constructor function itself.

Here is an example of how you can use the prototype to add a method to the objects created by a constructor function:*/

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name);
};

let person1 = new Person("John", 30);
let person2 = new Person("Jane", 25);

person1.sayHello(); // Output: "Hello, my name is John"
person2.sayHello(); // Output: "Hello, my name is Jane"


/*In this example, I have added a method called sayHello to the Person constructor's prototype, then I created two objects, person1 and person2 using the Person constructor. Both objects inherit the sayHello method from the prototype and can use it to say hello.

It's important to note that when you add properties and methods to the prototype, they are shared among all objects created by the constructor, this means that if you modify the value of a property in the prototype, all objects that inherit that property will be affected.

You can also use the Object.create() method to create an object that inherits from a given prototyp*/

let personPrototype = {
    sayHello: function() {
        console.log("Hello, my name is " + this.name);
    }
};

let person3 = Object.create(personPrototype);
person3.name = "John";
person3.age = 30;

let person4 = Object.create(personPrototype);
person4.name = "Jane";
person4.age = 25;

person3.sayHello(); // Output: "Hello, my name is John"
person4.sayHello(); // Output: "Hello, my name is Jane"

