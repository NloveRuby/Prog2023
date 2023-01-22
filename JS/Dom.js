/*The DOM provides a large number of methods and properties for working with documents, some of the most commonly used ones include:

    document.getElementById(id): Returns the element with the specified ID.

    document.getElementsByTagName(name): Returns a collection of elements with the specified tag name.

    document.getElementsByClassName(name): Returns a collection of elements with the specified class name.

    document.querySelector(selector): Returns the first element that matches the specified CSS selector.

    document.querySelectorAll(selector): Returns a collection of elements that match the specified CSS selector.

    element.innerHTML: Gets or sets the HTML content of an element.

    element.style: Gets or sets the inline styles of an element.

    element.classList: Gets or sets the CSS classes of an element.

    element.setAttribute(name, value): Sets the value of an attribute on an element.

    element.getAttribute(name): Gets the value of an attribute on an element.

    element.addEventListener(event, listener): Attaches an event listener to an element.

    element.removeEventListener(event, listener): Removes an event listener from an element.

    document.createElement(name): Creates a new element.

    element.appendChild(node): Adds a new child node to an element.

    element.removeChild(node): Removes a child node from an element.

These are just a few examples of the many methods and properties provided by the DOM, there are many other methods and properties that can be used to work with the DOM, and some browsers have specific methods that are not available in other browsers.*/


// document.getElementById(id): Returns the element with the specified ID.

<p id="my-paragraph">Hello World!</p>

let paragraph = document.getElementById("my-paragraph");
console.log(paragraph.innerHTML) // Output: "Hello World!"

    // document.getElementsByTagName(name): Returns a collection of elements with the specified tag name.

{/* <p>Hello World!</p> */}
{/* <p>Hello DOM!</p> */}

let paragraphsZ = document.getElementsByTagName("p");
console.log(paragraphsZ.length); // Output: 2
console.log(paragraphsZ[0].innerHTML); // Output: "Hello World!"
console.log(paragraphsZ[1].innerHTML); // Output: "Hello DOM!"

    // document.getElementsByClassName(name): Returns a collection of elements with the specified class name.

{/* <p class="my-class">Hello World!</p>
<p class="my-class">Hello DOM!</p>

let paragraphs = document.getElementsByClassName("my-class");
console.log(paragraphs.length); // Output: 2
console.log(paragraphs[0].innerHTML); // Output: "Hello World!"
console.log(paragraphs[1].innerHTML); // Output: "Hello DOM!"

    document.querySelector(selector): Returns the first element that matches the specified CSS selector.

<p id="my-paragraph">Hello World!</p>

let paragraph = document.querySelector("#my-paragraph");
console.log(paragraph.innerHTML) // Output: "Hello World!"

    document.querySelectorAll(selector): Returns a collection of elements that match the specified CSS selector.

<p>Hello World!</p>
<p>Hello DOM!</p>

let paragraphs = document.querySelectorAll("p");
console.log(paragraphs.length); // Output: 2
console.log(paragraphs[0].innerHTML); // Output: "Hello World!"
console.log(paragraphs[1].innerHTML); // Output: "Hello DOM!"

    element.innerHTML: Gets or sets the HTML content of an element.

<p id="my-paragraph">Hello World!</p>

let paragraph = document.getElementById("my-paragraph"); */}