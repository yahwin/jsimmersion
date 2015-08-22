// Objects and Properties
// Make an object representing yourself. First declare a variable holding an empty object, then incrementally assign it 3 properties with keys and values of your choice.
//
// Use "object literal notation" to make similar objects for each other person at your table, using a different variable for each.
//
// Make an object for the entire table, stored in variable table, with a property for each person. The property name should be the person's name, and its value should be the person's object.
//
// Write four "chained" expressions, each referencing one property of each person at the table. Each expression should start with variable table and contain no other variables, only property names.

// An array has automatically labled items, an object needs you to lable the items yourself(i.e. a "property"/"key")
// object = key: 'value'

// Object.keys('object name').length will indrectly give you the length, it will return the keys in an array.
// Arrays are objects

var colors = ['red', 'blue', 'green'];

var obj = {r: 'red', b: 'blue', g: 'green'};

obj ['b'] = 'blueberry';
obj ['z'] = 'zed';
obj.z = 'zoot';

obj ['banana'.slice(0,1)];

var duck = {noise:"quack", feet: 2, canSwim: true};
var nest = {mama: duck};

var nest = {mama: {noise:"quack", feet: 2, canSwim: true}}

var nest = {};
nest{'mama'} = {noise:"quack", feet: 2, canSwim: true};

var nest = {}:
nest.mama = {};
nest.mama.noise = "quack";
nest.mama.feet = 2;
nest.mama.canSwim = true; //var.prop.prop.prop
// var [prop][prop][prop]


// Make an object representing yourself. First declare a variable holding an empty object, then incrementally assign it 3 properties with keys and values of your choice.
var yah = {};
yah ['age'] = 30;
yah ['powers'] = 'super human strength';
yah ['gender'] = 'male';

var jesse = {'age': 32, 'power': 'time travel', 'gender': 'male'};
var adam = {'age': 28, 'food': 'sushi', 'power': 'omnipotent'};
var matt = {'age': 25, 'power': 'probability manipulation', 'gender': 'male'};


var table = {north: yah, east: matt, south: jesse, west: adam};

// Looping over properties
// Write a function personIsAt(name,tableObj) which returns a Boolean: true if a person named name is at table tableObj, otherwise false.
// for ('key' in object){
//      console.log(key);
// }

function personIsAt (name, tableObj){
    return(name in tablObj);
}


// Write a function peopleAt(tableObj) which returns a string listing all the names of people at your table tableObj. Separate each name with a newline ('\n').
function peopleAT (tableObj){
  var x = [];
  for (var name in tableObj){
        x.push(name);
    }
  return x.join('\n');
}

// Write a function whoHasKey(tableObj,key) to return the name of any person at your table (parameter tableObj) who has a key matching parameter key.

function whoHasKey(tableObj, key){
    for ( var name in tableObj){
     if (key in tableObj[name]){
       return name;
     }
    }
}


// this will list every person with the key in one string.
function whoHasKey(tableObj, key){
  var hasIt = [];
  for ( var name in tableObj){
     if (key in tableObj[name]){
       hasIt.push(name);
     }
    }
  return hasIt.join();
}

// Write a function whoHasVal(tableObj,val) to return the name of any person at your table who has a property with value val.

function whoHasVal(tableObj, val){
  var hasIt = [];
  for (var name in tableObj){
    for (var prop in tableObj[name]){
      if (val === tableObj[name][prop])
        hasIt.push(name);
    }
  }
 return hasIt.join();
}
// see above
// Bonus Challenge: Modify your functions whoHasKey and whoHasVal to return a list of all people matching the key or value, respectively.


// Comparing and Copying Objects
// Write a function copy(obj), which duplicates an object (not just copying a reference to it). You only need a shallow copy, duplicating only the top level of properties. That is, if obj contains another object inner, the duplicate may share a reference to inner rather than copying all of inner too.

function copy(obj){
  var x = {};
    for (var key in obj){
      x[key] = obj[key];
    }
   return x;
}

//Write another function to compare two objects: equal(objA,objB) should return true only when objA and objB have exactly the same properties with the same values. You only need shallow equality: if objA and objB each have a property inner referring to an object, check only that both inner objects are identical (references to the same object); don't try to compare their properties. Note that two empty objects should be considered equal (by this function, not by the == operator).

function equal(objA,objB){
  if (Object.keys(objA).legnth !== Object.keys(objB).length)
    return false; // tests length right away to determine if even similar length
  for( value in objA){
      if ( !(objA[value] === objB[value])){
        return false; // if just the first 2 properties are equal it'll return true righ away, never hitting the following properties. Give it many chances to fail first!
    }
    return true;
  }
}


//Write a third function: similar(objA,objB) should return true only when objA and objB have exactly the same properties, regardless of their values.

function similar(objA,objB){
  if (Object.keys(objA).length !== Object.keys(objB).length)
    return false;
  for( value in objA){
      if ( !(value in objB)){
        return false;
    }
    return true;
  }
}
