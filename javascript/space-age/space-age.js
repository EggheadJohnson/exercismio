var SpaceAge = function (sec) {
	var toYears = function(adj){
		return Math.round(100*sec/(31557600*adj))/100;
	}

	this.seconds = sec;
	this.onEarth = function() {
		return toYears(1);
	}
	this.onMercury = function() {
		return toYears(0.2408467);
	}
	this.onVenus = function() {
		return toYears(0.61519726);
	}
	this.onMars = function() {
		return toYears(1.8808158);
	}
	this.onJupiter = function() {
		return toYears(11.862615);
	}
	this.onSaturn = function() {
		return toYears(29.447498);
	}
	this.onUranus = function() {
		return toYears(84.016846);
	}
	this.onNeptune = function() {
		return toYears(164.79132);
	}
}

module.exports = SpaceAge;

/*
- Earth: orbital period 365.25 Earth days, or 31557600 seconds
- Mercury: orbital period 0.2408467 Earth years
- Venus: orbital period 0.61519726 Earth years
- Mars: orbital period 1.8808158 Earth years
- Jupiter: orbital period 11.862615 Earth years
- Saturn: orbital period 29.447498 Earth years
- Uranus: orbital period 84.016846 Earth years
- Neptune: orbital period 164.79132 Earth years
*/
