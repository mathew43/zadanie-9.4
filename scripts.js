function drawTree(a) {
	for ( var i = a; i >= 1; i--) {
		var star = '';
		for (var j = i; j <= a; j++) {
			star += '*'; 
		}
		console.log(star);
	}	
}