// // Var scope

// //creat a function
// var y=15;
// function myFun(params) {
//     // local var x
//     // u cant acsess the var from outside the function
//     var x = 10;
//     document.write("<h1>"+x+"</h1>");
//     // access y from the function
//     document.write("<h1>"+y+"</h1>");
//     // if u call var a here, error will be poped up
// }

// myFun();
// // below if global var, can be acceesed from any where even inside the function
// var a =5;
// document.write("<h1>"+a+"</h1>");

////escape charrs
// document.write("<h1>Hello Nasr</h1>")
// document.write("<h1>Hello \"nasr\"</h1>") // to pint in double quotes
// document.write("<h1>Hello \'Nasr\'</h1>") // to pint in single inverted comma
// document.write("<h1>Hello \\n'</h1>") // to pint in backslah


// var human={

//     name:"nasr",
//     age:12,
//     color:"white",

//     calAge:function name(name,age,color) {
//         console.log(`your name is ${name} and age is ${age} and color is ${color}`)
//     }

// }


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

console.log(rectangle.getArea());
console.log(rectangle.getParameter());



