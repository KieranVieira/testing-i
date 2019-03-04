const { success } = require('./enhancer.js');

describe('enhancers.js', () => {
    describe('success()', () => {
        it('Should return item with enhancement +1', () => {
            expect(success({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 100,
                enhancement: 0
            }).enhancement).toBe(1)
        });
        it('Should return null if item is already PEN', () => {
            expect(success({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 100,
                enhancement: 20
            })).toBeNull()
        });
    });
})