// Here's the old, simple assertion:
function assert(claim,message) {
    if (!claim) console.error(message);
}

// Here's a fancy new assertion, with better failure reporting:
function expectValue(result, expected, attemptStr) {
	if (result !== expected) {
		console.log(attemptStr+" expected result "+expected+", got "+result);
	}
}
// In your tests below, you may use either kind of assertion, or write your own!


function testPush(array) { // accept an array to test, if provided
	// otherwise make a new one:
	if (!array) array = [];

	array.length = 0; //clear the array to be empty initially

	// Try several pushes, and for each try, check the status of
	//  the resulting array and the return value:
	expectValue(array.push('a'), 1, "array.push('a')1"); //check return value
	expectValue(array[0], 'a', "array[0]2"); // check array element
	expectValue(array.length, 1, "array.length3");	// check array length

	expectValue(array.push('b'), 2, "array.push('b')4");
	expectValue(array[0], 'a', "array[0]5"); //should remain 'a'
	expectValue(array[1], 'b', "array[1]6");
	expectValue(array.length, 2, "array.length7");

	// That might be enough, but to be sure, push 'c' and test again here:
	//...
    expectValue(array.push('c'), 3, "array.push('c')8");
    expectValue(array[0], 'a', "array[0]9");
    expectValue(array[1], 'b', "array[1]10");
    expectValue(array[2], 'c', "array[2]11");
    expectValue(array.length, 3, "array.length12");
}

function testPop(array) {
	if (!array) array = [];

	array.length = 0; //clear array

	// 1) populate the array by pushing elements 'a' and 'b' onto it
	//...
    expectValue(array.push('a'), 1, "array.push('a')13");
	expectValue(array[0], 'a', "array[0]14");
	expectValue(array.length, 1, "array.length15");

    expectValue(array.push('b'), 2, "array.push('b')16");
	expectValue(array[0], 'a', "array[0]17"); //should remain 'a'
	expectValue(array[1], 'b', "array[1]18");
	expectValue(array.length, 2, "array.length19");


	// 2) pop once, then check the return value, array contents, and array length
	//...
    expectValue(array.pop(), 'b', "array.pop()20");
    expectValue(array[0], 'a', "array[0]21");
	expectValue(array.length, 1, "array.length22");


	// 3) pop again, then check as before
	//...
    expectValue(array.pop(), 'a', "array.pop()23");
    expectValue(array[0], undefined, "array[0]24");
    expectValue(array.length, 0, "array.length25");

	// 4) array should now be empty!  check an attempt to pop when empty
	//...
    expectValue(array.pop(), undefined, "array.pop()26");
    expectValue(array[0], undefined, "array[0]27");
    expectValue(array.length, 0, "array.length28");
}

function testJoin(array) {
	if (!array) array = [];

	array.length = 0; //clear array

	// 1) try a join on the empty array,
	//  then check the return value and its status (which should be unchanged)
	//...
    expectValue(array.join(), '', "array.join()29");
    expectValue(array[0], undefined, "array[0]30");
    expectValue(array.length, 0, "array.length31");

	// 2) push 'a', then join and check as before
	//...
    expectValue(array.push('a'), 1, "array.push('a')32");
    expectValue(array.join(), 'a', "array.join()33");
    expectValue(array[0], 'a', "array[0]34");
    expectValue(array.length, 1, "array.length35");

	// 3) push 'b', then join and check as before
	//...
    expectValue(array.push('b'), 2, "array.push('b')36");
    expectValue(array.join(), 'a,b', "array.join()37");
    expectValue(array[0], 'a', "array[0]38");
    expectValue(array[1], 'b', "array[1]39");
    expectValue(array.length, 2, "array.length40");

	// 4) push 'c', then join and check as before
	//...
    expectValue(array.push('c'), 3, "array.push('c')41");
    expectValue(array.join(), 'a,b,c', "array.join()42");
    expectValue(array[0], 'a', "array[0]43");
    expectValue(array[1], 'b', "array[1]44");
    expectValue(array[2], 'c', "array[2]45");
    expectValue(array.length, 3, "array.length45");

	// 5) leave array unchanged, but join it with a different delimiter and check outcome
	//...
    expectValue(array.join('|'), 'a|b|c', "array.join('|')46");
    expectValue(array[0], 'a', "array[0]47");
    expectValue(array[1], 'b', "array[1]48");
    expectValue(array[2], 'c', "array[2]49");
    expectValue(array.length, 3, "array.length50");

	// 6) leave array unchanged, but join() it with no delimiter argument, and check that it
	//   uses the default delimiter ',' correctly
    expectValue(array.join(), 'a,b,c', "array.join()51");
    expectValue(array[0], 'a', "array[0]51");
    expectValue(array[1], 'b', "array[1]52");
    expectValue(array[2], 'c', "array[2]53");
    expectValue(array.length, 3, "array.length54");

}

// When those test functions are written, you can run them on built-in arrays
//  by calling the test with no arguments:
testPush();
testPop();
testJoin();

//To test a custom array implementation (see following problem), do this:
//var myArray = {pseudoArr}; //special object with push,pop, and join methods

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


testPush(pseudoArr);
testPop(pseudoArr);
testJoin(pseudoArr);
