// >>>>>>> MATT <<<<<<<<
//ranks
function rank(id){
  var index = Math.ceil((id+1)/4);
  return index;
}
rank(5)

//suits
function suit(id){
  if(id%4==0){
    return("1");
  }else if(((id-1)%4)==0){
    return("2");
  }else if(((id-2)%4)==0){
    return("3");
  }else if(((id-3)%4)==0){
    return("4");
  }
}
suit(5)

//color
function color(id){
  var co = suit(id);
  if(co == "1" || co == "2"){
    return("red")
  }else if (co == "3" || co == "4"){
    return("black");
  }
}
//names

function name(id){
  var na = suit(id);
  if(na=="1"){
    var x = " of hearts"
  }else if(na=="2"){
    var x = " of diamonds"
  }else if(na=="3"){
    var x = " of spades"
  }else if(na=="4"){
    var x =" of clubs"
  }
  var num = rank(id);
  var ranks = ["Ace", "2", "3", "4", "5","6","7","8","9","10","Jack","Queen","King"]
  return ranks[num] + x;
}

//cardID

function cardID(rank,suit){
  var card = 4*(rank-1)+(suit-1);
  return card;
}



// >>>>>>>> PAT <<<<<<<<<<<
var ranks = ["Ace",
             "Two",
             "Three",
             "Four",
             "Five",
             "Six",
             "Seven",
             "Eight",
             "Nine",
             "Ten",
             "Jack",
             "Queen",
             "King"];

var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];


function rank(id) {

  var r = Math.floor(id/4) + 1;
  return r

}


function suit(id) {

  var s = ( id % 4 ) + 1;
  return s

}


function color(id) {

  var s = suit(id);
  var c = (s <= 2 ? "red" : "black");
  return c

}


function name(id) {

  var r = ranks[ rank(id) - 1 ];
  var s = suits[ suit(id) -1 ];
  return r + " of " + s

}


function cardID(rank,suit) {

  var r = ranks.indexOf(rank);
  var s = suits.indexOf(suit);
  var id = r * 4 + s;
  return id

}

// >>>>>>> Joe <<<<<<<<<
// GLOBAL VARIABLES
//=====================================


var sherlock = ["Sherlock Holmes; 221-B Baker St.; London, England NW16XE"];
var addresses = ["Tom McCluskey; 735 SW 20th Place; Portland, OR 97205", "Tyler Durden; 420 Paper St.; Wilmington, DE 19886", "Dana Scully; 3170 W. 53rd Rd. # 35; Annapolis, MD 21402", "Lisa Simpson; 742 Evergreen Terrace; Springfield, USA 02358", "Ada Lovelace; 12 St. James's Square; London, England SW1Y4JH"];
var arr = ["Sherlock Holmes; 221-B Baker St.; London, England NW16XE", "Bilbo Baggins; Bag End, Bagshot Row; Hobbiton, The Shire 10392", "Santa Claus; North Pole H0H0H0", "Sue Richards; Baxter Building; 42nd St & Madison Ave.; Manhattan, NY 10101-7435", "Kubla Khan; 1 Stately Pleasure Dome; Xanadu, 90210", "Arthur Dent; 155 Country Lane; Cottington, England, Earth"];



// TEST ASSERTION
//=====================================

var error = "you fool!";

function assert(claim, warning) {
	if (!claim){
		console.log(warning);
	}
	else { console.log( "☜(⌒▽⌒)☞" ) }
}



// EATS ADDRESS, RETURNS ZIPS AND NAMES
//=====================================

function watson(array){

	var containerArray = [];

	for( var i = 0; i < array.length; i++ ) {

		var name = '';
		var address = '';
		var resultArray = [];

		var currentArray = array[i];			//array to string

		currentArray = currentArray.split( ';' ); 	//string back to array, 3 members

			name = currentArray[0];		//is a string
			name = name.split(' ');		//to array
			name = name.reverse();		//reverse array
			name = name.join(', ');		//to string "last name, first name"


			address = currentArray[currentArray.length - 1];	//string
			address = address.split(' ');						//array

			zipcode = address[address.length-1];				//string saves the last item - zipcode


		    resultArray.push(name + ': ' + zipcode);	//combine in array

			containerArray.push( resultArray.join() );			//add to container array
		}

	// PROOF THAT IT'S WORKING
	console.log( 'finished container: ' + containerArray );
	var measure = containerArray.length;
	var first = containerArray[0];
	var last = containerArray[containerArray.length-1];
	console.log(measure);
	console.log(first);
	console.log(last);

	return containerArray;	//final product
}



// CALL THE FUNCTION
//================================================
watson(arr);
