/Create an Empty Checkerboard String
var checkerBoardString = "";

//Loop Through Each Square on the Board - and determine if it is Black or White
for (var i = 0; i < 64; i++) {

  
  
  var n = i;                //Number of this Square
  var r = Math.floor(n/8);  //Number of this Row
  var c = n%8;              //Number of this Column
  var color;                //Will Hold the Color Value of the Square
  
  //Assign Color Value to Current Square
  if (r%2 === 0) {   //Row is Even
      if (c%2 === 0){  //Column is Even
      color = "#";    //Square is Black
    } else {          //Column is Odd
      color = " ";    //Square is White
    }
  } else {            //Row is Odd
      if (c%2 === 0){   //Column is Even
      color = " ";    //Square is White
    } else {          //Column is Odd
      color = "#";    //Square is Black
    }
  }
    
  //Concatinate the Color Value of to the accumulating checkerBoardString
  if ( c%7 === 0 && c !== 0 ) {
     checkerBoardString += (color + "\n");   //Add Line Break if Column 7
   } else {
     checkerBoardString += color;            //Concatinate
   }

  
  
}

//Print checkerBoardString
console.log(checkerBoardString);