var cardTools = {
    ranks: {
            0: "Ace",
            1: "Two",
            2: "Three",
            3: "Four",
            4: "Five",
            5: "Six",
            6: "Seven",
            7: "Eight",
            8: "Nine",
            9: "Ten",
            10: "Jack",
            11: "Queen",
            12: "King",
        },
    suits: {h:"Hearts", d:"Diamonds", s:"Spades", c:"Clubs"},

    rank: function(id){
        var r = Math.floor(id/4) + 1;
        return r;
    },

    suit: function(id){

    }
};
