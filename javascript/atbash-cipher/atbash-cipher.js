module.exports = {
	encode: function(str) {
		var outp = str.toLowerCase().split('').map(function(c){
			if ('abcdefghijklmnopqrstuvwxyz'.indexOf(c) > -1){
				return 'abcdefghijklmnopqrstuvwxyz'.charAt(25-'abcdefghijklmnopqrstuvwxyz'.indexOf(c))
			}
			else if ('1234567890'.indexOf(c) > -1) return c;
		})
		.join('');
		return padify(5, outp);

	}
}

var padify = function(maxLen, str) {
	var outp = '';
	str.split('').forEach(function(c, idx){
		outp += c;
		if ((idx+1)%5 === 0) {
			outp += ' ';
		}
	});
	return outp.trim();
}
