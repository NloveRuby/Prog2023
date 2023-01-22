/*In JavaScript, prototypal inheritance is a mechanism that allows objects to inherit properties and methods from other objects, rather than classes. It is implemented through the use of prototypes, which are objects that act as templates for creating new objects. Each object in JavaScript has a prototype, and when a property or method is accessed on an object, the JavaScript engine first looks for the property or method on the object itself, and if it is not found, it looks for the property or method on the object's prototype. This process continues up the prototype chain until the property or method is found or the end of the chain is reached.*/

// Define the base object
function Animal(name) {
    this.name = name;
}

// Add a method to the prototype of the base object
Animal.prototype.speak = function() {
    console.log(this.name + ' makes a sound.');
}

// Create a new object that inherits from the base object
function Dog(name) {
    Animal.call(this, name);
}

// Set the prototype of the new object to be an instance of the base object
Dog.prototype = Object.create(Animal.prototype);

// Reset the constructor property of the new object
Dog.prototype.constructor = Dog;

// Add a new method to the new object
Dog.prototype.bark = function() {
    console.log(this.name + ' barks.');
}

// Create an instance of the new object
let fido = new Dog('Fido');

// Test the inherited and new methods
fido.speak(); // Outputs: "Fido makes a sound."
fido.bark(); // Outputs: "Fido barks."

/*In this example, we have a base object called Animal. We added a method speak to the prototype of the base object. Then we created a new object called Dog which will inherit from the base object Animals. We set the prototype of the new object to be an instance of the base object using Dog.prototype = Object.create(Animals.prototype). Then we reset the constructor property of the new object using Dog.prototype.constructor = Dog. Finally, We added a new method bark to the new object Dog. And we created an instance of the new object named fido.

The instance of Dog can access both the inherited method speak from Animal and it's own method bark.

This example demonstrates how to create a new object that inherits properties and methods from a base object using prototypal inheritance in JavaScript.*/