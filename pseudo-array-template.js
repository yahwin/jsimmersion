function expectValue(result, expected, attemptStr) {
	if (result !== expected) {
		console.log(attemptStr+" expected result "+expected+", got "+result);
	}
}


var pseudoArr = {
	length:0,  // element properties will be added as needed

	pop: function() { //changes array, returns ??
		//...
		var last = this[this.length - 1]; //
		delete this[this.length - 1];

		if (this.length > 0){
			this.length -= 1;
		} else{
			this.length = 0;
		}

		return last;
	},

	push: function() { //changes array, returns a number
		//...
		for (i = 0; i < arguments.length; i ++) {
			this[this.length] = arguments[i];
			this.length += 1;
		}
		return this.length;
	},

	join: function(delim) { //returns a string
		//...
		if (delim === ''){
			delim = '';
		} else if (!delim){
			delim = ',';
		} else {
			delim = delim;
		}
		var string = '';

		for (var i = 0; i < this.length; i++){
			if (i === 0){
				string += this[i];
			} else if (i !== 0) {
				string += delim + this[i];
			}
		}
		return string;
	}
};
