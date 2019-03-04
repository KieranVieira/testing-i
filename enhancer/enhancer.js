const { Item } = require('../items/constructors.js');

module.exports = {
    success,
    fail,
    repair
}

function success(item){
    if(item.enhancement === 20){
        return null
    }else{
        if(item.durability <= 20 && item.enhancement <= 14){
            return null
        }else if(item.durability <= 0 && item.enhancement >= 15){
            return null
        }else{
            item.enhancement++;
            return new Item(item);
        }  
    } 
}

function fail(item){
    if(item.durability >= 20){
        item.enhancement-- ;
        return new Item(item);
    }else{
        return 'Durability is too low'
    }
}

function repair(item){
    item.durability = 100;
    
    return new Item(item)
}