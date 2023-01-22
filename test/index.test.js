const index = require('.././index');

test('should return correct values from examples provided', () => {
    expect(index.identifyPools([9, 8, 7, 8, 9, 5, 6])).toBe(5);
    expect(index.identifyPools([3, 4, 3, 2])).toBe(0);
    expect(index.identifyPools([7, 1 ,6])).toBe(5);
})