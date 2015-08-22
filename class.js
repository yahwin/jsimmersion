/// number square!
var line = '';
for (var i = 0; i < 7; i++) {
  for (var x = 0; x < 7; x++) {
  line = line + x;
  }
  line += '\n'
}
console.log(line);



  var string = "";
for (i = 0; i < 6; i++) {
 string = string + i;
}
console.log(string);

var line = "";
var i = 6;
for (x = 0; x <= i; x++ ){
    for(var y = 0; y <= i; y ++){
    line += i;
    }
  line += "\n";
}
console.log(line);

var line = "";
var i = 6;
for (x = 0; x <= i; x++ ){
    for(var y = 0; y <= i; y ++){
    line += i;
    }
  line += "\n";
}
console.log(line);

//pyramid

var line = "";
for (var x = 0; x < 7; x++){
line = line + x; // big differnce from the revers, see below
line = x + line; // this will give you the block "backwards"
console.log(line);
}

var line = "";
var i = 5;
for (var x = 0; x <= i; x++){
line = line + 1;
console.log(line);
}

var x;
if (a) {
  if (b)
  {x = 0;}
  else {x = 1;}
}
else { if (b) {x = 1;}
else {x = 2;}
}

// if a = true x = 0
// if a = false and b = true x = 1
// if a = false and b = false x = 2

var x;
if (a)

var a = '';
var b = true;

if (a != false){
    b;
} else {
  a;
}

if (a && b){
  x = 0;
} else if (a || b){
  x = 1
} else {
  x = 2
}



Write a set of nested loops that will console.log a square of numbers. You should be able to change a single loop's initial value to change the size of the square. Sample output:

012345
012345
012345
012345
012345
012345

for (var i = 0; i <= 5; i ++){
    var x = i + '';
    return x;
}
