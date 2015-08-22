// Methods and this

// Not as portable.
// var rect1 = {
//     width:1,
//     height:2,
//     area: function() { //no target arg needed
//         return rect1.width * rect1.height;
//     }
// };
// answer = rect1.area();

// More portable
// var rect2 = {
//     width:2,
//     height:3,
//     area: function() {
//         return this.width * this.height; // uses this statements
//     }
// };
// answer = rect2.area();


// Lexical vs. Dynamic Scoping
// The word this behaves somewhat like a variable, except:
//
// You can never set it (e.g. this=that)
//
// It always refers to an object, never a primitive
//
// It is 'dynamically' scoped; its referent cannot be determined by looking at the code surrounding it. Its value is not determined by closure, like a local variable, but instead depends on how its function is called, like a parameter. It is essentially an invisible parameter.
// For example:
//
// var rect2 = {
//     width:2,
//     height:3,
//     area: function() {
//         return this.width * this.height;
//     }
// };
// answer = rect2.area();
// this refers to rect2, but not because the function is 'embedded' in the description of rect2. Instead, it's only because the function is called as a method of rect2.


// Sharing methods:
// var square1 = {
//     width:1,
//     height:1,
//     area: rect2.area; // share rect2's method
// }
// answer = square1.area();
// Single-use borrowing with call
//
// This object has no method of its own:
//
// var square2 = {
//     width:2,
//     height:2
// }

// Testing Arrays
// Write some code to verify that Arrays behave as advertised. Specifically, write three different functions, each testing one method of Arrays:
// testPush(array) should verify that array.push(val) adds val to the end of array and returns its new length;

//Verify
// Here's a fancy new assertion, with better failure reporting:
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
    expectValue(array.length, 2, "array.length");
}
