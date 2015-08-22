//Assertions and Array Methods

//Scope and Shadowing


//More Array Methods
//string or array .indexOf(thing) // finds the index based on array item
//array .join(delimiter string) // convert an array to a string, each member seperated by a "what you put here", e.g. '.''|'
//string .split(delimeter string) //convert a string to an array, each member seperated by a "what you put here" e.g. '.''|'
//string or array .slice(start, end) copies the array
//array .splice(start(index), number of things to delete) change + removed array
// array .reverse it reverses the array!
// array .concat copies
// array .push change + number
// array .forEach side effect
// array .map array
// array .filter subset/array
// array .sort reorganize array
// array .reduce value

//1
 var x=1, y=1;
    function fun(x) {
        x=3;
        console.log('x='+x, 'y='+y);
    }
    fun(2);
    console.log('x='+x, 'y='+y);
/*
undefined
*/
/*
undefined
*/

//2
var x=1, y=1;
    function fun(z) {
        console.log(z);
        x=3;
        console.log('x='+x, 'y='+y);
    }
    fun(2);
    console.log('x='+x, 'y='+y);
/*
undefined
*/

//3
var x=1, y=1;
    function fun(x) {
        x=3, y=3;
        if (x) {
            var y=4;
            console.log('x='+x, 'y='+y);
        }
        console.log('x='+x, 'y='+y);
    }
    fun(2);
    console.log('x='+x, 'y='+y);

//4
var x=1, y=1;
    function showXY(x,y) {
        console.log('x='+x, 'y='+y);
    }
    function fun(x) {
        x=3;
        showXY(x,y);


//string and array manipulation
var addresses = ["Tom McCluskey; 735 SW 20th Place; Portland, OR 97205", "Tyler Durden; 420 Paper St.; Wilmington, DE 19886", "Dana Scully; 3170 W. 53rd Rd. # 35; Annapolis, MD 21402", "Lisa Simpson; 742 Evergreen Terrace; Springfield, USA 02358", "Ada Lovelace; 12 St. James's Square; London, England SW1Y4JH"];

function assert(claim, warning){
    if (!claim){
        console.log(warning);
    }
}

//assert((nameZip(["Tom McCluskey; 735 SW 20th Place; Portland, OR 97205"])[0])) === ["McCluskey, Tom: 92705"][0], 'That aint right');


function nameZip(arr) {
    var newArray = [];
    var lastFirst = "";
    var finalArray = [];
    for( var i = 0; i < arr.length; i++){
        newArray = arr[i].split('; ');
        lastFirst = newArray[0].split(" ").reverse();
        var combined = lastFirst[0].concat(", " + lastFirst[1]);
        var zipCode = newArray[2].split(" ");
        combined += ': ' + zipCode[2];
        finalArray.push(combined);
    }
    return finalArray;
}
