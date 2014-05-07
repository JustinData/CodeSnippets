// Checks an array for duplicate values.
// Paramater c is the collection/array.
// To check a collection of objects for a duplicate value on a given key:
//    Include the key as the second parameter , k.
function duplicateValueCheck(c, k){
	var check = false;
	if (typeof(metricsData[0]) == "object"){
		for (var i=0; i < c.length - 1; i++){
			if (c[i + 1][k] == c[i][k]){
				check = true;
			}
		}
	} else {
		for (var i=0; i < c.length - 1; i++){
			if (c[i + 1] == c[i]){
				check = true;
			}
		}
	}
	return check;
}