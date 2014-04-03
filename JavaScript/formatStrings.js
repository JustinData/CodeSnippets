function formatString(value){
	var temp = value;
	
	function convertDashes(str){
		return str.replace(/-/g, ' ');
	}

	function convertUnderscores(str){
		return str.replace(/_/g, ' ');
	}

	function toTitleCase(str)
	{
	    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}

	temp = convertDashes(temp);
	temp = convertUnderscores(temp);
	temp = toTitleCase(temp);
	return temp;
}