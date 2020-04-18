// Program that creates an array of following elements, then returns the second minimum element.
function secondMinimum(values){
	min = values[0];
	sndMin = values[0];
	for (value of values){
		if(value < min) {
			sndMin = min;
			min = value;
		}
		else if (value < sndMin)
			sndMin = value;
	}
	return sndMin;
}
