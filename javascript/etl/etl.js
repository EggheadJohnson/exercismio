var ETL = function() {
	this.transform = function (inpObj) {
		var outObj = {};
		for (var key in inpObj) {
			inpObj[key].forEach(function(letter){
				outObj[letter.toLowerCase()] = parseInt(key);
			});
		};
		return outObj;
	};
};

module.exports = ETL;
