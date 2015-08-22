var rect1 = {
  width: 11,
  height: 3,
  area: function() {
    return this.width * this.height;
  }
};
answer = rect1.area();

square2 = {
  height: 20,
  width: 20,
}

rect3 = {
  width: 20,
  height: 10,
}

function talk() {
  alert(this.noise.toUpperCase() + '!!');
}

var redPanda = {
  noise: 'snoo',
  talk: function() {
    return this.noise.toUpperCase() + '!!';
  }
}

var redSound = redPanda.talk();

var squirrel = {
  coat: 'furry',
  tail: 'bushy',
  noise: redPanda.noise,
  talk: redPanda.talk
}

var cow = {
  noise: 'moo',
  talk: redPanda.talk,
}

squirrel.talk();
var squ = redPanda.talk.call(squirrel);


var rat = {
  noise: 'squeak',
  talk: redPanda.talk,
}

function expectValue(result, expected, attemptStr) {
	if (result !== expected) {
		console.log(attemptStr+" expected result "+expected+", got "+result);
	}
}

function testPush(array) { // accept an array to test, if provided
	// otherwise make a new one:
	if (!array) array = [];

	array.length = 0; //clear the array to be empty initially

	// Try several pushes, and for each try, check the status of
	//  the resulting array and the return value:
	expectValue(array.push('a'), 1, "array.push('a')"); //check return value
	expectValue(array[0], 'a', "array[0]"); // check array element
	expectValue(array.length, 1, "array.length");	// check array length

	expectValue(array.push('b'), 2, "array.push('b')");
	expectValue(array[0], 'a', "array[0]"); //should remain 'a'
	expectValue(array[1], 'b', "array[1]");
	expectValue(array.length, 2, "array.length");

	// That might be enough, but to be sure, push 'c' and test again here:
	//...
    expectValue(array.push('c'), 3, "array.push('c')");
    expectValue(array[0], 'a', "array[0]");
    expectValue(array[1], 'b', "array[1]");
    expectValue(array[2], 'c', "array[2]");
    expectValue(array.length, 3, "array.length");
}

var table = {pat: 'Pat', kath: 'Kathleen', mitch: 'Mitch', yah: 'Do'};

var pseudoArr = {
	length:0,  // element properties will be added as needed

	pop: function() { //changes array, returns ??
		//...
		var last = this[this.length - 1];
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
		if (!delim) delim = ',';
		var string = '';

		for (var i = 0; i < this.length; i++){
			if (typeof i === 'number' && i === 0){
				string += this[i];
			} else if ( typeof i === 'number' && i !== 0) {
				string += this[i] + delim;
			}
		}
		return string;
	}
};




var exchange = {
     unitsPerDollar: {
    Dollar: 1,
    Euro: 0.90,
    Pound: 0.64,
    Peso: 16.42,
    Yen: 124.41,
    Yuan: 6.40,
},


    convertTo: function(amount, toUnit) {
        return amount * this.unitsPerDollar[toUnit] + ' ' + toUnit;
    },

  convertFrom: function(amount, fromUnit) {
        return amount / this.unitsPerDollar[fromUnit] + ' dollars';
}

};

