var PhoneNumber = function(inputNumber){
	var number,
		numberStr;
	number = inputNumber.split('')
						.filter(function(c){
							return '1234567890'.indexOf(c) > -1;
						})
						.join('');
	if (number.length === 11 && number.charAt(0) === '1') number = number.slice(1);
	else if (number.length !== 10) number = '0000000000';
	numberStr = "("+number.slice(0, 3)+") "+number.slice(3, 6)+"-"+number.slice(6);
	this.number = function(){
		return number;
	}
	this.toString = function(){
		return numberStr;
	}
	this.areaCode = function(){
		return number.slice(0, 3);
	}


}

module.exports = PhoneNumber;
