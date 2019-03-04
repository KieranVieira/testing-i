class Item {
    constructor(item){
        this.name = item.name,
        this.type = item.type,
        this.durability = item.durability || 100,
        this.enhancement = item.enhancement
    }
}

module.exports = {
    Item
}
