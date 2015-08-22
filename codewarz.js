var sortArray = function(value) {


  return value.split('').sort((c, p) => c / p ).join('');
}

var sortArray = function(value) {
  valArray = value.split();
  valSort = valArray.sort()
  return valSort;
}

// shorter concat reverse shorter
function shorter_reverse_longer(a,b){
  a = a;
  b = b;
  if ( a.length === b.length) {
  	var x = a + b.split('').reverse().join('')+ a;
  	return x;
    consle.log(x);
  } else if(a.length > b.length){
      var c = b + a.split('').reverse().join('') + b;
      return c;
  } else {
      var d = a + b.split('').reverse().join('')+ a;
      return d;
  }
}

shorter_reverse_longer('cat', 'dog');
