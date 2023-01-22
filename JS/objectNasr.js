// how to initiate an object
// see below
var st = new String();
// check the type, see below
console.log("The type is " + typeof(st));

var n = new Date()
console.log(n.getTime());

//Create car object

var car ={

    model : "2007",
    color :"green",
    manfac : "Mercedes",

    function (params) {
        console.log("The car is speeding");
    }
}


console.log(car.color);
console.log(car.manfac);
console.log(car.model);
// call the function of this obj
console.log(car.function());


// create an object suing constructor
// creat function with params

function kars(model,color,manfac,price) {

    this.model=model;
    this.color=color;
    this.manfac=manfac;
    this.price=price;
    // creat a func
   this.speed=function() {
    console.log(` the car is model is ${model} and the color is ${ color } and the manfac is ${ manfac } and the price is ${ price }`)
}
    
}

// create an obj

var c1 = new kars(2007,"green", "merc",200000);
console.log(c1);
c1.speed();

// you can add more propperties to any object from anywhere

car.tork=1200;

// to delete an object property, use delete keyword

