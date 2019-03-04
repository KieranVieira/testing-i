const { success, fail, repair } = require('./enhancer.js');

describe('enhancers.js', () => {
    describe('success()', () => {
        it('Should return item with enhancement +1', () => {
            expect(success({
                durability: 100,
                enhancement: 0
            }).enhancement).toBe(1)

            expect(success({
                durability: 100,
                enhancement: 14
            }).enhancement).toBe(15)

            expect(success({
                durability: 100,
                enhancement: 17
            }).enhancement).toBe(18)

            expect(success({
                durability: 1,
                enhancement: 17
            }).enhancement).toBe(18)

            expect(success({
                durability: 21,
                enhancement: 14
            }).enhancement).toBe(15)
        });
        it('Should return null if item is already PEN', () => {
            expect(success({
                durability: 100,
                enhancement: 20
            })).toBeNull()
        });
        it('Should return null if item has less than 20 durability and is <= +14', () => {
            expect(success({
                durability: 15,
                enhancement: 6
            })).toBeNull()
        });
        it('Should return null if item has less than 0 durability and is >= +15', () => {
            expect(success({
                durability: 0,
                enhancement: 15
            })).toBeNull()
        });
    });
    describe('fail()', () => {
        it('Should return durability -10 on fail if enhancement is > 14', () => {
            expect(fail({
                durability: 21,
                enhancement: 15
            }).durability).toBe(11)
        });
        it('Should return durabiltiy -5 on fail if enhancement is < 15 ', () => {
            expect(fail({
                durability: 26,
                enhancement: 14
            }).durability).toBe(21)
        });
        it('Should return null if enhancment is > 14 and durability is <= 10', () => {
            expect(fail({
                durability: 10,
                enhancement: 15
            })).toBeNull();
            expect(fail({
                durability: 5,
                enhancement: 20
            })).toBeNull();
        });
        it('Should return null if enhancment is <= 14 and durability is less than 25', () => {
            expect(fail({
                durability: 25,
                enhancement: 14
            })).toBeNull();
            expect(fail({
                durability: 1,
                enhancement: 2
            })).toBeNull();
        });
        it('Should downgrade enhancement by 1 if enhancement is > 16 && durability > 10', () => {
            expect(fail({
                durability: 25,
                enhancement: 16
            }).enhancement).toBe(16);
            expect(fail({
                durability: 25,
                enhancement: 17
            }).enhancement).toBe(16)
        });
    });
    describe('repair()', () => {
        it('Should repair item to 100 durability if durability is not already 100', () => {
            expect(repair({
                durability: 25,
                enhancement: 14
            }).durability).toBe(100);
        });
        it('Should return null if item is already at 100 durability', () => {
            expect(repair({
                durability: 100,
                enhancement: 14
            })).toBeNull();
        });
    });
})