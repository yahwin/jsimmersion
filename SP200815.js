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
}
var tattletell = fun();

var fun = function () {
  var secret = true;
  function setter(arg) {
    secret = arg;
  }
  return setter;
}
var valueChanger = fun();


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
        if (val){
          privateVal = val;
        } else {
          return privateVal;
        }
    }
    return accessFn;
}
var cache = makeAccessor();


function makeAccessor() {
    var privateVal;
    function accessFn(val) {
        if (arguments.length > 0){
          privateVal = val;
        } else {
          return privateVal;
        }
    }
  return accessFn;
}
var cache = makeAccessor();

function factory(id) {
    var instance = {};
    instance.getID = function() {
        return id;  
    }
    return instance;
}

var thing1 = factory(1);
console.log(thing1.getID());


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

var x = 0;
var sequence = function() {
  return x++
};

function practice() {
  var x = 0;
  var seq = function() {
    return x++
  }
  return seq;
}

var seqence2 =  practice();


function practice() {
  var x = 0;
  var seq = function(num) {
    return num + x++;
  }
  return seq;
};
var nextUp = practice();

var counter = function() {
  var x = 0;
  var seq = {};
  seq.next = function() {
    return x++;
  },
  seq.reset = function(start) {
    if (arguments.length > 0){
      x = start;
    } else {
      x = 0;
    }
  }
  return seq;
}
var count = counter();

function storePassword(passwd) {
    var store = {};
//     var id = passwd;
    store.pwd = function() {
        return "Password Accepted";
    },
    store.check = function(chk) {
        return (passwd === chk)
    }
    return store;
}

var storePassword = function (passwd) {
    var verifyPassword = function(checkPasswd){
      return (passwd === checkPasswd);
    }
    return verifyPassword;
}

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



