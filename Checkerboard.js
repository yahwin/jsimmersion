// // Checkerboard
// Imagine that the squares of an ordinary checkerboard are numbered in two different ways:
//
// Each square has integer coordinates (R,C) describing its row and column. Both values should be in the range 0..7, so that the upper-left square is at (0,0) and the bottom-right is at (7,7).
//
// Each square has a unique integer number N from 0 to 63. These numbers run sequentially left-to-right one row at a time, top to bottom. Therefore the upper-left square has N===0 and the bottom-right has N===63.
//
// a) Given a particular R and C, find the corresponding N. That is, write an expression for variable N containing variables R and C.
//
// b) Given N, find R. Write an expression for R which contains N.
//
// c) Given N, find C. Write an expression for C which contains N.
//
// d) Assume the squares are colored black and white, with the upper-left square black. Write an expression (or pair of conditional statements) to set a variable color to either 'black' or 'white', describing the square identified by variables R,C, and N (or a subset of them, if you don't need all three).
// e) Print the board to a string, using "#" for black squares and " " for white squares.



//(r * 8) + c = n; to find n/interger
// Math.floor(n / 8) = r to find r/row
// Math.floor(n % 8) = c to find c/column
//

// Create an empty string to print out the checkerboard
var checkerboard = '';

for (var i = 0; i < 64; i++){ // this will count out the Interger 0 - 63
    var n = i; // the interger
    var row = Math.floor(n / 8); // the row 0 - 7
    var col = Math.floor(n % 8); // the column 0 - 7
    var color; // color will either be # or _

    if (row % 2 === 0){ // if the row is EVEN
        if (col % 2 === 0){ // if the column even
            color = '#'; // the color is black
        } else { // otherwise, if the column is odd
            color = '_'; // the color is white
        }
    } else { // if the row is ODD
        if (col % 2 === 0){ // but the column is even
            color = '_'; // start it as white
        } else { // or if the column is odd
            color = '#'; // the color is black
        }
    }
    // this puts it together into the string
    // it adds the checkerboard string to the colors
  if (col % 7 === 0 && col !== 0){ // if the column is 7 but not 0
    checkerboard += (color + '\n'); // concat checkerboard and color with a line break after the 7th column
} else { // otherwise if it's any other column
    checkerboard += color; // just concat as usual
  }
}

// Let's see if it works!
console.log(checkerboard);


//How about with a ternary operator
var checkerboard = '';

for (var i = 0; i < 64; i++){
    var n = i; // the interger
    var row = Math.floor(n / 8);
    var col = Math.floor(n % 8);
    var color;

if ( row % 2 === 0  &&  col % 2 === 0 ? color = '#' : color = '_') {
}
if (row % 2 !== 0 && col % 2 !== 0 ? color = '_' : color = '#'){
}

if (col % 7 === 0 && col !== 0){
    checkerboard += (color + '\n');
  } else {
    checkerboard += color;
  }
}

console.log(checkerboard);
