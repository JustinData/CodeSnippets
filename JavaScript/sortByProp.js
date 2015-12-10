function sortByProp(arr, prop){
	return arr.slice().sort(function(a, b){
		return a[prop] - b[prop];
	});
}