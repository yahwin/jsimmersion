
function talk() {
    console.log(this.noise);
}

var dog = {noise: 'woof', talk: talk};  cat = {noise: 'meow', talk: talk};  canary = {noise: 'chirp', talk: talk};

animals.alltalk = function() {
    this.forEach(function (animals) {
        animals.talk;
    })
}


var animals = [dog, cat, canary];

animals.allTalk = function() {
    this.forEach(function (element) {
        talk.call(element)
    } )
}
animals.allTalk(); // failure!


var dog = {
    name:'dog',
    noise:'woof',
    talk:function() {
        console.log(this.noise);
    }
}
var sheep = {
    name:'sheep',
    noise:'baaa',
    talk:function() {
        console.log(this.noise);
    }
}

function makeAnimal(name, noise){
    return {name: name, 
            noise: noise, 
            talk: function() { 
            console.log(this.noise); 
           } 
}
}



function factory (name, noise) {
    return {
        name: name,
        noise: noise,
        talk: factory.talk
        } 
}

factory.talk = function() {
    console.log(this.noise);
}

function marble (size, color){
    return {
        size: size,
        color: color,
        isBigger: function(other){
            if (this.size > other.size){
                return true;
            } else {
                return false;
            }
        }
    }
}

function marbleFactor(size, color){
    return {
        size: size,
        color: color,
        isBigger: marbleFactor.isBigger
    }
}

marbleFactor.isBigger = function(other){
    if (this.size > other.size){
                return true;
            } else {
                return false;
            }
}

var marblePrime = marbleFactor(99, 'silver')
var marbleRed = marbleFactor(11, 'black')


var bag = makeBag([1, 2, 5, 6, 'hello', 'cat', 'die'])


function makeBag(items){
    return {
    item: items,
    put: makeBag.put,
    draw: makeBag.draw,
    divide: makeBag.divide,
    serialize: makeBag.seralize
};
}

makeBag.put = function(item){
    this.item[item.length] = item;
    console.log("You're item is in your bag")
};

makeBag.draw = function(){
    random = Math.floor(Math.random * this.item.length );
    return this.item.splice(random, 1)[0]
};
