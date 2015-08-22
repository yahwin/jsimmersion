var addresses = ["Tom McCluskey; 735 SW 20th Place; Portland, OR 97205", "Tyler Durden; 420 Paper St.; Wilmington, DE 19886", "Dana Scully; 3170 W. 53rd Rd. # 35; Annapolis, MD 21402", "Lisa Simpson; 742 Evergreen Terrace; Springfield, USA 02358", "Ada Lovelace; 12 St. James's Square; London, England SW1Y4JH",
"Sherlock Holmes; 221-B Baker St.; London, England NW16XE", "Bilbo Baggins; Bag End, Bagshot Row; Hobbiton, The Shire 10392", "Santa Claus; North Pole H0H0H0", "Sue Richards; Baxter Building; 42nd St & Madison Ave.; Manhattan, NY 10101-7435", "Kubla Khan; 1 Stately Pleasure Dome; Xanadu, 90210", "Arthur Dent; 155 Country Lane; Cottington, England, Earth"]

// JOE'S!!
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




// For the Rolodex

function rolodex(arr, ) {

}
