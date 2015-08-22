var x;
var nums = [3, 1, 4, 1, 5, 9, 2, 7]

nums[3]; //1
nums[nums.length-1]; //7
nums[nums[4]]; // 9

x = nums.concat(nums); [3, 1, 4, 1, 5, 9, 2, 7, 3, 1, 4, 1, 5, 9, 2, 7]
x[x[x[nums[2]]]]; //1
nums[x[x[x[2]]]]; //undefined

nums.push(x.pop()); [3, 1, 4, 1, 5, 9, 2, 7, 7]
x.push(nums.length); [3, 1, 4, 1, 5, 9, 2, 7, 3, 1, 4, 1, 5, 9, 2, 9]
x.push(x.push(0)); [3, 1, 4, 1, 5, 9, 2, 7, 3, 1, 4, 1, 5, 9, 2, 9, 0, 17]

x.length = x[6]; // 2 [3, 1]


//arrays with Loops 1
var x = [1,2,3,4,5];

for (var i=0; i < x.length; i = i + 1){
    if (i % 2 == 0){
        console.log(i + " : " + x[i]);
    }
}

//Odd numebered arrays 1-10
var y = [];

for (var i = 0; i <= 10; i++){
    if(i % 2 !== 0){
    y.push(i);
  }
}

console.log(y);

// arrays with loops 2
// part 1
var nums = [3, 1, 4, 1, 5, 9, 2, 7];

for (var i = 0; i < nums.length; i++){
  console.log(nums[i]);
}

// part 2
var nums = [3, 1, 4, 1, 5, 9, 2, 7];

for (var i = 0; i < nums.length; i++){
  nums[i] = nums[i] * 2;
  console.log(nums[i]);
}

//part 3
var newarray = []
var nums = [3, 1, 4, 1, 5, 9, 2, 7];

for (var i = 0; i < nums.length; i++) {
    newarray[i] = nums[i];
    //newarray.push(nums[i]);
}

//fun with functions
function hello() {
    console.log('hello world');
}

//fuctions 2
var hello2 = function(){
    alert('hello world!');
}

//functions 2b
var hello2 = function(who){
    console.log('hello' + who + '!');
}

//square function
var square = function(num) {
    return num * num;
}

//average of an array
var arr = [2,4,7,-1]
var counter = 0;
function mean(nums) {
  for (i = 0; i < nums.length; i++) {
    counter += nums[i];
  }
  return counter / nums.length;
}
console.log(mean(arr));


//
function word(num) {
    var words = ['one', 'two', 'three', 'four']
    if (num > 0 && num < 10){
        return (words[num -1])
    }
}

var nums = [2,4,7,-1];
var theMean = mean(nums);
var theSqr = square(Means);
var theWord = word(theSqr);


//functions on arrays
//1
var tupac = [1, 2, 3, 4];
var jayz = ['A', 'B', 'C', 'D'];
function concat (arrA, arrB) {
    var biggie = arrA.concat(arrB);
    return biggie;
}

//2
function everyNthOf (arr, n) {
    var macklemore = [];
    var arr = [1, 2, 3, 4, 5];
    for (var i = n; i < arr.length; i += n){
        macklemore.push(arr[i-1]);
    }
    return macklemore;
}

//3
var rza = [2,3,4,5,6];
var odb = [2,3,5,7];
function sharedHeead(arrA, arrB) {
    var snoop = [];
    for (var i = 0; i < arrA.length; i++) {
    if (arrA[i] && arrB[i] === true){
    snoop.push(arr[i])
    }
}
 console.log(snoop[]);
}
sharedHeead(rza, odb);


//Letter Pyramid
//upside down and backwards
function letterPyramid(numb) {
  var alphabet = ['a', 'b', 'c', 'd', 'e']
  var pyramid = '', storage = ''
  for (var i = alphabet.length - 1; i >= 0; i--) {
    storage = alphabet[i] + storage;
    pyramid += storage + '\n';

  }
  return pyramid;
}

//right way
function letterPyramid(numb) {
  var alphabet = ['a', 'b', 'c', 'd', 'e']
  var pyramid = '', storage = ''
  for (var i = 0; i < alphabet.length; i++) {
    storage = alphabet[i] + storage;
    pyramid += storage + '\n';
  }
  return pyramid;
}


//fun with playing cards!
var cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

function rank(id){ // it returns which card it is (1-13, 0 = ace, 1 = 2 etc) with an id/'index' 0-51
    //var rankArray = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    var index = Math.ceil(id/4) + 1;
    return index;
}

function suit(id){ // what suit is this, return the suit 1 = hearts 4 = clubs
    if (id%4 === 0) {
        return('1');
    } else if (((id - 1) % 4) === 0) {
        return('2');
    } else if (((id - 2) % 4) === 0) {
        return('3');
    } else if (((id - 3) % 4) === 0) {
        return('4');
    }
}

function color(id){ // what color is it, this is based on the suit
    var colorOf = suit(id);
    if (colorOf === "1" || colorOf === "2"){
        return ("Red");
    } else if (colorOf === "3" || colorOf === "4"){
        return ("Black");
    }
}

function name(id){ // return the full card name in a string "King of Hearts"
    var nameOf = suit(id);
    var num = rank(id);
    var cards = ["Ace", "Two", "Three", "Four", "Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
    var j = "";
    if (nameOf === "1"){
        j = " of Hearts";
    } else if (nameOf === "2"){
        j = " of Diamonds";
    } else if (nameOf === "3"){
        j = " of Spades";
    } else if (nameOf === "4"){
        j = " of Clubs";
    }
    return(cards[num] + j);
}

function cardID(rank, suit){ // where is the card in the id/'index'
    var cardIndex = 4 * (rank - 1) + (suit - 1);
    return cardIndex;
}
