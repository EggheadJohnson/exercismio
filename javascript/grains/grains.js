var bigInt = require("./big-integer");
var Grains = function() {
	var grains = {1:bigInt(1)},
		total = bigInt(1);
	for (var i = 2; i < 65; i++){
		grains[i] = grains[i-1].times(2);
		total = total.add(grains[i]);
	}
	this.square = function(sq){
		return grains[sq].toString();
	}
	this.total = function(){
		return total.toString();
	}
}

module.exports = Grains;
