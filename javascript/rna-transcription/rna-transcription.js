var DnaTranscriber = function(){
	var complements = {
		G: 'C',
		C: 'G',
		T: 'A',
		A: 'U'
	}
	this.toRna = function(dnaInput){
		return dnaInput.split('')
				.map(function(d){
					return complements[d];
				})
				.join('');
	}
}

module.exports = DnaTranscriber;
