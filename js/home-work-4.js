function callback(question, yes, no) {
	if (confirm(question)) {
		yes();
	} else {
		no();
	}
}
function coutYes() {
	console.log('you say yes');
}
function coutNo() {
	console.log('you say no');
}
callback('Yes or not?', coutYes, coutNo);
