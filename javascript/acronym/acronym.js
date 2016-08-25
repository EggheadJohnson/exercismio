module.exports = {
	parse: function(inputPhrase){
		var TLA = '',
			grabNext = false,
			lastIndexAdded = -1;
		inputPhrase.split('').forEach(function(letter, index){
			if (grabNext) {
				TLA += letter.toUpperCase();
				grabNext = false;
			}
			else if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(letter) > -1 && 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(inputPhrase.split('')[index-1]) === -1) {
				TLA += letter;
			}
			else if (' -'.indexOf(letter) > -1) grabNext = true;
		});
		return TLA;

	}
}
