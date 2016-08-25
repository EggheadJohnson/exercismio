var Clock = function(hours, minutes) {
	minutes = minutes || 0;
	var time,
		hoursOffset = 0;

	time = hours*60+minutes;
	while (time < 0) time += 1440;
	time = time % 1440;
	this.time = function(){
		return time;
	}
	this.toString = function(){
		var returnTime = '',
			hours = Math.floor(time/60),
			minutes = Math.floor(time%60);

		returnTime += hours < 10 ? '0'+hours:hours;
		returnTime += ':';
		returnTime += minutes < 10 ? '0'+minutes:minutes;
		return returnTime;
	}
	this.plus = function(addition){
		return new Clock(0, time+addition);
	}
	this.minus = function(remove){
		return new Clock(0, time-remove);
	}
	this.equals = function(testClock){
		return time === testClock.time();
	}

}

module.exports = {
	at: function(hours, minutes){
		return new Clock(hours, minutes);
	}

}
