var Triangle = function(a, b, c){
	var sides = [a, b, c];
	sides.sort(function(a, b){return a-b;});

	this.kind = function(){
		if (sides[0] <= 0) throw new Error("Illegal negative side error.");
		if (sides.slice(0, 2).reduce(function(a, b){return a+b;}) <= sides[2]) throw new Error("Illegally short sides error.");
		if (a === b && b === c) return 'equilateral';
		else if (a === b || b === c || a === c) return 'isosceles';
		else return 'scalene';
	}
}

module.exports = Triangle;
