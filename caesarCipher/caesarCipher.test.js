const caesarCipher = require('./caesarCipher');

test('1 character to the right', () => {
    expect(caesarCipher('banana', 1)).toBe('cbobob');
})
test('2 character to the right', () => {
    expect(caesarCipher('but have you seen this', 2)).toBe('dwv jcxg aqw uggp vjku');
})
test('mix of upper and lower case', () => {
    expect(caesarCipher('CaN yOu sEe tHIS', 2)).toBe('EcP aQw uGg vJKU');
})
test('punctuations stay the same', () => {
    expect(caesarCipher('This, is a test for! Some, of the - punctuations.', 2)).toBe('Vjku, ku c vguv hqt! Uqog, qh vjg - rwpevwcvkqpu.');
})
test('large key does not mess up', () => {
    expect(caesarCipher('A test for a Very large key', 25)).toBe('Z sdrs enq z Udqx kzqfd jdx');
})