function capitalize(string) {
    if (string === '') {
        return 'error';
    }
    return string[0].toUpperCase() + string.slice(1);
}

module.exports = capitalize;