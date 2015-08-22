// Callbacks and Higher order functions

//1. Write a function which counts down from 10 to 0, logging each number, and when it reaches 0 prints "Done!".
//2.  Write a function which counts down from N to 0, where N is a parameter, and then prints "Done!".
//3.  Write a function which counts down from N to 0 as before, but then prints a message of your choice, passed in as a second parameter.
//4. Write a function which counts down from N to 0, then does any action of your choice! The action should be expressed as another function which is passed in as a parameter to your countdown function.
// Callbacks
// A callback is just a function passed as an argument to another function. The receiving function is reponsible for calling the callback at the right time, but that receiver has no idea what the callback function does. Conversely, the callback knows how to perform some action, but it has no idea what will trigger it.

// Customized Countdown
// 1
function countdown(){
    for (var i = 10; i >= 0; i-- ){
        if (i === 0){
          console.log("Done!");
        } else {
          console.log(i);
        }
    }
}

//2
function downCount(n){
    for (var i = n; i >= 0; i-- ){
        console.log(i);
    }
    console.log('Done!');
}

//3
function counting(n, message){
    for (var i = n; i >= 0; i-- ){
        console.log(i);
    }
    console.log(message);
}

// 4 THIS IS A CALLBACK!
function onBelay(n){
    alert("BELAY IS ON!");
}

function callBack(n, funk){
    for (var i = n; i >= 0; i--){
        console.log(i);
    }
    funk();
}

//Also works
var num = (2*5);
callBack(num, function() {
  alert('YOU\'RE NOT ON BELAY!');
}
);

// setTimeout
setTimeout(function() {
  alert('It Waited!');
}, 5000);

//Callbacks with parameters
//1
var array = ['Gino', 'Kobe', 'Cheyenne', 'Windsor', 'Daisy', 'Pooh'];

function shout(str){
    var out = str.toUpperCase() + '!';
    console.log(out);
    return out;
}


function everyOther(array, callBack) {
    for (var i = 0; i < 1; i++){
        console.log(array[i]);
        callBack(array[i]);
    }
}

function stringIt(kk) {
    var makeIt = kk + " is a string!";
    console.log(makeIt);
    return makeIt;
}


// forEach
//
function forEach(array, callback) {
    for (var i = 0; i < array.length; i++)
    callback(array[i], i);
}


// map
//All arrays have a method called map. map, like forEach, runs its callback on each array element, but it expects the callback to return a value each time. The result of map is a new array built from those individual return values, one per element.

function map(array, callback) {
    for (var i = 0; i < array.legnth; i ++){
        callback(array.slice[i]);
    }
}

//fruit
//All arrays have a method called filter. Like map, filter builds and returns a new array derived from the original array. filter calls its callback function on each element of array, and if the callback returns anything truthy, filter copies the original element (not the truthy result) into the new array. Put another way, filter finds a subset of the original array according to a criterion decided by its callback.
//indexOf works on strings as well as arrays
var fruits = ['apple','banana','cranberry','plum'];

function eFilter(array){
   return array.indexOf('e') >= 0;
}

// build a new array using callback to decide which elements of array to include
// so it needs to be able to decide if the callbacks requirements are truthy or not

function filter(array,callback) {
    var arr = [];
    for (i = 0; i < array.length; i ++) {
        if (callback(array[i])){
            arr.push(array[i]);
        }
    }
    return arr;
}

function strain(o) {
    return (o.toLowerCase().indexOf('o') >= 0);
}

// Sort
// Any array can sort itself. The callback to sort has two parameters, which are different, unknown elements of array, and the callback indicates which is greater by returning either a positive or negative number. Here is an example of a callback which sorts an array alphabetically: function compareAlpha(strA,strB) { if (String(strA) < String(strB)) return 1; else return -1 }

//1
var dogs = ['Gino', 'Kobe', 'Cheyenne', 'Windsor', 'Daisy', 'Poohe'];

function ascending(a,b) {
    if (a>b){
        return -1;
    }
    if (b>a) {
        return 1;
    }
    return 0;
}

function ascending(a,b) {
    return b-a;
}

//2
function secondLetter(a, b) {
  if (a[1] > b[1]){
    return 1;
  }
  if (a[1] < b[1]){
    return -1;
  }
}

function secLetter(a,b) {
    if (a.slice(1) > b.slice(1)) {
        return 1;
    }
    if (a.slice(1) < b.slice(1)) {
        return -1;
    }
}

//reduce
function smooshLetters(arr, item) {
    return arr + item;
}

function smoosh(arr, item) {
    return arr + item.length;
}

function smooshMin(arr, item) {
    if (item < arr) {
        return item;
    }
    else
    return arr;
}

function smooshMin(arr, item) {
    return (item < arr) ? item : arr;
}
