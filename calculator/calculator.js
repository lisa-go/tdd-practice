function calculator(num1, op, num2) {
    if (num1 === '' || num2 === '') {
        return 'error';
    }
    
    switch(op) {
        case '+':
            return Math.round((num1 + num2) * 100) / 100;

        case '-':
            return Math.round((num1 - num2) * 100) / 100;

        case '*':
            return Math.round((num1 * num2) * 100) / 100;
        
        case '/':
            return Math.round((num1 / num2) * 100) / 100;
    }

}

module.exports = calculator;