const names = ["Jack", "Jill", "Tommy", "Alfonso", "Xander", "Mordecai"];
const numbers = [2, 5, 8, 15, 34, 65, 395, 4996];

/*
    Quick Reference:

    Map: Create (and return) a new array by doing something with each item.
        (Element, Index, Array)

    Filter: Create a new array by keeping the items that return true.
        (Element, Index, Array)

    Reduce: Accumulate a value by doing something to each item in an array.
        (Accumulator, CurrentElement, CurrentIndex, Array)

    Find: Find the first matching item in an array.
        (Element, Index, Array)

    FindIndex: Find the index of the first matching item in an array.
        (Element, Index, Array)
*/

// MAP

const squaredNumbers = numbers.map((x) => {
    return x * x;
});

// FILTER

const namesWithA = names.filter((name) => {
    name.toLowerCase().includes('a');
});


// REDUCE

const sumNumbers = numbers.reduce((prev, current) => {
    return prev + current;
});


// FIND 

const nameWithX = names.find((name) => {
    return name.toLowerCase().includes('x');
});

// FIND INDEX

const nameIndexWithX = names.findIndex((name) => {
    return name.toLowerCase().includes('x');
});