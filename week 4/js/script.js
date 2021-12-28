 /*var message = "in global";
console.log("global: message = " + message);

 var a = function () {
    var message = "inside a";
    console.log("a: message = " + message);
    


function b () {
    console.log("b: message = " +message);
}

b();
}
    


 a();*/

 /*var x;
 console.log(x);

 if (x == undefined) {
     console.log("x is undefined");
 }

x = 5;
if (x == undefined) {
    console.log("x is undefined");
}
else {
    console.log("x has been defined");
}*/

// string concatination ****//
/*var string = "Hello";
string += " world";
// string = string + " world!"
console.log(string + "!");*/

// ****** Regular math operators *****//
/*console.log((5+4) /3);
console.log(undefined/5);
function test1 (a) {
    console.log(a /5);
}
test1();*/

// equality ***** //
/*var x = 4 , y = 4;
if (x==y) {
    console.log("x=4 is equal to y=4");
}
 x = "4";
 if (x==y) {
     console.log("x='4' is equal to y=4");
 }

//  ****** strict equality ******* //
if (x == y) {
    console.log("Strict: x='4' is equal to y=4");
}
else {
    console.log("Strict: x='4' is NOT equal to y=4");
}*/

// if statement(all false)
/*if (false || "" || null || undefined || 0 || NaN) {
    console.log("This line won't evee r execute");
}
else {
    console.log("all false");
}
// if statement(all true)
if (true && "hello" && 1 && -1 && "false") {
    console.log("all true");
}*/

//  Best practice for {} style 
// curly braces on the same or next line ....
// Is it just a style 
 /*function a ()
     {
         return
         {
             name: "Sonaa"
         };
     }

     function b () {
    return {
        name: "Sonaa"
    };
}
console.log(a());
console.log(b());*/
//  for loop 
/*var sum = 0;
for (var i=0; i<10; i++) {
    console.log(i);
    sum = sum +  i;
}
    console.log("Sum of 0 through 9 is:" + sum);*/

    /*function orderchickenwith(sidedish) {
        // if (sidedish == undefined) {
            // sidedish = "whatever!";
        
        // or 
        sidedish= sidedish || "whatever!";
        console.log("chicken with " + sidedish);
    }
    orderchickenwith("noodles");
    orderchickenwith();*/

    /*var x = 10;
if ( (null) || (console.log("Hello")) || x > 5 ) {
  console.log("Hello");
}*/

// lecture 45 part 1
//  Object creation
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstname = "mark";
// company.ceo.favcolor = "blue";

// console.log(company);
// console.log("company ceo name is: " + company.ceo.firstname);

// console.log(company["name"]);
// console.log(company.ceo["firstname"]);
// company["stock of company"] = 110;
// console.log(company);
// console.log("stock of price: " + company["stock of company"]);
// // or
// var stockpropname = 110;
// company[stockpropname] = "stock of company";
// company["stock of company"] = 110; 
// company[stockpropname] = 110;
// console.log("stock of price: " + company[stockpropname]);
// console.log("stock of price: " + company["stock of company"])

// part-2
// Better way: object literal 
// var company = {
//     name: "facebook",
//     ceo: {
//         firstname: "mark",
//         favcolor: "blue"
// },
// // $stock: 110
// // or
// "stock of company": 110
// };
// //  or var facebook is also correct

// console.log(company);
// console.log(company.ceo.firstname);

// lecture 46
// Functions are First-clas-data types
// Functions ARE objects(regular objects which have some special property to them)
// function multiply (x,y) {
//     return x * y;
// }
// console.log(multiply(5, 3));
// multiply.version = "v.1.0.0";
// // console.log(multiply);
// console.log(multiply.version);

// // Function factory
// function makemultiplier (multiplier) {
//     var myfunc = function (x) {
//     return multiplier * x;
// };
// return myfunc;
// }
// var multiplyby3 =makemultiplier(3);
// console.log(multiplyby3(10));
// var doubleall = makemultiplier(2);
// console.log(doubleall(100));

// // passing funcions as arguments
// function dooperation(x, operation) {
//     return operation(x);
// }

// var result = dooperation(5, multiplyby3);
// console.log(result);
// result = dooperation(100, doubleall);
// console.log(result);


// practice of functions
// function egmultiplier (multiplier) {
//     var myvalue = function(x) {
//     return multiplier * x;
// };
// return myvalue;
// }
//  var newvalue = egmultiplier(3);
// console.log(newvalue(3));

//  Lecture 47
//  passing or copying by value.... given b=a passing/copying by value means changing copied value in b does not affect the value stored in a and vice versa
// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);


// var a ={ x: 7};
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b update:");
// console.log(a);
// console.log(b);

// pass by refernece vs by value
// function changeprimitive(primvalue) {
//     console.log("in changeprimitive...");
//     console.log("before:");
//     console.log("primvalue");

//     primvalue = 5;
//     console.log("after:");
//     console.log(primvalue);
// }
//  var value = 7;
//  changeprimitive(value); // primvalue= value
//  console.log("after changeprimitive, orig value");
//  console.log(value);

//  function changeobject(objvalue) {
//     console.log("in changeobject...");
//     console.log("before:");
//     console.log("objvalue");

//     objvalue.x = 5;
//     console.log("after:");
//     console.log(objvalue);
// }
//   value = {x: 7};
//   changeobject(value); // objvalue= value
//  console.log("after changeobject, orig value");
//  console.log(value);

// lecture 48
// function test() {
//     console.log("Hello coursera");
// }
// test();

// function test() {
//     console.log(this);
//     this.myname = "sonaa";
// }
// test();
// console.log(window.myname);

// Function constructors
// function circle(radius) {
//     console.log(this);
// }

// var mycircle = new circle(10);
// console.log(mycircle);

// function circle(radius) {
//    this.radius = radius;
 
//    this.getarea = 
//    function () {
//     return Math.PI * Math.pow(this.radius, 2);
//    };
// }

// var mycircle = new circle(10);
// // console.log(mycircle.getarea());
// console.log(mycircle);


// function circle(radius) {
//         this.radius = radius;
// }
// // always the braces should close betweeen the prototype
//        circle.prototype.getarea = 
//         function () {
//          Math.PI * Math.pow(this.radius, 2);
//      };
//     // must not forget the new keyword
//      var mycircle = new circle(10);
//      // console.log(mycircle.getarea());
//      console.log(mycircle);

//      var myothercircle =new circle(20);
//      console.log(myothercircle);

//  lecture 49

// Object literals and "this"

//  var literalcircle = { //new object
//     radius: 10,

//     getarea: function () {
//         var self = this;
//         console.log(this);

//         var increaseradius =function () {
//             self.radius = 20;
//         };
//         increaseradius();
//         console.log(this.radius);

//         return Math.PI * Math.pow(this.radius, 2);
//     }
// };
// console.log(literalcircle.getarea());

// lecture 50
//  arrays
//  collection of data
// var array = new Array();
// array[0] = "sonaa";
// array[1] = 2;
// array[2] = function (name) {
//    console.log("hello " + name);
// };
// array[3] = {course: "HTML, css and javascript"};
// console.log(array);
// console.log(array[1]);
// array[2]("sonaa");
// array[2](array[0]);
// console.log(array[3] .course);

// Short hand array creation
// var names = ["sonaa", "rose", "kabil"];
// console.log(names);

// var names = [
//     { name: "sonaa"},
//     { name: "rose"},
//        "kabil"];
//        console.log(names);


    //    for (var i = 0; i < names.length; i++ ) {
    //        console.log("hello " + names[i]);
    //    }

    //    names[10] = "sonaa";
    //    for (var i = 0; i < names.length; i++ ) {
    //     console.log("hello " + names[i]);
    // }

    // var names2 = ["sonaa", "rose", "kabil"];

    // var myObj = {
    //    name:"sonaa",
    //    course: "HTML, CSS, JS",
    //    plaform: "coursera"
    // };
    //  for ( var prop in myObj) {
    //      console.log(prop + ": " + myObj[prop]);
    //  }

//      for (var name in names2) {
//          console.log("hello " + names2[name]);
//      }

// names2.gretting = "hi";
// for (var name in names2) {
//     console.log("hello " + names2[name]);
// }

//  lecture 51
// closures
function makemultiplier (multiplier) {
    // var multiplier =2;
 function b() {
     console.log("multiplier is: " + multiplier);
 }
b();

    return(
        function (x) {
            return multiplier * x;
        }
    );
}
 var doubleall = makemultiplier(2);
 console.log(doubleall(10)); //its own exec env