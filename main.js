"use strict"
function findDuplicate(arr) {
	var i,
		len=arr.length,
		result = [],
		obj = {};
	for (i=0; i<len; i++) {
		obj[arr[i]]=0;
	}
	for (i in obj) {
		if (isNaN(i)) {
			result.push(i);
		}
	}
	console.log(result)
	return result.length;
}

function count(){
	var str = document.getElementById('count').value;
	var strLen = str.split(/\b\W+\b/);
	var unq = findDuplicate(strLen);

	document.getElementById('number').innerHTML = `
	Your string consists of ` + strLen.length + ` words, but only `+ unq +` are unique`;
}