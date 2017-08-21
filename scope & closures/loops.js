//Loops as Closure


for (var i = 0; i <= 5; i++) {
	//using a self invoking function to create a per-iteration block-scope
	(function (j) {
	 	setTimeout(function timer() {
	 			console.log(j);
	 		}, j*1000);
	 })(i);
}

