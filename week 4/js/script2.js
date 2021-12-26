// lecture-52
// var rosegreeter = {};
// rosegreeter.name = "rose";
// rosegreeter.sayhi = function () {
//     console.log("hi " +rosegreeter.name);
// }


(function (window) {
    var rosegreeter = {};
rosegreeter.name = "rose";
var greeting = "hi ";
rosegreeter.sayhi = function () {
    console.log(greeting +rosegreeter.name);
}
window.rosegreeter = rosegreeter;
})(window);
