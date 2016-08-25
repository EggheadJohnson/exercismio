var Pangram = function(input){
	var alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
	input = input.toLowerCase();
	//console.log(input);
	this.isPangram = function(){
		if (!input) return false;
		return alpha.every(function(letter){
			return input.split('').indexOf(letter) > -1;

		})
	}
}

module.exports = Pangram;
