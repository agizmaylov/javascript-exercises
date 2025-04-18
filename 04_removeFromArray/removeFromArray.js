const removeFromArray = function(arr, ...elsToRemove) {
    // functional out-of-place
    // return arr.filter(el => !elsToRemove.includes(el));

    // loop in-place
    for (let i = arr.length - 1; i >= 0; i--) {
        const el = arr[i];
        if (elsToRemove.includes(el)) arr.splice(i, 1);
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
