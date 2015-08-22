/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
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
    }
    fun(2);
    showXY(x,y);

//5
var x=1, y=1;
    function showXY() {
        console.log('x='+x, 'y='+y);
    }
    function fun(x) {
        x=3;
        showXY();
    }
    fun(2);
    showXY();


for (var x = 0; x < 10; x++)
    { console.log(x); }

//7
var x=1, y=1;
    function fun(x) {
        function showXY() {
            console.log('x='+x, 'y='+y);
        }
        x=3;
        showXY();
    }
    fun(2);
    showXY();

//6
var x=1, y=1;
    function showXY() {
        console.log('x='+x, 'y='+y);
    }
    function fun(x) {
        x=3;
        showXY();
    }
    fun(2);
    showXY();

arr = [1, 2, 'gino', 'catcat'];
var dog = arr.indexOf('gino');

var html = "https://www.portlandcodeschool.com?=javascript,full_stack,immersion"
var toppings = ["green peppers", "mushrooms", "sausage", "anchovies"];

toppings.slice[3, 4]
/*
undefined
*/



var split = (html.slice(html.indexOf('=') + 1)).split(',');


var myPizza = (toppings.splice(toppings.indexOf("green peppers"), 2, "pepperoni"));


//mypush function
function myPush(arr, val){
    arr[arr.length] = val;
    return arr.length;
}

//muyPush function
arr1 = 
arr2
function muyPush(arr1, arr2){
    arr1 = arr1.concat(arr2);
    return arr1.length;
}








