var Binary = function(binput){

	var myLen = binput.length - 1,
		tot = 0;
	for (var i = 0; i <= myLen; i++){
		if ('01'.indexOf(binput[myLen-i])===-1) {
			tot = 0;
			break;
		}
		tot += Math.pow(2, i)*parseInt(binput[myLen-i]);
	}
	this.toDecimal = function() {return tot;}
}

module.exports = Binary;
