const analyzaArray = require('./analyzeArray');

test('finds values for an array', () => {
    expect(analyzaArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
})
test('finds values for a large array', () => {
    expect(analyzaArray([1,8,3,4,2,6,16,80,15,12,52,21,23])).toEqual({
        average: 18.69,
        min: 1,
        max: 80,
        length: 13
      });
})
test('finds values for a array with negative numbers', () => {
    expect(analyzaArray([10,-5,3,1,-8])).toEqual({
        average: 0.2,
        min: -8,
        max: 10,
        length: 5
      });
})
test('returns error if there is an empty string', () => {
    expect(analyzaArray([10,-5,3,1,-8,''])).toEqual('error');
})
test('returns error if there is a letter', () => {
    expect(analyzaArray([10,-5,3,1,-8,'b'])).toEqual('error');
})
test('returns error if there is a NaN', () => {
    expect(analyzaArray([10,'#',-5,3,1,-8])).toEqual('error');
})