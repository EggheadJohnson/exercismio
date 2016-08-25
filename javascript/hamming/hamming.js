var Hamming = function() {
	this.compute = function(dna1, dna2){
		if (dna1.length !== dna2.length) throw new Error('DNA strands must be of equal length.');
		else {
			var hammingDiff = 0;
			for (var i = 0; i < dna1.length; i++){
				hammingDiff += dna1.charAt(i) === dna2.charAt(i) ? 0 : 1;
			}
			return hammingDiff;
		}
	}
}

module.exports = Hamming;
