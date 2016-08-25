var Words = function(){
	this.count = function(inpString){
		var wordCounts = {};
		inpString.trim().split(/\s+/).map(function(w){
			return w.toLowerCase();
		})
		.forEach(function(w){
			if (wordCounts[w] && typeof(wordCounts[w]) === 'number') wordCounts[w] += 1;
			else wordCounts[w] = 1;
		});
		return wordCounts;
	}
}

module.exports = Words;
