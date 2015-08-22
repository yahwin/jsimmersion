
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
    factory.talk = function(){
           console.log(this.noise);
    }
    return {
        name: name,
        noise: noise,
        }
}

var slug = factory ('slug', 'slime');
