const capitalize = require('./capitalize')

test('capitalizes short string', () => {
    expect(capitalize('apple')).toBe('Apple');
})
test('capitalizes longer string', () => {
    expect(capitalize('louisiana')).toBe('Louisiana');
})
test('capitalizes multiple words', () => {
    expect(capitalize('can you handle this')).toBe('Can you handle this');
})
test('does nothing to numbers', () => {
    expect(capitalize('12345p6789')).toBe('12345p6789');
})
test('returns error on empty strings', () => {
    expect(capitalize('')).toBe('error');
})