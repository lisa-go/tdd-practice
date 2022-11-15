function caesarCipher(string, key) {
    let cypher = [];
    for (let i = 0; i < string.length; i++) {
        var stringCode = string.charCodeAt(i);

        if (stringCode < 65 ||
            stringCode >= 91 && 
            stringCode <= 96 ||
            stringCode > 122) {
                let cypherCode = String.fromCharCode(stringCode);
                cypher.push(cypherCode);
        }

        else {
            var stringKey;
            var stringDiff;
            stringKey = stringCode + key;

            //upper case letters//
            if (stringCode >= 65 && stringCode <= 90) {
                if (stringKey > 90) {
                    stringDiff = stringKey - 90;
                    stringKey = stringDiff + 64;
                }
            }

            //lower case letters //
            if (stringCode >= 97 && stringCode <= 122) {
                if (stringKey > 122) {
                    stringDiff = stringKey - 122;
                    stringKey = stringDiff + 96;
                }
            }

            let cypherCode = String.fromCharCode(stringKey);
            cypher.push(cypherCode);
        }
        
    }
    return cypher.join('');
}

module.exports = caesarCipher;