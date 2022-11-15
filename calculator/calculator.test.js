const calculator = require('./calculator');

test('sums 1 + 2 to be 3', () => {
    expect(calculator(1, '+', 2)).toEqual(3);
})
test('subtracts 100 - 1 to be 99', () => {
    expect(calculator(100, '-', 1)).toEqual(99);
})
test('multiplies 500 * 5000 to be 2500000', () => {
    expect(calculator(500, '*', 5000)).toEqual(2500000);
})
test('divides 15000 / 20 to be 750', () => {
    expect(calculator(15000, '/', 20)).toEqual(750);
})
test('sums negative numbers correctly', () => {
    expect(calculator(-5, '+', 7)).toEqual(2);
})
test('decimal numbers work', () => {
    expect(calculator(1.2, '-', 0.1)).toEqual(1.1);
})
test('returns NaN when random strings are inputted', () => {
    expect(calculator('abc', '*', 'def')).toBe(NaN);
})
test('returns error when empty string is inputted', () => {
    expect(calculator('', '+', '')).toBe('error');
})