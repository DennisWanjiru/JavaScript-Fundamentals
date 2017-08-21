
//The let keyword for block-scoped variable declaration 

var foo = true;

if(foo) {
	let bar = foo * 2;
	console.log(bar);
}

//Throws a ReferenceError because let creates a block-scoped variable bar
//which is not accessible outside the if scope.
// console.log(bar);

var foo = true, bar = 10;


if(foo) {
	let baz = 3;

	if (bar < baz) {
		console.log(bar);
	} else {
		
		console.log(baz);
	}

}