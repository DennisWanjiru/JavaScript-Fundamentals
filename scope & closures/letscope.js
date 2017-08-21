//Using let to create a per-iteration block-scope and closure

for(let i = 0; i<=5; i++) {
	setTimeout(function () {
		console.log(i);
	}, i*1000);
}