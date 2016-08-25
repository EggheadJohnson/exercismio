var Raindrops = function(){
	this.convert = function(value){
		var outp = (value%3===0?'Pling':'') + (value%5===0?'Plang':'') + (value%7===0?'Plong':'');
		return outp===''?value+'':outp;

	}
}

module.exports = Raindrops;
