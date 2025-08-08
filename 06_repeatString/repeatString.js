const repeatString = function(str,num){
    let repStr = '';
    for(let i = 0; i<num;i++){
        repStr+=str;
    }
    if(num<0){
        return 'ERROR';
    }

    return repStr;
};

// Do not edit below this line
module.exports = repeatString;
