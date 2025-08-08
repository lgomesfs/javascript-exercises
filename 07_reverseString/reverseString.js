// const reverseString = function(str) {
//     let revStr = '';
//     for(let i = -1; i>=-str.length; i--){
//         revStr += str.at(i);
//     }
//     return revStr;
// };

const reverseString = function(str) {
    return str.split('').reverse().join('');

};
// Do not edit below this line
module.exports = reverseString;
