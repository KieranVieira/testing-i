const { success, fail, repair } = require('./enhancer.js');

describe('enhancers.js', () => {
    describe('success()', () => {
        it('Should return item with enhancement +1', () => {
            expect(success({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 100,
                enhancement: 0
            }).enhancement).toBe(1)

            expect(success({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 100,
                enhancement: 14
            }).enhancement).toBe(15)

            expect(success({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 100,
                enhancement: 17
            }).enhancement).toBe(18)

            expect(success({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 1,
                enhancement: 17
            }).enhancement).toBe(18)

            expect(success({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 21,
                enhancement: 14
            }).enhancement).toBe(15)
        });
        it('Should return null if item is already PEN', () => {
            expect(success({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 100,
                enhancement: 20
            })).toBeNull()
        });
        it('Should return null if item has less than 20 durability and is <= +14', () => {
            expect(success({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 15,
                enhancement: 6
            })).toBeNull()
        });
        it('Should return null if item has less than 0 durability and is >= +15', () => {
            expect(success({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 0,
                enhancement: 15
            })).toBeNull()
        });
    });
    describe('fail()', () => {
        it('Should return durability -10 on fail if enhancement is > 14', () => {
            expect(fail({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 21,
                enhancement: 15
            }).durability).toBe(11)
        });
        it('Should return durabiltiy -5 on fail if enhancement is < 15 ', () => {
            expect(fail({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 26,
                enhancement: 14
            }).durability).toBe(21)
        });
        it('Should return null if enhancment is > 14 and durability is <= 10', () => {
            expect(fail({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 10,
                enhancement: 15
            })).toBeNull();
            expect(fail({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 5,
                enhancement: 20
            })).toBeNull();
        });
        it('Should return null if enhancment is <= 14 and durability is less than 25', () => {
            expect(fail({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 25,
                enhancement: 14
            })).toBeNull();
            expect(fail({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 1,
                enhancement: 2
            })).toBeNull();
        });
        it('Should downgrade enhancement by 1 if enhancement is > 16 && durability > 10', () => {
            expect(fail({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 25,
                enhancement: 16
            }).enhancement).toBe(16);
            expect(fail({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 25,
                enhancement: 17
            }).enhancement).toBe(16)
        });
    });
    describe('repair()', () => {
        it('Should repair item to 100 durability if durability is not already 100', () => {
            expect(repair({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 25,
                enhancement: 14
            }).durability).toBe(100);
        });
        it('Should return null if item is already at 100 durability', () => {
            expect(repair({
                name: 'Lambda Shield',
                type: 'Weapon',
                durability: 100,
                enhancement: 14
            })).toBeNull();
        });
    });
})