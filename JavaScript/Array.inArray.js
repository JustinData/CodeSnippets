Array.prototype.inArray = function (value,caseSensitive) {
// Returns true if the passed value is found in the
// array. Returns false if it is not.

	var i;
	for (i=0; i < this.length; i++) {
	// use === to check for Matches. ie., identical (===),
		if(caseSensitive){	//performs match even the string is case sensitive
			if (this[i].toLowerCase() == value.toLowerCase()) {
				return true;
			}
		}else{
			if (this[i] == value) {
				return true;
			}
		}
	}
	return false;
};