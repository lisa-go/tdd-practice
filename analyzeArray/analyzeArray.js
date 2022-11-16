function analyzeArray(array) {
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        if (value == '') {
            return 'error';
        }
        if (isNaN(value)) {
            return 'error';
        }
    }

    //average//
    const sum = array.reduce((a, b) => a + b, 0)
    const average = Math.round((sum / array.length) * 100 ) / 100;

    //min//
    const min = Math.min(...array);

    //max//
    const max = Math.max(...array);

    //length//
    const length = array.length;

    let object = {
        average, 
        min, 
        max, 
        length
    }

    return object;
}


module.exports = analyzeArray;