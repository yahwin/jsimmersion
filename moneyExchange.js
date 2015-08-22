// Toolkit Object Example
// Here's an example of a dictionary object, whose keys are not known in advance:
//
// var unitsPerDollar = {
//     Dollar: 1,
//     Euro: 0.90,
//     Pound: 0.64,
//     Peso: 16.42,
//     Yen: 124.41,
//     Yuan: 6.40
// }
// In contrast, here's a simple example of a Toolkit object, a currency converter. Its keys are fixed and can be mentioned in the code:
// var exchange = {
//     rate: 1.10, //dollars per euro
//
//     toDollars: function(euros) {
//         return euros * this.rate;
//     },
//
//     toEuros: function(dollars) {
//         return dollars / this.rate;
//     },
//
//     convert: function(string) {
//         if (string[0]==='$')
//             return 'E'+this.toEuros(string.slice(1));
//         if (string[0]==='E')
//             return '$'+this.toDollars(string.slice(1));
//         return this.toDollars(string);
//     }
// };
//
// exchange.convert('$20.00');
// Modify the exchange toolkit to have one data property, a dictionary object listing multiple exchange rates, and two methods:
//
// convertTo(amount,toUnit): convert amount of dollars into the equivalent in toCurrency;
//
// convertFrom(amount,fromUnit): convert 'amount' of foreign currency in fromUnits to the equivalent in dollars.
//
// It might be used as follows:
//
// exchange.convertTo(20,"Yen");
// exchange.convertFrom(5,"Euro");

var exchange = {
     unitsPerDollar: {
    Dollar: 1,
    Euro: 0.90,
    Pound: 0.64,
    Peso: 16.42,
    Yen: 124.41,
    Yuan: 6.40,
},


    convertTo: function(amount, toUnit) {
        return amount * this.unitsPerDollar[toUnit] + ' ' + toUnit;
    },

  convertFrom: function(amount, fromUnit) {
        return amount / this.unitsPerDollar[fromUnit] + ' dollars';
}

};
