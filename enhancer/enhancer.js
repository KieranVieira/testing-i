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
    if(item.enhancement < 15){
        if(item.durability > 25){
            item.durability -= 5
            return new Item(item);
        }else{
            return null;
        }
    }else if(item.enhancement >= 15){
        if(item.durability > 10){
            item.durability -= 10;
            if(item.enhancement > 16){
                item.enhancement -= 1;
            }
            return new Item(item);
        }else{
            return null;
        }
    }
}

function repair(item){
    if(item.durability < 100){
        item.durability = 100;
        return new Item(item)
    }else{
        return null
    }
}