
//The let keyword for block-scoped variable declaration 

var foo = true;

if(foo) {
	let bar = foo * 2;
	console.log(bar);
}

//Throws a ReferenceError because let creates a block-scoped variable bar
//which is not accessible outside the if scope.
console.log(bar);