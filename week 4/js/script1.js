// fake namespaces lecture-52
// var sonaagreeter = {};
// sonaagreeter.name = "sonaa";
// sonaagreeter.sayhello = function () {
//     console.log("hello" + sonaagreeter.name);
// }

(function (window) {
 var sonaagreeter = {};
 sonaagreeter.name = "sonaa";
 var greeting = "hello ";
 sonaagreeter.sayhello = function () {
    console.log(greeting + sonaagreeter.name);
}
window.sonaagreeter = sonaagreeter;

})(window);