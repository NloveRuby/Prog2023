// setInterval() is a JavaScript function that allows you to execute a function repeatedly at a specified time interval. The function takes two arguments: the first is the function to execute, and the second is the time interval in milliseconds.

// Here is an example of how to use setInterval():

// Declare a function to execute
function myFunction() {
  console.log("Hello, World!");
}

// Execute the function every 1000 milliseconds (1 second)
setInterval(myFunction, 1000);

// This code will execute the myFunction every second and log "Hello, World!" to the console.

// The setInterval() function returns an ID that can be used to clear the interval with the clearInterval() function. For example, if you want to stop the interval after 5 seconds:

let intervalId = setInterval(myFunction, 1000);
setTimeout(function() {
  clearInterval(intervalId);
}, 5000);

// It is important to keep in mind that once you set an interval, it will continue to execute the function until you clear it, so you should use this function with caution. Also, when using setInterval() function, you should make sure that the function you pass to it, does not have any side effects, as it will be invoked multiple times.

/*function crawl(){

  setTimeout(getData,3*1000);

}*/

/*function b(b) {
	setTimeout(function() {
		a(b)
	}, 1)
}*/



/*function cr(){
	setTimeout(cs,0);
		return cq=f.now()

	}*/