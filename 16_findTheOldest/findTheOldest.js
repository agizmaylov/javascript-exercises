const findTheOldest = function(people) {
    const currYear = new Date().getFullYear();

    let oldestAge = -1;
    const oldestPersonIdx = people.reduce((oldestIdx, person, i) => {
        const age = (person.yearOfDeath ?? currYear) - person.yearOfBirth;
        if (age > oldestAge) {
            oldestAge = age;
            return i;
        }
        return oldestIdx;
    }, -1);
    return people[oldestPersonIdx];
};

// Do not edit below this line
module.exports = findTheOldest;
