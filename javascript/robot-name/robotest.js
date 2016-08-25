var Robot = require('./robot-name');

var robot;
for (var i = 0; i < 10; i++){
	robot = new Robot();
	console.log(robot.name);
}
