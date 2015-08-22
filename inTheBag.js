// In the Bag

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
};

makeBag.draw = function(){
    random = Math.floor(Math.random * this.item.length );
    return this.item.splice(random, 1)[0];
};
