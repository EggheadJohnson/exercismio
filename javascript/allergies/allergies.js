/*
* eggs (1)
* peanuts (2)
* shellfish (4)
* strawberries (8)
* tomatoes (16)
* chocolate (32)
* pollen (64)
* cats (128)
*/

var Allergies = function(score) {
	var ctr = 2,
		allergyList = [],
		allergyBin = [],
		allergens = ['eggs','peanuts','shellfish','strawberries','tomatoes','chocolate','pollen','cats'];
	while (score > 0){
		allergyBin.push(score%2);
		score = Math.floor(score/2);
	}
	allergens.forEach(function(val, idx){
		if (allergyBin[idx] === 1) allergyList.push(val);
	});

	this.list = function(){
		return allergyList;
	}
	this.allergicTo = function(testAllergen) {
		//return boolean;
		return allergyList.indexOf(testAllergen) > -1;
	}
}

module.exports = Allergies;
