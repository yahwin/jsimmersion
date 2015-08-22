// Exercise 5: Imaginary Menagerie
// a) Implement a simple taxonomy of four related classes, using a constructor for each:
//
// Animal: every instance of an Animal should inherit a method called move(). For basic animals, this just returns the string "walk". This method will be overridden by subclasses of Animal.
// Bird: A subclass of Animal. Every Bird instance should return "fly" instead of "walk" when asked to move(). All Birds also inherit a property hasWings which is true.
// Fish: Another subclass of Animal. A Fish instance will "swim" instead of "walk".
// Penguin: A subclass of Bird. Penguins cannot fly and they should move like Fish.
// Every instance of Animal and its subclasses should also have a personal name property which is not inherited. It should be set only within the constructor Animal, and each subclass constructor should first call its superclass constructor as an initializer, all the way up to Animal.

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
    Bird.prototype.fly = Object.create(Animal.prototype.move)
    function fly(){
        return 'fly'
    }
    Bird.hasWings = true;
    }
})()

Fish
