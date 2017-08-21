var foo = true;

if (foo) {
	var a = 2;
	const b = 3;

	a = "Overwrite";

	//You can't reassign a constant variable
	 /* b = 5; */
}

console.log(a);

//ReferenceError. const b is block-scope so it can be assed outside the if scope
console.log(b);