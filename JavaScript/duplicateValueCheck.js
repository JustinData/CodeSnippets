// Checks an array for duplicate values.
// Paramater c is the collection/array.
// To check a collection of objects for a duplicate value on a given key:
//    Include the key as the second parameter , k.
function duplicateValueCheck(c, k){
	if (typeof(metricsData[0]) == "object"){
		for (var i = 0; i < c.length; i++) {
			for (var j = 0; j < c.length; j++) {
				if (i != j) { // Skips checking an index against itself
					if (c[i][k] == c[j][k]) {
					    return true; // Means there are duplicate values
					}
				}
			}
		}
	} else {
		var sortedArray = c.sort();
		for (var i=0; i < c.length - 1; i++){
			if (sortedArray[i + 1] == sortedArray[i]){
				return true;
			}
		}
	}
	return false;
}

