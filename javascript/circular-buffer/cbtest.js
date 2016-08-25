var cb = require('./circular-buffer').circularBuffer;

var myCB = cb(4);
//cb.read();

for (var i = 0; i < 4; i++){
	myCB.write(i);
}

for (var i = 0; i < 4; i++){
	console.log(myCB.read());
}
