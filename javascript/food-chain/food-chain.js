var FoodChain = function(){
	var verse = function(verseNum){
		var output = "I know an old lady who swallowed a ";
		switch (verseNum) {
			case 8:
				output += "horse.\nShe\'s dead, of course!\n";
				break;
			case 7:
				output += "cow.\nI don't know how she swallowed a cow!\n"
			case 6:
				if (verseNum !== 6) output += "She swallowed the cow to catch the goat.\n";
				else output += "goat.\nJust opened her throat and swallowed a goat!\n";
			case 5:
				if (verseNum !== 5) output += "She swallowed the goat to catch the dog.\n";
				else output += "dog.\nWhat a hog, to swallow a dog!\n";
			case 4:
				if (verseNum !== 4) output += "She swallowed the dog to catch the cat.\n";
				else output += "cat.\nImagine that, to swallow a cat!\n";
			case 3:
				if (verseNum !== 3) output += "She swallowed the cat to catch the bird.\n";
				else output += "bird.\nHow absurd to swallow a bird!\n";
			case 2:
				if (verseNum !== 2) output += "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n";
				else output += "spider.\nIt wriggled and jiggled and tickled inside her.\n";
			case 1:
				if (verseNum !== 1) output += "She swallowed the spider to catch the fly.\n";
				else output += "fly.\n";
				output += "I don't know why she swallowed the fly. Perhaps she'll die.\n"
		}
		return output;
	};
	this.verse = verse;
	this.verses = function(startingVerse, endingVerse){
		var output = "";
		for (var i = startingVerse; i <= endingVerse; i++){
			output += verse(i);
			output += '\n';
		}
		return output;
	};
}

module.exports = FoodChain;
