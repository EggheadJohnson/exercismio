var ranChar = function(getLetter) {
	if (getLetter) return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random()*26)];
	else return Math.floor(Math.random()*10);
}

function Robot() {

  this.name = this.genName();

}

Robot.usedNames = {};

Robot.prototype = {
  constructor: Robot,

  genName: function () {

	var name;
	do {
		name = '';
		for (var i = 0; i < 2; i++) name += ranChar(true);
		for (var i = 0; i < 3; i++) name += ranChar();
	} while (this.constructor.usedNames[name])
	this.constructor.usedNames[name] = true;
	return name;
  },
  reset: function() { this.name = this.genName(); }
};

module.exports = Robot;
