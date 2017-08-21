var x = "";


var y = Number(x);

console.log(typeof x); 
console.log(typeof y); 
console.log(y); 

if (Number.isInteger(y)) {
    console.log("Its a number");
} else {
    console.log("Its not a number");
}