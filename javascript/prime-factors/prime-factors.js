module.exports = {
	for: function(input){
		if (input < 2) return [];
		var outputArray = [],
			ctr = 2;
		while (input > 1){
			if (input % ctr === 0) {
				input /= ctr;
				outputArray.push(ctr);
				ctr = 2;
			}
			else {
				ctr++;
			}
		}
		return outputArray;
	}
};
