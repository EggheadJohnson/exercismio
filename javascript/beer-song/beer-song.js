var BeerSong = function() {
	var verse = function(startingVerse){
		var output = "";
		switch (startingVerse) {
			case 1:
				output+="1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
				break;
			case 0:
				output+="No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n"
				break;
			default:
				output+=startingVerse+" bottles of beer on the wall, "+startingVerse+" bottles of beer.\nTake one down and pass it around, "+(startingVerse-1)+" bottle"+ (startingVerse>2?'s':'') +" of beer on the wall.\n"
		}
		return output;
	}
	this.verse = verse;
	this.sing = function(startingVerse){
		var output = "",
			endingVerse;
		if (arguments.length === 2) endingVerse = arguments[1];
		else endingVerse = 0;
		for (var i = startingVerse; i >= endingVerse; i--){
			output += verse(i)+(i === endingVerse ? '' : '\n');
		}
		return output;
	}
}

module.exports = BeerSong;
