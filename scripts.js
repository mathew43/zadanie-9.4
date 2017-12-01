function drawTree(i) {
	for ( var i = 5; i >= 1; i--) {
		var star = '';
		for (var j = i; j <= 5; j++) {
			star += '*'; 
		}
		console.log(star);
	}	
}