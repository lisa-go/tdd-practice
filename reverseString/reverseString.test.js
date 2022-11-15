const reverseString = require('./reverseString')

test('reverses short string', () => {
    expect(reverseString('apple')).toBe('elppa');
}) 
test('reverses long string', () => {
    expect(reverseString('pineapple')).toBe('elppaenip');
}) 
test('reverses multiple words', () => {
    expect(reverseString('pineapple on pizza is good')).toBe('doog si azzip no elppaenip');
}) 
test('reverses numbers and words', () => {
    expect(reverseString('i ordered 10 pizzas for everyone')).toBe('enoyreve rof sazzip 01 deredro i');
}) 
test('empty string returns error', () => {
    expect(reverseString('')).toBe('error');
}) 
