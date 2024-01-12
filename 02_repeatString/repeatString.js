
const repeatString = function(repeatedWord, repeatCount) {
    let myString = "";
    if (repeatCount < 0){
        return 'ERROR';
    }
    else{
        for (let i = 0; i < repeatCount; i++){
            myString += repeatedWord;
        }
        return myString;
    }
};

// Do not edit below this line
module.exports = repeatString;
