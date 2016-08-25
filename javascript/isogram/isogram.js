var Isogram = function(wordInput){
	this.wordInput = wordInput;
	this.isIsogram = function() {
		return this.wordInput.toLowerCase()
							 .split(/\s+|-/)
							 .join('')
							 .split('')
							 .sort()
							 .join('')
							 .split(/(.)\1{1,}/)
							 .length === 1;
	}
}

module.exports = Isogram;
