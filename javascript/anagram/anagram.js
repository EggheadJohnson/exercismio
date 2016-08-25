var Anagram = function(word) {
	function arrayCmp(arr1, arr2) {
		var returnValue = true;
		if (arr1.length !== arr2.length) returnValue = false;
		arr1.some(function(l, idx){
			if (arr2[idx] !== l) {
				returnValue = false;
				return true;
			}
		});
		return returnValue;
	}

	this.matches = function(possibles){
		if (!Array.isArray(possibles)) {
			possibles = [possibles];
			for (var i = 1; i < arguments.length; i++){
				possibles.push(arguments[i]);
			}
		};
		return possibles.filter(function(w){
			if (w.toLowerCase() === word.toLowerCase()) return false;
			return arrayCmp(w.toLowerCase().split('').sort(), word.toLowerCase().split('').sort());
		})
	}
}

module.exports = Anagram;
