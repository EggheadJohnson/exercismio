module.exports = {
	keep: function(arr, cb){
		return arr.filter(cb);
	},
	discard: function(arr, cb){
		return arr.filter(function(v){
			return !cb(v);
		});
	}
}
