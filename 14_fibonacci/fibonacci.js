const fibonacci = function(index) {
    if (typeof index !== "number") index = Number.parseInt(index);
    if (index < 0) return "OOPS";

    if (index === 0) return 0;

    let prev = 0;
    let curr = 1;

    while (index > 1) {
        const next = prev + curr;
        prev = curr;
        curr = next;
        index--;
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
