//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
//
// YOUR CODE GOES HERE
//
	var isAllCaps = function(input){
		return input.split('')
					.every(function(d){
						return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ\xdc\xc4\xdc'.indexOf(d) > -1 || '1234567890 ,!?@#$%^&*()'.indexOf(d) > -1;
					}) &&
				input.split('')
					.some(function(d){
						return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\xdc\xc4\xdc'.indexOf(d) > -1;
					});
	}
	if (input.split(' ').join('').length === 0) return "Fine. Be that way!";
	if (isAllCaps(input)) return "Whoa, chill out!";
	if (input.charAt(input.length-1) === '?') return "Sure.";

	return "Whatever.";
};

module.exports = Bob;
