function count(){
	var str = document.getElementById('count').value;
	var strLen = str.split(" ");
	var nonUnq = 0;
	for (var i = strLen.length - 1; i >= 0; i--) {
		for (var j = strLen.length - 1; j >= 0; j--) {
			if ((strLen[j] === strLen[i]) && (i>j)) {
				nonUnq ++;
				break;
			}
		}
	}
	var unq = strLen.length - nonUnq;
	document.getElementById('number').innerHTML = `
	Your string consists of ` + strLen.length + ` words, but only `+ unq +` are unique`;
}