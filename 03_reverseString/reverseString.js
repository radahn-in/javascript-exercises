const reverseString = function(word) {
    const splitWord = word.split("");
    const reverseWord =splitWord.reverse();
    const joinWord = reverseWord.join("")

    return joinWord;
};

// Do not edit below this line
module.exports = reverseString;
