function Rect(w, h) {
  this.width = w;
  this.height = h;
  this.area = function () {
    return this.height * this.width
  }
}
var rect3 = new Rect(3, 1); // <-- operator 'new'
rect3.area();
rect3.constructor
rect3 instanceof Rect


fun = new Function('x','return x*2')
fun(9)




var n = new String('banana');

function Rect(w,h) {
    this.width = w || 1;
    this.height = h || 1;
    this.area = function() {
        return this.height * this.width
    }
}
var trueRect = new Rect();
trueRect instanceof Rect

function new1(Ctor) { // this is what 'new' should do
  var thing ={}; // make an object/array/'THING'
  Ctor.call(thing); // call the constructor on the thing
  return thing; // return the thing
} // this is missing the 'MAGIC STAMP'

var fakeRect = new1(Rect);
fakeRect.area();

function new2(Ctor) {
    var inst = {};
    inst.__proto__ = Ctor.prototype; // add "magic stamp"
    Ctor.call(inst);
    return inst;
}

var fakeRect = new2(Rect);

function Ctor() {
  this.a = 0;
  this.b = 1;
  return (a, b);
}
Ctor.prototype.d = 3; // most likely to set a prototype
obj1.constructor.prototype.d = 3
Object.getPrototypeOf(obj1).d = 3 // best practice
obj1.__proto__.d = 3 // 'taboo', against 'social norms'


function Deque() {
  this.array = [];
}
Deque.prototype.push = function(item) {
  return this.array.push(item);
}
Deque.prototype.pop = function() {
  return this.array.pop;
}

Deque.prototype.shift = function() {
  return this.array.shift;
}

Deque.prototype.unshift = function() {
  return this.array.unshift;
}

var deque = new Deque();

function traceAncestors(obj) { //--> return an array of prototypes
  var protos = [];
  var proto = obj.__proto__;
  while (proto !== Object.prototype){
    protos.push(proto);
    proto = proto.__proto__;
  }
  protos.push(proto);
  return protos;
}


var Rect = (function() {
  
  function Ctor(w, h) {
    this.width = w || 1;
    this.height = h || 1;
  }
  Ctor.prototype.area = function (){
    return (this.width * this.height);
  }
  return Ctor;
})()

var sq = new Rect(2,4);
sq.constructor = Square;

var Square = (function() {
  function Ctor2(size) {
    Rect.call(this, size, size); // this just Calls the Rect function for area
//     this.width = size;  also valid
//     this.height = size; also valid
  }
  Ctor2.prototype = new Rect;
  Ctor2.prototype.constructor = Square;
  return Ctor2;
}) ()



function A() {}
function B() {}
var adoptee = new A(); //create a new instance of A
B.prototype = adoptee; //links B to the new instance of A
adoptee.constructor = B; //Links the new instance of A to B


var Rect = (function() {
  var allTheRekt = [];
  var x = 0;
  function Ctor(w, h) {
    this.width = w || 1;
    this.height = h || 1;
    allTheRekt.push(this); // push 'this' to the array everytime Ctor is run
  }
  Ctor.every = function(){
    return allTheRekt.slice(); // return a slice/'COPY' of the array, so it can't be messed with
  }
  Ctor.prototype.area = function (){
    return (this.width * this.height);
  }
  return Ctor;
})()

var Square = (function() {
  function Ctor(size) {
    Rect.call(this, size, size); 
  }
//   Ctor.prototype = new Rect;
  Ctor.prototype = Object.create(Rect.prototype); // a "clean" object inherited from Rect!
  Ctor.prototype.constructor = Square;
  Ctor.prototype.size = function(num){
    if (arguments.length >  0) {       // look at how cool arguments looks!
      this.width = num;
      this.height = num;
    } else{
      return this.width;
    }
  }
  return Ctor;
}) ()

var r1 = new Rect(1, 1);
var r2 = new Rect(2, 2);
var r3 = new Rect(3, 3);


function new2(Ctor) {
var instance = Object.create(Ctor.prototype); // Links in the 'magic stamp' but it is 'clean'
// instance.__proto__ = ctor.prototype;
ctor.call(instance);  //does initialization
return instance;
};



var Animal = (function(){
    function Ctor(name) {
      this.name = name;
    }
    Ctor.prototype.move = function() {
        return 'Walk!';
    }
    return Ctor;
})()

var Bird = (function(){
    function Ctor() {
      
    }
    Ctor.prototype.fly = Object.create(Animal.prototype)
    function fly(){
        return 'fly'
    }
    bird.hasWings = true;
})()