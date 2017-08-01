//Rebinding i to every iteration to avoid redelaring of variables

{
	
let j;

	for (j = 0; j < 10; j++) {
		let i = j; //Rebound for each iteration reassigning i the value of j value from the end of the prev iteration

		console.log(i)
	}
}
