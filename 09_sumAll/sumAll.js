const sumAll = function (a, b) {
    let total = 0;
    let min = 0, max = 0;

    if (a < 0 || b < 0 ||
        !(Number.isInteger(a)) || !(Number.isInteger(b)) ||
        isNaN(a) || isNaN(b)) {
        return 'ERROR';
    }

    if (a > b) {
        min = b;
        max = a;
    }
    else {
        min = a;
        max = b;
    }

    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
