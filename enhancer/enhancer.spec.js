const { success } = require('./enhancer.js');

const mockItem = {
    name: 'Lambda Shield',
    type: 'Weapon',
    durability: 100,
    enhancement: 0
}

const mockItem2 = {
    name: 'Lambda Shield',
    type: 'Weapon',
    durability: 100,
    enhancement: 1
}

describe('enhancers.js', () => {
    describe('success()', () => {
        it('Should return item with enhancement +1', () => {
            expect(success(mockItem)).toEqual(mockItem2)
        });
    });
})