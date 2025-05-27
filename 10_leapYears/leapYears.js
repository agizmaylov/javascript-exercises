const leapYears = function(year) {
    const divisibleByFourHundred = year % 400 === 0;
    const divisibleByFour = year % 4 === 0;
    const notDivisibleByHundred = year % 100 !== 0;
    return divisibleByFourHundred || (divisibleByFour && notDivisibleByHundred);
};

// Do not edit below this line
module.exports = leapYears;
