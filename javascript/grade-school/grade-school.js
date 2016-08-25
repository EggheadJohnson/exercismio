var School = function(){
	var schoolRoster = {};
	this.add = function(student, g) {
		if (schoolRoster[g]) schoolRoster[g].push(student);
		else schoolRoster[g] = [student];
		schoolRoster[g].sort();
	}
	this.grade = function(g) {
		return schoolRoster[g] !== undefined ? schoolRoster[g] : [];

	}
	this.roster = function() {
		return schoolRoster;
	}
}

module.exports = School;
