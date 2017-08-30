/*// your code here
_.first=function(arr,n){
	return if(n===undefiend){
		return arr[0];
	}
		else{
			return arr.slice(0, n);
		}
}
//////////////////////////////////////////////
_.last=function(arr, n){
	var x= arr.length;
	var y= x-n;
	if(n===undefined){
		return arr[x-1];
	}else{
		return arr.slice(x, y)
	}
}*/
///////////////////////////////////////////## Instantiation Patterns////////////////////
/////////
var Array = function(arr){
	this.first = first
	this.last = last
}
Array.prototype.first= function(arr){
	return arr[0];
}

////////
Array.prototype.last= function(arr){
	return arr[length-1;
}
