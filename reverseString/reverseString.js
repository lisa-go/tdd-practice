
function reverseString(string) {
    if (string === '') {
        return 'error';
    }
    return string.split('').reverse().join('');
}

module.exports = reverseString;