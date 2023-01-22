// creat a literal object - method 1
var rectangle={

    lenght:5,
    width:3,
    
    getArea:function(params) {
        return this.width*this.lenght;
    },
    
    getParameter:function(){
    
        return 2*this.lenght + 2*this.width
    }
    
    
    };
    
    console.log("First way of making object ");
    console.log(rectangle.getArea());
    console.log(rectangle.getParameter());
    console.log();
    
    
// creat an obj using constructor - method2
//var ob = new Object(); basic syntax
var ob = new Object();
// add property , see below
ob.lenght=5;
ob.width =4;

ob.getParameter=function() {
    return this.lenght + this.width;
};

ob.getPerimeter=function(){
    return 2*this.lenght+2*this.width;
};

console.log("Second way of making object ");
console.log(ob.getPerimeter());
console.log(ob.getParameter());
console.log();


console.log("Third way of making object ");

// function object constructor, see below
function rec(len,wid) {

    this.len=len;
    this.wid=wid;
    //include the function
    this.getAr= function() {
        return len*wid;
    }
    this.getPr= function() {
            
        return 2*len+2*wid;
        }

    }
    

//invoke the object constructor, see below
var r1= new rec(2,5);
console.log(r1.getAr());
console.log(r1.getPr());
console.log("Creat second obj")

var r2 = new rec(12,12);
console.log(r2.getAr());
console.log(r2.getPr());

console.log("protoType object function");

// protoType object function
console.log();

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

var person1 = new Person("John", "Doe");
console.log(person1.fullName()); // Output: "John Doe"

/*In this example, the Person function serves as the object's constructor, and the firstName and lastName properties are passed in as arguments when a new Person object is created. The fullName method is added to the Person.prototype object, which means that it is shared by all instances of the Person object.
This way, when you call person1.fullName() it will use the method on the prototype and return "John Doe"*/
