class Item {
    constructor(item){
        this.name = `${item.enhancement > 0 ? `[+${item.enhancement}]` : ''}]${item.name}`,
        this.type = item.type,
        this.durability = item.durability || 100,
        this.enhancement = item.enhancement
    }
}

module.exports = {
    Item
}
