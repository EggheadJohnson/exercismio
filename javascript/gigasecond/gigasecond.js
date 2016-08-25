var Gigasecond = function(inpDate) {
	this.inpDate = inpDate;
	this.date = function(){
		return new Date(this.inpDate.getTime() + 1000000000000);
	}

}

module.exports = Gigasecond;
