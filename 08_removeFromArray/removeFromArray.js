const removeFromArray = function (arr, ...num) {
    for (let i = 0; i < num.length; i++) {
        while (arr.indexOf(num[i]) != -1) {
            let ind = arr.indexOf(num[i]);
            if (ind != -1) {
                arr.splice(ind, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

