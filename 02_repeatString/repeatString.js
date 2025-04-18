const repeatString = function(string, repetitions) {
    if (repetitions < 0) return "ERROR";

    let repeatedString = "";

    while (repetitions > 0) {
        repeatedString += string;
        repetitions--;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
