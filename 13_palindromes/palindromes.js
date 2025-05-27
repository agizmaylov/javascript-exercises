const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    str = str
        .toLowerCase()
        .split("")
        .filter(ch => alphanumerical.includes(ch))
        .join("");

    return str === str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
