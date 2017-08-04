function CoolModule(){
	var something = "cool";
	var another = [1, 2, 3];

	function doSOmething() {
		console.log(something);
	}

	function doAnother() {
		console.log(another.join(", "));
	}

	return {
		doSOmething: doSOmething,
		doAnother: doAnother
	}
}

foo = CoolModule();

foo.doSOmething();
foo.doAnother();