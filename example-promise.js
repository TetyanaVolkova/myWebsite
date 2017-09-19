
function addPromise(a, b) {
	return new Promise(function(resolve, reject){
		if(typeof a === 'number' && typeof b === 'number') {
			resolve(a+b);
		} else {
			reject('A and B need to be a numbers');
		}
	});
}
addPromise(3, "hey").then(function(x) {
	console.log("promise success", x);
}, function(y) {
	console.log('promise error', y);
});