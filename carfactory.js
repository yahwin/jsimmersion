// Create a car factory, that takes the paramaters: make, model and color.
// Return a car from that car factory
// which is a black honda accord

// var carFactory = function(make, model, color) {
//
//     var makeCar = function () {
//
//         var car = function(make){
//             return make;
//         },
//         car.model = function(model) {
//             return model;
//         },
//         car.color = function (color){
//             return color;
//         },
//         return car;
//     };
//     return makeCar;
// }

// var carFactory = function (){
//     var makeCar = function (make, model, color){
//         makeCar.make = function(make) {
//             return make;
//         },
//         makeCar.model = function(model) {
//             return model;
//         },
//         makeCar.color = function(color){
//             return color;
//         };
//
//     };
//     return makeCar;
// }

var carFactory = function(make, model, color) {
    return {
        make: make,
        model: model,
        color: color,
        honk: function(noise){
            this.honk = noise;
        },
        safety: function(year){
            if (arguments.length === 0){
                return "Please enter a year";
            } else if (year >= 2009){
                return "safe";
            }else{
                return false;
            }
        },
        speed: function(mph){
            if (arguments.length <= 0){
                return "The car isn't even moving!";
            } else if ( mph >= 75){
                return "Whoop, Whoop. Pull over for your ticket!";
            } else {
                return "Thank you for obeying the speed limit";
            }
        }
    };
};

var car = carFactory('honda', 'accord', 'black');

//mass production of cars
var Detroit = function() {
    function Ctor(cars){
        for (i = 0; i < cars; i ++) {

        }
        Ctor.prototype = Object.create(carFactory);
    }
}
