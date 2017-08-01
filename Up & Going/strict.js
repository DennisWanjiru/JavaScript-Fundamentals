"use strict";
function foo() {
  var a = 1;
  function bar() {
    var b = 2;
    console.log(b);
  }
  bar();
  console.log(a);
} foo ();
var c = 8;
console.log(c);

//Immediately invoked function expression OR Self Invoking Function
( function sif(a, b, c) {
  var sum = a+b+c;
  console.log("The sum is " + sum);
})(2, 3, 5);

//Returning user choice
var x = (function sif() {
  return prompt("Enter");
})();

console.log(x);
