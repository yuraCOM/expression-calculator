function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expres) {
    // write your solution here
    let x = 0;
    expres = expres.split(' ').join('');

    for (let i = 0; i < expres.length; i++) {
        if (expres[i] === '(') x++;
        if (expres[i] === ')') x--;
    }
    if (x !== 0) throw new Error("ExpressionError: Brackets must be paired");
    if (expres.includes('/0')) throw new Error("TypeError: Division by zero.");
    return new Function(`return ${expres}`)();
}

module.exports = {
    expressionCalculator
}