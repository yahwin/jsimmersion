// Closures and Private Variables
// 20 Aug 2015
// Review of Scope
// IIFE IMMIDEATELY INVOKED FUNCTION EXPRESSION

var y = 1, x = 1;
  function set() {
    var x = 3;
    function showIt() {
      console.log('x='+ x, 'y='+ y);
    }
    y = 3;
    return showIt;
  }
var get = set();

var fun = function () {
  var secret = true;
  function getter () {
    return secret;
  }
  return getter;
};
var tattletell = fun();

function makeAccessor() {
    var privateVal;
    return {
        get: function() {
            return privateVal;
        },
        set: function(val) {
            privateVal = val;
        }
    };
}

function objectMaker() {
  var x;
  return {
    getX: function() {
      return x;
    },
    setX: function(newX) {
      x = newX;
    }
  };
}

var obj = objectMaker();
obj.getX();
obj.setX('Whatever you want');
obj.getX();

function makeAccessor() {
    var privateVal;
    function accessFn(val) {
        privateVal = val;
    }
    function setFn() {
        return privateVal;
    }
    return accessFn;
}
// Example of use:
var cache = makeAccessor();

//functions have variables, objects have properties i.e. 'this'
function factory(id) { // id is declared as a local var because it is declared as a parameter
    var instance = {};
//    instance.id = id; //get rid of this so it can't be accesed via 'instance.id'
    instance.getID = function() {
        return this.id; // remove 'this' so it doesn't refer to the property of an object but rather 'id' a Variables
    }
    return instance;
}

var thing1 = factory(1);
console.log(thing1.getID());

assets = 1000, // needs a function with another function to access this 'sensitive information'
debt = 1000,
rate = 0,



function loanManager(assets, debt, rate) {
    var private = {};
    private.borrow = function(amount,rate) {
        assets += amount;
        debt += amount;
        rate = rate;
    },
    private.compoundInterest = function() {
        debt *= (1+rate);
    },
    private.repay = function(amount) {
        assets -= amount;
        debt -= amount;
    },
  private.tally = function() {
	    	console.log( 'assets: ' + assets + ', debts: ' + debt + ', rate: ' + rate );
  }
  return private;
};

var bank = loanManager();
bank.borrow();
bank.compoundInterest();
bank.repay();

// Write a (toy) password-authentication system! Start with a function storePassword(passwd). It should return a function which you can use to check whether a submitted password matches the stored one (passwd).

function storePassword(passwd) {
    var store = {};
//     var id = passwd;
    store.pwd = function() {
        return "Password Accepted";
    },
    store.check = function(chk) {
        return (passwd === chk);
    }
    return store;
}


// second way to do this bad boy
var storePassword = function (passwd) {
    var verifyPassword = function(checkPasswd){
      return (passwd === checkPasswd);
    }
    return verifyPassword;
}

//Practice: Counting Factory


var factory = function() {
    var _id = 1;

    var makeThing = function() {
        var thing_id = _id;

        var thing = {
            id: function() {
                return thing_id;
            },
            color: function() {
                return (thing_id%2 === 0) ? 'red': 'blue';
            }
        };
        _id++;
        return thing;
    };
    return makeThing;
};
var factory1 = factory();
var thing1 = factory1();
